const myBooks = [];

function awesomeBooks(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(newAweSomeBook) {
  myBooks.push(newAweSomeBook);
}

