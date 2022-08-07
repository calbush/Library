let myLibrary = [];

let libraryTable = document.getElementById('library');
libraryTable.style.display = 'none';

let submitBtn = document.getElementById('add');
const bookForm = document.getElementById('addBookForm');

//bookForm.style.display = 'none';

const bdy = document.querySelector('body')

const bookBtn = document.querySelector('#addBookBtn');

//Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//User hits submit button, create book object and add to library
function createLibraryEntry(){
    submitBtn.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let readStatus = document.querySelector('input[name="readStatus"]:checked').value;
        myLibrary.push(new Book(title, author, pages, readStatus));
        //bookForm.style.display = 'none';
        addBooktoTable();
    })
}

//Function to add Book objects as DOM elements
function addBooktoTable(){
    for (let book = (myLibrary.length - 1); book < myLibrary.length; book++){
        let tblTitle = document.createElement('div');
        libraryTable.appendChild(tblTitle);
        tblTitle.textContent = myLibrary[book].title;

        let tblAuthor = document.createElement('div');
        libraryTable.appendChild(tblAuthor);
        tblAuthor.textContent = myLibrary[book].author;

        let tblPages = document.createElement('div');
        libraryTable.appendChild(tblPages);
        tblPages.textContent = myLibrary[book].pages;

        let tblRead = document.createElement('div');
        libraryTable.appendChild(tblRead);
        tblRead.textContent = myLibrary[book].read;
    }
}

//User hits new book button, form is displayed
bookBtn.addEventListener('click', (e) => {
    if (e.target.innerHTML === '+ New book') {
        //bookForm.style.display = 'block';
        createLibraryEntry();
    }
})

document.querySelector('body').addEventListener('click', () => {
    if (myLibrary.length > 0){
        libraryTable.style.display = 'grid';
    }
})














/* create Book object constructor..
detect when 'add book' button has been clicked...
display a form for the user fill out...
client side form form validation...
take form info and turn into instance of Book object...
add new instance of Book object into array...
display array on the webpage... */

