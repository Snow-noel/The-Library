
const main=document.getElementById("main");
const checkBook=document.getElementById("veiwbook");
const books=document.getElementById("books")
const Title=document.getElementById("title");
const Author=document.getElementById("author");
const Pages=document.getElementById("pages");
const Read=document.getElementById("read");
const Add=document.getElementById("Add");
const createbook=document.querySelector(".createbook");



const mylibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
    let mybook=new Book("Found Love","Snow",5000,"Read")
     mylibrary.push(mybook);
function veiwbooks(){
    books.innerHTML="";

for (let i=0; i<mylibrary.length; i++){
    
    const book=document.createElement('div');
    const details=document.createElement('h2');
    const Delete=document.createElement('button')
    Delete.textContent="Delete"
    Delete.classList.add('delete')
    details.setAttribute('class','details');
    book.classList.add("mybook")
    details.innerText=`Title: ${mylibrary[i].title}
    Author: ${mylibrary[i].author}
    Pages: ${mylibrary[i].pages}
    Status: ${mylibrary[i].read}
    `
    books.style.cssText=`
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:1rem;
    justify-items:center;
    `
    books.appendChild(book)
    book.append(details);
    book.append(Delete);
Delete.addEventListener("click",()=>{
    mylibrary.splice(i,1)
    veiwbooks();
        
    })
}

}
function addbook(){
    let Status="Read";
    if(!Read.checked){
        Status="Unread";
    }
       let book=new Book(Title.value,Author.value,Pages.value,Status);
       mylibrary.push(book);
       Title.value=""
       Author.value=""
       Pages.value=""
       Read.value=""
       checkBook.textContent="veiw updated library"
    
}

checkBook.addEventListener("click",veiwbooks);
Add.addEventListener("click", () => {
    const inputContainsNumber = (inputValue) => /[0-9]/.test(inputValue);

    const titleValue = Title.value;
    const authorValue = Author.value;
    const pagesValue = Pages.value;

    const isAnyFieldEmpty = titleValue === "" || authorValue === "" || pagesValue === "";
    const titleHasNumber = inputContainsNumber(titleValue);
    const authorHasNumber = inputContainsNumber(authorValue);

    if (isAnyFieldEmpty || titleHasNumber || authorHasNumber) {
        const error= document.createElement('p')
        Title.value=""
        Author.value=""
        Pages.value=""
        Read.value=""
        error.textContent=" Error: Please check your details: ensure all fields are filled, and Title/Author contain only text."
        error.classList.add('error');
           main.append(error);
        setTimeout(()=>{
            main.removeChild(error)
        },5000);
    } else {
        addbook();
    }
});



