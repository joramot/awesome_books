const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
document.querySelector('#addBtn').addEventListener('click', (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector('#bookTitle').value;
  const authorName = document.querySelector('#authorName').value;
  bookList.push({ title: bookTitle, author: authorName });
  localStorage.setItem('bookList', JSON.stringify(bookList));
  document.querySelector('form').reset();
});