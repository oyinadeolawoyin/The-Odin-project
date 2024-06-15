const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.add = function() {
        myLibrary.push([this.title, this.author, this.pages, this.read]);
        return myLibrary
    };


    this.removeBook = function(item) {
        console.log(item)
        for(i = 0; i < myLibrary.length; i++){
            console.log(i, myLibrary)
            let book = myLibrary[i].join(",");
            console.log(item, "=", book)
            console.log(book)
            if(book === item) {
                console.log("true")
                myLibrary.splice(i, 1)
                
            }
        }
        console.log(myLibrary)
        return myLibrary
        
    }
}

function createForm() {
    let form = document.createElement("form");
    form.setAttribute("id", "dynamicForm");

    let bookTitleInput = document.createElement("input");
    bookTitleInput.setAttribute("type", "text");
    bookTitleInput.setAttribute("id", "bookTitle");
    bookTitleInput.setAttribute("name", "bookTitle");
    bookTitleInput.setAttribute("placeholder", "Enter book title");
    bookTitleInput.classList.add("bookTitle")

    let bookAuthorInput = document.createElement("input");
    bookAuthorInput.setAttribute("type", "text");
    bookAuthorInput.setAttribute("id", "bookAuthor");
    bookAuthorInput.setAttribute("name", "bookAuthor");
    bookAuthorInput.setAttribute("placeholder", "Enter book author");
    bookAuthorInput.classList.add("bookAuthor")

    let bookPageInput = document.createElement("input");
    bookPageInput.setAttribute("type", "number");
    bookPageInput.setAttribute("id", "bookPage");
    bookPageInput.setAttribute("name", "bookPage");
    bookPageInput.setAttribute("placeholder", "Enter book pages");
    bookPageInput.classList.add("bookPages")


    let bookReadInput = document.createElement("input");
    bookReadInput.setAttribute("type", "text");
    bookReadInput.setAttribute("id", "bookRead");
    bookReadInput.setAttribute("name", "bookRead");
    bookReadInput.setAttribute("placeholder", "Read / not");
    bookReadInput.classList.add("bookRead")

    let bookFileInput = document.createElement("input");
    bookFileInput.setAttribute("type", "file");
    bookFileInput.setAttribute("id", "bookFile");
    bookFileInput.setAttribute("name", "bookFile");
    bookFileInput.setAttribute("placeholder", "Upload book File");
    bookFileInput.classList.add("bookFile")

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add Book";
    submitButton.classList.add("button")

    form.appendChild(bookTitleInput);
    form.appendChild(bookAuthorInput);
    form.appendChild(bookPageInput);
    form.appendChild(bookReadInput);
    form.appendChild(bookFileInput);
    form.appendChild(submitButton);

    let formContainer = document.getElementById("formContainer");
    formContainer.appendChild(form);

        // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
            
        const bookTitle = document.querySelector(".bookTitle");
        const bookAuthor = document.querySelector(".bookAuthor");
        const bookPages = document.querySelector(".bookPages");
        const bookRead = document.querySelector(".bookRead"); 

       let store = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
       let wordlist = [];
       wordlist.push(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
       display = store.add() 
       
       displayBook(wordlist)
       setTimeout(()=> {
        form.reset();

        console.log(myLibrary)
    })
    });
}

let bookStore = document.querySelector("#bookStore")
function displayBook(bookInfo) {
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
    label.setAttribute("for", "read");
    label.textContent = "Status: Read";
    
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", "read");
    input.setAttribute("name", "status");
    
    let label2 = document.createElement("label");
    label2.setAttribute("for", "notRead"); 
    label2.textContent = "  /Not Read"; 
    
    let input2 = document.createElement("input");
    input2.setAttribute("type", "radio");
    input2.setAttribute("id", "notRead");
    input2.setAttribute("name", "status");
    
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
    bookDetails.appendChild(bookFileInput);

    let bookRemove = document.createElement("button");
    bookRemove.classList.add("removemyBook");
    bookRemove.textContent = "Remove Book";
    bookPara3.appendChild(bookRemove);
    bookDetails.appendChild(bookPara3)

    let removeBook = document.querySelectorAll(".removemyBook");
    removeBook.forEach(button => {
        button.addEventListener("click", ()=> {
            let bookClass = document.querySelector(".bookClass").textContent;
        
            let bookToRemove = new Book()
            bookToRemove.removeBook(bookClass);

            let parentDiv = document.querySelector(".parentDiv");
            parentDiv.remove()
            
        })
    })
}

let newBook = document.querySelector(".newBook");
// let removeBook = document.querySelector(".removeBook");

newBook.addEventListener("click", createForm);
// console.log(myLibrary)
// removeBook.addEventListener("click", ()=> {
//     let removeMyBook = document.querySelector(".removeBook");
//     let previousSibling = removeMyBook.previousElementSibling;

//     let bookToRemove = new Book()
//     bookToRemove.removeBook(previousSibling)
// })