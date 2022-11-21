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
  
  const arrIndex = event.target.getAttribute("data-index");
  let newLibrary = myLibrary.filter(book => book.title !== arrIndex && book.title !== "")
  
  myLibrary = newLibrary
  addBookToLibrary()
};




//      Button for changing read Status



function readBtn(event) {

  const readIndex = event.target.getAttribute("data-index");
  console.log(readIndex)

}


/* function readBtn(readBtn_id) {
  const pTarget = readBtn_id.target.getElementById("readBtn")
  const targetIndex = pTarget.getAttribute("data-index");

  
  let btnText = document.getElementById(readBtn_id);
    

  for(i=0; i < myLibrary.length; i++)  {

    if (btnText.textContent === "read" && targetIndex === myLibrary[i].title) {    
      btnText.textContent = "unread";
      console.log(pTarget)
    } 
      
    if (btnText.textContent === "unread" && targetIndex === myLibrary[i].title) {    
      btnText.textContent = "read";
      console.log(pTarget)
   
    }
  }
    
*/
//};


 // if (readStBtn == "read" || ) {
 //   readStBtn = "Unread";
 //   unreadBtn.innerText = "Unread"
 //   console.log(readIndex);

//    } 
//    else if (readStBtn == "Unread") {
//    readStBtn = "read";
//    unreadBtn.innerText = "read";
//    }
  











