const main=document.getElementById("main");
const checkBook=document.getElementById("veiwbook");
const books=document.getElementById("books")
const Title=document.getElementById("title");
const Author=document.getElementById("author");
const Pages=document.getElementById("pages");
const Read=document.getElementById("read");
const Add=document.getElementById("Add");
const mylibrary=[];
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addbook(){

       let book=new Book(Title.value,Author.value,Pages.value,Read.value);
       mylibrary.push(book);
       added=true
       Title.value=""
       Author.value=""
       Pages.value=""
       Read.value=""
}
function veiwbooks(){
    books.innerHTML="";
for (let i=0; i<mylibrary.length; i++){
    const book=document.createElement('div');
    const details=document.createElement('h2');
    details.setAttribute('class','details');
    book.setAttribute("class","mybook");
    details.innerText=`Title: ${mylibrary[i].title}
    Author: ${mylibrary[i].author}
    Pages: ${mylibrary[i].pages}
    Read Status: ${mylibrary[i].read}
    `
    books.style.cssText=`
    display: grid;
    grid-template-columns:1fr 1fr ;
    grid-template-rows: 1fr 1f;
    gap:2rem;
    `
    books.appendChild(book)
    book.append(details);
}
}
checkBook.addEventListener("click",veiwbooks,);

Add.addEventListener("click",()=>{
    if(Title.value!=""&&Pages.value!=""&&Author.value!=""&&Read.value!="")
        addbook();
    else
        window.alert("please enter the details first")
})


