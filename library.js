
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
    details.setAttribute('class','details');
    book.setAttribute("class","mybooks");
    details.innerText=`Title: ${mylibrary[i].title}
    Author: ${mylibrary[i].author}
    Pages: ${mylibrary[i].pages}
    Read Status: ${mylibrary[i].read}
    `
    books.style.cssText=`
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:1rem;
    justify-items:center;
    `
    books.appendChild(book)
    book.append(details);
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

checkBook.addEventListener("click",veiwbooks,);

Add.addEventListener("click",()=>{
    if(Title.value!=""&&Pages.value!=""&&Author.value!="")
        addbook();
    else
        window.alert("please enter the details first")
})


