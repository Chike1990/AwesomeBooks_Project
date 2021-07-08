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
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

class MyBook {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => MyBook.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', MyBook.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Validate
  if (title === '' || author === '') {
    MyBook.alert('Please fill in all fields');
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
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  MyBook.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
