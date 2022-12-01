//     objects that connect to the DOM    //

const formField = document.querySelector(".form-container");
const addedBooks = document.querySelector(".added-book");
const form = document.getElementById("myForm");



//    Form Validation and submit    //

function validateForm(event) {
  event.preventDefault()
  let x = document.forms["myForm"]["title"].value;
  let y = document.forms["myForm"]["author"].value;
  if (x == "") {
    alert("Title must be filled out");
    return false;
  }
  if (y == "") {
    alert("Author must be filled out");
    return false;
  }
  addBookToLibrary();
  form.reset()
}


//      AddEventListener for Add Book Button    //

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", (e) => {

  if (form.style.display == "none") {
    addBtn.textContent = "Exit Form"
    form.style.display = "block"
    addBtn.style.backgroundColor = "red"
  }
  else if (form.style.display == "block") {
    addBtn.textContent = "+ Add Book"
    form.style.display = "none"
    addBtn.style.backgroundColor = "#00cf0a"
  }
})
  
  
//      Objects that hold form data   //

let myLibrary = JSON.parse(localStorage.getItem("books")) || [];
let newBook = '';


//      Constructor for organizing the New Books  //

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};


//      function that adds form data to myLibrary   //

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").value;
  newBook = new Book(title, author, pages, status);

  
    myLibrary.push(newBook);
    addedToBookList(myLibrary);
  
    //    Local storage  //
    localStorage.setItem("books", JSON.stringify(myLibrary));
    
};


//      function for creating Book card on the Dom    //

function addedToBookList() {
  addedBooks.innerHTML = "";

  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title !== "") {
    const card = `<div class="book-card" data-index="${myLibrary[i].title}">
                    <div class="card">
                      <h2>${myLibrary[i].title}</h2>
                      <p>By ${myLibrary[i].author}</p>
                      <p>${myLibrary[i].pages} Pages</p>
                      <button class="readBtn" onclick="readBtn(event)">${myLibrary[i].status}</button>
                      <button class="remove" onclick="removeBtn(event)">Remove</button>
                    </div>
                  </div>`

    
    const div = document.createElement("div");
    div.innerHTML = card;
    addedBooks.appendChild(div.firstChild);
    } 
  };
};


//     Event listener for remove button   //

function removeBtn(event) {
  
  const arrIndex = event.target.parentNode.parentElement.getAttribute("data-index");
  let newLibrary = myLibrary.filter(book => book.title !== arrIndex && book.title !== "")
  
  myLibrary = newLibrary
  addBookToLibrary()
};


//      Button for changing read Status   //

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


//      Test books 


addedToBookList()




