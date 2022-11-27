//     objects that connect to

const formField = document.querySelector(".form-container");
const addedBooks = document.querySelector(".added-book");
const form = document.getElementById("myForm");


//      AddEventListener for Add Book Button

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", (e) => {

  if (form.style.display == "none") {
    addBtn.textContent = "Exit Form"
    form.style.display = "block"
  }
  else if (form.style.display == "block") {
    addBtn.textContent = "+ Add Book"
    form.style.display = "none"
  }
  
})
  
  
//      Objects that hold form data

let myLibrary = [];
let newBook = '';


//      Constructor for organizing the New Books

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

};


//      function that adds form data to myLibrary

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").value;
  newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  addedToBookList(myLibrary);

};


//      function for creating Book card on the Dom

function addedToBookList() {
  addedBooks.innerHTML = "";

  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title !== "") {
    const card = `<div class="book-card" data-index="${myLibrary[i].title}">
                    <div class="card">
                      <h2>${myLibrary[i].title}</h2>
                      <p>${myLibrary[i].author}</p>
                      <p>${myLibrary[i].pages}</p>
                      <button class="readBtn" onclick="readBtn(event)">${myLibrary[i].status}</button>
                      <button onclick="removeBtn(event)">Remove</button>
                    </div>
                  </div>`

    
    const div = document.createElement("div");
    div.innerHTML = card;
    addedBooks.appendChild(div.firstChild);
    
    } 
  };
};


//      Event listener for Submiting Form

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => { 
  event.preventDefault();
  addBookToLibrary();
  form.reset()
  
});


//     Event listener for remove button


function removeBtn(event) {
  
  const arrIndex = event.target.parentNode.parentElement.getAttribute("data-index");
  let newLibrary = myLibrary.filter(book => book.title !== arrIndex && book.title !== "")
  
  myLibrary = newLibrary
  addBookToLibrary()
};


//      Button for changing read Status


function readBtn(event) {

  const readIndex = event.target.parentNode.parentElement.getAttribute("data-index");
  let readTarget = event.target.textContent;

  for(i=0; i < myLibrary.length; i++)  {

    if (readTarget === "Read It" && readIndex === myLibrary[i].title) { 
      myLibrary[i].status = "Not Read";
      addBookToLibrary() 
    } 
    if (readTarget === "Not Read" && readIndex === myLibrary[i].title) { 
      myLibrary[i].status = "Read It";
      addBookToLibrary()
    }
  }
}


//      Test books for the basic constructor

myLibrary.push(new Book("Lord Of The Hoes", "Jhonny Sins", 420, "Read It"));
myLibrary.push(new Book("Two Piece", "Noel Miller", 1500, "Not Read"));

addBookToLibrary()







