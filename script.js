const myBooks = [];

function awesomeBooks(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(newAweSomeBook) {
  myBooks.push(newAweSomeBook);
}

function displayBook(newAweSomeBook){
  const list = document.querySelector('#books');
  const row = document.createElement('div');
  row.innerHTML = `
  <h4>${newAweSomeBook.title}</h4>
  <p>${newAweSomeBook.author}</p>
  <button class="btn danger">Remove</button>

  list.appendChild(row);
  `
}

function createAwesomeBooks(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  e.preventDefault();

  function validateForm(title, author) {
    let newAweSomeBook;
    if (title === '' || author === '' ) {
      // eslint-disable-next-line no-alert
      alert('please fill all the form');
    } else {
      newAweSomeBook = new awesomeBook(title, author);
      addBook(newAweSomeBook);

      const bookObj = {
        title: newAweSomeBook.title,
        author: newAweSomeBook.author,
      };

      // Put the object into storage
      const bookIndex = localStorage.length === 0 ? 0 : localStorage.length;
      localStorage.setItem(bookIndex.toString(), JSON.stringify(bookObj));

      const form = document.getElementById('book-form');
      form.reset();
      displayBook(newAweSomeBook);
    }
  }
  validateForm(title, author);
}

submit.addEventListener('click', (e) => createBook(e));

