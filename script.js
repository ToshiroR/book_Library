//     objects that connect to

const formField = document.querySelector(".form-container");
const addedBooks = document.querySelector(".added-book");
const form = document.getElementById("form");
const add = document.getElementById("add-btn");




//      Objects that hold form data

const readVal = document.getElementById("read");

let myLibrary = [];
let newBook = '';



//      Constructor for organizing the New Books

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
};


//      function that adds form data to myLibrary

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  addedToBookList(myLibrary);
  
  

};


//      function for creating Book card on the Dom

function addedToBookList() {
  addedBooks.innerHTML = "";

  for (i = 0; i < myLibrary.length; i++) {
    const card = `<div class="book-card" >
                    <div class="card">
                      <h2>${myLibrary[i].title}</h2>
                      <p>${myLibrary[i].author}</p>
                      <p>${myLibrary[i].pages}</p>
                      <button onclick="readBtn()" id="read-btn"value ="">${myLibrary[i].read}</button>
                      <button onclick="removeBtn(event)" data-index="${myLibrary[i].title}">Remove</button>
                    </div>
                  </div>`
       
    const div = document.createElement("div");
    div.innerHTML = card;
    addedBooks.appendChild(div.firstChild);

  };

};



//      Event listener for Submiting Form

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => { 
  event.preventDefault();
  addBookToLibrary();
  
});


//     Event listener for remove button

const remove = document.getElementById("remove");

function removeBtn(event) {
  const bookCard = document.querySelector(".book-card");
  const arrIndex = event.target.getAttribute("data-index");

  for (i=0; i < myLibrary.length; i++) {

    if(myLibrary[i].title == arrIndex) {
      bookCard.remove();
      myLibrary.splice(myLibrary[i], 1)
    }
  }
};




//      Button for changing read Status



function readBtn(event) {
  const readStBtn = document.getElementById("read-btn");

  if (readStBtn.value == ) {}


}


//      Test books for the basic constructor

myLibrary.push(new Book("Lord Of The Hoes", "Jhonny Sins", 420, "Read it"));
myLibrary.push(new Book("Smooth Criminal", "little Michael ", 423, "Read it"));
myLibrary.push(new Book("Two Piece", "Noel Miller", 1500, "Not Read"));

addBookToLibrary()

console.table(myLibrary)