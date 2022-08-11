let myLibrary = [];

let libraryTable = document.getElementById('library');
libraryTable.style.display = 'none';

let submitBtn = document.getElementById('add');
const bookForm = document.getElementById('addBookForm');

bookForm.style.display = 'none';

const bdy = document.querySelector('body')

const bookBtn = document.querySelector('#addBookBtn');

let submitInitiator = true;

//Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//User hits submit button, create book object and add to library
function createLibraryEntry(){
    if (submitInitiator){
    submitBtn.addEventListener('click', () => {
        submitInitiator = false;
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let readStatus = document.querySelector('input[name="readStatus"]:checked').value;
        myLibrary.push(new Book(title, author, pages, readStatus));
        bookForm.style.display = 'none';
        addBooktoTable();
    })
    }
}

//Function to add Book objects as DOM elements; Uses last element in myLibrary array, called upon new object being added to myLibrary.
function addBooktoTable(){
    for (let book = (myLibrary.length - 1); book < myLibrary.length; book++){
        let tblTitle = document.createElement('div');
        tblTitle.classList.add('delete');
        libraryTable.appendChild(tblTitle);
        tblTitle.textContent = myLibrary[book].title;

        let tblAuthor = document.createElement('div');
        tblAuthor.classList.add('delete');
        libraryTable.appendChild(tblAuthor);
        tblAuthor.textContent = myLibrary[book].author;

        let tblPages = document.createElement('div');
        tblPages.classList.add('delete');
        libraryTable.appendChild(tblPages);
        tblPages.textContent = myLibrary[book].pages;

        let tblRead = document.createElement('div');
        tblRead.classList.add('delete');
        libraryTable.appendChild(tblRead);
        tblRead.textContent = myLibrary[book].read;

        let tblRemove = document.createElement('button');
        libraryTable.appendChild(tblRemove);
        tblRemove.classList.add('delete');
        tblRemove.setAttribute('data-iteration', `${book}`)
        tblRemove.textContent = 'Remove';
        tblRemove.addEventListener('click', (e) => {
            removeBook(e.target.dataset.iteration); 
        })
    }
}

//iterate through library, remove corresponding book object from library that matches the clicked button.
function removeBook(removeBtnClass) {
    let rmvNodeList = document.querySelectorAll('.delete');
    for (element of rmvNodeList){
        element.remove();
    }

    for (let i = 0; i < myLibrary.length; i++){
        if (removeBtnClass == i){
            myLibrary.splice(i, 1);
        }
    }
    for (let iter = 0; iter < myLibrary.length; iter++){
        let tblTitle = document.createElement('div');
        tblTitle.classList.add('delete');
        libraryTable.appendChild(tblTitle);
        tblTitle.textContent = myLibrary[iter].title;

        let tblAuthor = document.createElement('div');
        tblAuthor.classList.add('delete');
        libraryTable.appendChild(tblAuthor);
        tblAuthor.textContent = myLibrary[iter].author;

        let tblPages = document.createElement('div');
        tblPages.classList.add('delete');
        libraryTable.appendChild(tblPages);
        tblPages.textContent = myLibrary[iter].pages;

        let tblRead = document.createElement('div');
        tblRead.classList.add('delete');
        libraryTable.appendChild(tblRead);
        tblRead.textContent = myLibrary[iter].read;

        let tblRemove = document.createElement('button');
        libraryTable.appendChild(tblRemove);
        tblRemove.classList.add('delete');
        tblRemove.setAttribute('data-iteration', `${iter}`);
        tblRemove.textContent = 'Remove';
        tblRemove.addEventListener('click', (e) => {
            removeBook(e.target.dataset.iteration); 
        })
    }
}

//User hits new book button, form is displayed
bookBtn.addEventListener('click', (e) => {
    if (e.target.innerHTML === '+ New book') {
        bookForm.style.display = 'block';
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

