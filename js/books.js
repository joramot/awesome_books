class BookList {
  constructor() {
    this.books = [];
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('bookList');
    this.displayBooks();
    this.form.addEventListener('submit', this.addBook.bind(this));
    this.bookList.addEventListener('click', this.removeBook.bind(this));
  }

  displayBooks() {
    bookList.className = 'bookList';
    bookList.innerHTML = '';
    books.forEach((book, index) => {
      const li = document.createElement('li');
      li.className = 'lineBook';
      li.innerHTML = ` " ${book.title} " by ${book.author} <button class="removeBtn" data-index="${index}">Remove</button>`;
      bookList.appendChild(li);
    });
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('authorName').value;
  const newBook = { title, author };
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  form.reset();
  displayBooks();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const { index } = event.target.dataset;
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
});

displayBooks();
