const submit = document.getElementById('submit');
const myBook = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook(newBook) {
    this.myBook.push(newBook);
  }

  displayBook(newBook) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('div');
    row.innerHTML = `
      <h4>${this.newBook.title}</h4>
      <h4>${this.newBook.author}</h4>
      <button><a href="#" class="btn btn-danger btn-sm remove">Remove</a></button><hr>`;

    list.appendChild(row);

    const bookIndex = myBook
      .map((book) => book.title)
      .indexOf(newBook.title);
      // update book read state in local storage
    localStorage.setItem(bookIndex.toString(), JSON.stringify(newBook));
  }
}








document.querySelector('#book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
  }
});

function addBook(newBook) {
  myBook.push(newBook);
}

function displayBook(newBook) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('div');
  row.innerHTML = `
      <h4>${this.newBook.title}</h4>
      <h4>${this.newBook.author}</h4>
      <button><a href="#" class="btn btn-danger btn-sm remove">Remove</a></button><hr>`;

  list.appendChild(row);

  const bookIndex = myBook
    .map((book) => book.title)
    .indexOf(newBook.title);
  // update book read state in local storage
  localStorage.setItem(bookIndex.toString(), JSON.stringify(newBook));
}

function createBook(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  e.preventDefault();
  function validateForm(title, author) {
    let newBook;
    if (title === '' || author === '') {
      // eslint-disable-next-line no-alert
      alert('please fill all the form');
    } else {
      newBook = new Book(title, author);
      addBook(newBook);
      const bookObj = {
        title: newBook.title,
        author: newBook.author,
      };
        // Put the object into storage
      const bookIndex = localStorage.length === 0 ? 0 : localStorage.length;
      localStorage.setItem(bookIndex.toString(), JSON.stringify(bookObj));
      const form = document.getElementById('book-form');
      form.reset();
      displayBook(newBook);
    }
  }
  validateForm(title, author);
}

submit.addEventListener('click', (e) => createBook(e));
