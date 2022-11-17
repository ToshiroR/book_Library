//     objects that connect to

const formField = document.querySelector(".form-container");
const addedBooks = document.querySelector(".added-book");
const form = document.getElementById("myForm");
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


//      Test books for the basic constructor

myLibrary.push(new Book("Lord Of The Hoes", "Jhonny Sins", 420, "read"));
myLibrary.push(new Book("Smooth Criminal", "little Michael ", 423, "read"));
myLibrary.push(new Book("Two Piece", "Noel Miller", 1500, "unread"));

addBookToLibrary()

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
    if (myLibrary[i].title !== "") {
    const card = `<div class="book-card" data-index="${myLibrary[i].title}">
                    <div class="card">
                      <h2>${myLibrary[i].title}</h2>
                      <p>${myLibrary[i].author}</p>
                      <p>${myLibrary[i].pages}</p>
                      <button id="readBtn" onclick="readBtn(event)">${myLibrary[i].read}</button>
                      <button onclick="removeBtn(event)" data-index="${myLibrary[i].title}">Remove</button>
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

const remove = document.getElementById("remove");

function removeBtn(event) {
  const bookCard = document.querySelector(".book-card");
  const arrIndex = event.target.getAttribute("data-index");
  const bookIndex = bookCard.getAttribute("data-index");

  console.log(arrIndex)

  let newLibrary = myLibrary.filter(book => book.title !== arrIndex && book.title !== "")
  
  myLibrary = newLibrary
  addBookToLibrary()
  console.table(myLibrary)
};




//      Button for changing read Status

const unreadBtn = document.getElementById("readBtn");




function readBtn(event) {

    
    let btnText = event.target.textContent;

    console.log(btnText)

    if (btnText === "read") {
          
      btnText = "unread";
      console.log(readIndex)
        
    } 
      
    if (btnText === "unread") {
          
      btnText.textContent = "read";
      console.log(readIndex)
    }

    

  };


 // if (readStBtn == "read" || ) {
 //   readStBtn = "Unread";
 //   unreadBtn.innerText = "Unread"
 //   console.log(readIndex);

//    } 
//    else if (readStBtn == "Unread") {
//    readStBtn = "read";
//    unreadBtn.innerText = "read";
//    }
  











