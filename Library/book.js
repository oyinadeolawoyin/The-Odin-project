const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.add = function() {
        myLibrary.push([this.title, this.author, this.pages]);
        return myLibrary
    };

    this.removeBook = function(item) {
        let findItem = myLibrary.findIndex(book => book === item.split(","));
        myLibrary.splice(findItem, 1);

        return myLibrary;   
    }
}

function createForm() {
    let form = document.createElement("form");
    form.setAttribute("id", "dynamicForm");

    let paraInfo = document.createElement("p");
    paraInfo.textContent = "* Fields are required.";
    paraInfo.classList.add("infoPara")

    let bookTitleInput = document.createElement("input");
    bookTitleInput.setAttribute("type", "text");
    bookTitleInput.setAttribute("id", "bookTitle");
    bookTitleInput.setAttribute("name", "bookTitle");
    bookTitleInput.setAttribute("required", "")
    bookTitleInput.setAttribute("placeholder", "*Enter book title");
    bookTitleInput.classList.add("bookTitle", "input")

    let bookAuthorInput = document.createElement("input");
    bookAuthorInput.setAttribute("type", "text");
    bookAuthorInput.setAttribute("id", "bookAuthor");
    bookAuthorInput.setAttribute("name", "bookAuthor");
    bookAuthorInput.setAttribute("required", "")
    bookAuthorInput.setAttribute("placeholder", "*Enter book author");
    bookAuthorInput.classList.add("bookAuthor", "input")

    let bookPageInput = document.createElement("input");
    bookPageInput.setAttribute("type", "number");
    bookPageInput.setAttribute("id", "bookPage");
    bookPageInput.setAttribute("name", "bookPage");
    bookPageInput.setAttribute("placeholder", "Enter book pages");
    bookPageInput.classList.add("bookPages", "input")

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add Book";
    submitButton.classList.add("button", "input")

    form.appendChild(paraInfo)
    form.appendChild(bookTitleInput);
    form.appendChild(bookAuthorInput);
    form.appendChild(bookPageInput);
    form.appendChild(submitButton);

    let formContainer = document.getElementById("formContainer");
    formContainer.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let wordList = []
        let bookTitle = document.querySelector(".bookTitle");
        let bookAuthor = document.querySelector(".bookAuthor");
        let bookPages = document.querySelector(".bookPages");

       let store = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
       
       let storageBook = store.add()
       wordList.push(bookTitle.value, bookAuthor.value, bookPages.value);
       displayBook(wordList) 

       formContainer.innerHTML = ""

        return storageBook
    });
}

function displayBook(bookInfo) {
    let bookStore = document.querySelector("#bookStore");
    let bookDetails = document.createElement("div");
    bookDetails.classList.add("parentDiv");

    let bookParag = document.createElement("p")
    let bookParag1 = document.createElement("p");
    let bookParag2 = document.createElement('p');
    bookParag2.classList.add("bookClass")
    
    let bookPara = document.createElement("div");
    let bookPara2 = document.createElement("p");
    let bookPara3 = document.createElement("p");


    let bookText = document.createTextNode("Book Details.");
    let bookText1 = document.createTextNode(`${bookInfo[(bookInfo.length)-3]} by ${bookInfo[(bookInfo.length)-2]}`);
    let bookText2 = document.createTextNode(`${bookInfo[(bookInfo.length)-1]} pages.`)
    let bookText3 = document.createTextNode(bookInfo);

    bookParag.appendChild(bookText);
    bookPara.appendChild(bookParag);
    bookParag2.appendChild(bookText3);
    bookPara.appendChild(bookParag2);
    bookPara.appendChild(bookText1);
    bookParag1.appendChild(bookText2);
    bookPara.appendChild(bookParag1);
    bookDetails.appendChild(bookPara);
    bookStore.appendChild(bookDetails);

    let label = document.createElement("label");
    label.setAttribute("for", bookInfo[(bookInfo.length)-3]+bookInfo[(bookInfo.length)-2]);
    label.textContent = "Status: Read";

    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", bookInfo[(bookInfo.length)-3]+bookInfo[(bookInfo.length)-2]);
    input.setAttribute("name", bookInfo[(bookInfo.length)-3]+bookInfo[(bookInfo.length)-2]);

    let label2 = document.createElement("label");
    label2.setAttribute("for", bookInfo[(bookInfo.length)-2]+bookInfo[(bookInfo.length)-3]); 
    label2.textContent = "  /Not Read"; 

    let input2 = document.createElement("input");
    input2.setAttribute("type", "radio");
    input2.setAttribute("id", bookInfo[(bookInfo.length)-2]+bookInfo[(bookInfo.length)-3]);
    input2.setAttribute("name", bookInfo[(bookInfo.length)-3]+bookInfo[(bookInfo.length)-2]);

    bookPara2.appendChild(label);
    bookPara2.appendChild(input);
    bookPara2.append(label2);
    bookPara2.appendChild(input2);
    bookDetails.appendChild(bookPara2);

    let bookFileInput = document.createElement("input");
    bookFileInput.setAttribute("type", "file");
    bookFileInput.setAttribute("id", "bookFile");
    bookFileInput.setAttribute("name", "bookFile");
    bookFileInput.setAttribute("placeholder", "Upload book File");
    bookFileInput.classList.add("bookFile", "input")

    let bookRemove = document.createElement("button");
    bookRemove.classList.add("removeBook");
    bookRemove.textContent = "Remove Book";

    bookPara3.appendChild(bookRemove);
    bookDetails.appendChild(bookFileInput);
    bookDetails.appendChild(bookPara3);
    
    let removemyBook = document.querySelectorAll(".removeBook");

    removemyBook.forEach(button => {
        button.addEventListener("click", (event) => {
            let buttonClicked = event.currentTarget;
            let parentDiv = buttonClicked.closest(".parentDiv");
            let bookClass = parentDiv.querySelector(".bookClass").textContent;

            let bookToRemove = new Book();
            bookToRemove.removeBook(bookClass);
            parentDiv.remove();
          
        });
    });
}

let newBook = document.querySelector(".newBook");
newBook.addEventListener("click", ()=> {
    if(formContainer.children.length === 1) {
        let inform = document.querySelector(".inform");
        inform.innerHTML = ""
    }
    else{
        createForm()
    };
});