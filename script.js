const submit = document.getElementById('submit');

class Book {
  constructor(title, author) {
    this.bookTitle = title;
    this.bookAuthor = author;
  }
}

class MyBook {
  constructor() {
    this.myBook = [];
  }

  addBook(newBook) {
    myBook.push(newBook);
  }

  displayBook(newBook) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('div');
    row.innerHTML = `
      <h4>${newBook.title}</h4>
      <h4>${newBook.author}</h4>
      <button><a href="#" class="btn btn-danger btn-sm remove">Remove</a></button><hr>`;

    list.appendChild(row);

    const bookIndex = myBook
      .map((book) => book.title)
      .indexOf(newBook.title);
      // update book read state in local storage
    localStorage.setItem(bookIndex.toString(), JSON.stringify(newBook));

    // loads previous added books
    // eslint-disable-next-line func-names
    window.onload = function () {
      for (let i = 0; i < localStorage.length; i += 1) {
        const retrievedObject = localStorage.getItem(i);
        const newBookObj = JSON.parse(retrievedObject);
        createNewBookFromLocalStorage(
          newBookObj.title,
          newBookObj.author,
        );
      }
    };

    document.querySelector('#book-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
      }
    });

    createBook(e); {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      e.preventDefault();
      validateForm(title, author); {
        let newBook;
        if (title === '' || author === '') {
          // eslint-disable-next-line no-alert
          alert('please fill all the form');
        } else {
          newBook = new Books(title, author);
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
    
  }
}

submit.addEventListener('click', (e) => createBook(e));
