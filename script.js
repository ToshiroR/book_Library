//     objects that connect to

const formField = document.querySelector(".form-container");
const addedBooks = document.querySelector(".added-book");
const form = document.getElementById("form");
const add = document.getElementById("add-btn");




//      Objects that hold form data

const readVal = document.getElementById("read");

let myLibrary = [];
let newBook = '';



//      Constructor for organizing the Books

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${this.title} is a book by ${this.author}, ${this.pages} pages, not read yet.`
  }
};


//      function that adds form data to myLibrary

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
  addedToBookList(myLibrary, addedBooks);
  
  console.table(myLibrary);

};


//      function for creating Book card on the Dom

function addedToBookList() {
  addedBooks.innerHTML = "";

  for (i = 0; i < myLibrary.length; i++) {
    const card = `<div class="book-card" data-index=${i}>
                    <div class="card">
                      <h2>${myLibrary[i].title}</h2>
                      <p>${myLibrary[i].author}</p>
                      <p>${myLibrary[i].pages}</p>
                      <p>${myLibrary[i].info()}</p>
                      <button onclick="removeBtn()">Remove</button>
                    </div>
                  </div>`
       
    const div = document.createElement("div");
    div.innerHTML = card;
    addedBooks.appendChild(div.firstChild)

  };

};


//      Test book for the basic constructor

myLibrary.push(new Book("Lord Of The Hoes", "Jhonny Sins", 420, "read it"));


//      Event listener for Submiting Form

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {

  event.preventDefault();
  addBookToLibrary();
  
});


//     Event listener for remove button

const remove = document.getElementById("remove");

function removeBtn() {
  const bookCard = document.querySelector(".book-card");
  bookCard.remove();

  
};






