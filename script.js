/* eslint max-classes-per-file: ["error", 3] */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  setToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(id) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

class MyBook {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => MyBook.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const div = document.createElement("div");
    div.classList.add("table-row")

    div.innerHTML = `
            <div>
              <span>${book.title}</span>
                <span>${book.author}</span>
              </div>
              <div>
              <a href="#" class="btn btn-danger btn-sm delete">Remove</a>
            </div>
      `;

    list.appendChild(div);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", MyBook.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;

  // Validate
  if (title === "" || author === "") {
    MyBook.alert("Please fill in all fields");
  } else {
    // Instatiate book
    const book = new Book(title, author);

    // Add Book to MyBook
    MyBook.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Clear fields
    MyBook.clearFields();
  }
});

// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // Remove book from Store
  MyBook.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

const store = new Store([]);

const addBtn = document.querySelector("#submit");

/* global luxon */
/* eslint no-undef: "error" */

const displayDate = () => {
  const dateNowFormat = luxon.DateTime.now().toFormat("FF");
  document.querySelector(".date-now").innerText = dateNowFormat;
};

const listBtn = document.querySelector(".list__nav");
const addBookBtn = document.querySelector(".list__add");
const contactBtn = document.querySelector(".list__contact");
const listOption = document.querySelector(".container__list");
const listAdd = document.querySelector(".container__add");
const listContact = document.querySelector(".container__contact");

listBtn.addEventListener("click", () => {
  listOption.style.display = "block";
  listAdd.style.display = "none";
  listContact.style.display = "none";
});

addBookBtn.addEventListener("click", () => {
  listOption.style.display = "none";
  listAdd.style.display = "flex";
  listContact.style.display = "none";
});

contactBtn.addEventListener("click", () => {
  listOption.style.display = "none";
  listAdd.style.display = "none";
  listContact.style.display = "flex";
});

setInterval(() => {
  displayDate();
}, 1000);
