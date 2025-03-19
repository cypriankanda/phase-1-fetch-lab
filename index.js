function fetchBooks() {
  // Make a fetch request to the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())  // Convert the response to JSON
    .then(books => renderBooks(books));  // Call renderBooks() and pass the books data
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;  // Set the book title as content for the h2 element
    main.appendChild(h2);  // Append the h2 element to the main element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();  // Call fetchBooks when the DOM is loaded
});
