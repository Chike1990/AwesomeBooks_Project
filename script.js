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
