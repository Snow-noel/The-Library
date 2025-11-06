
const button=document.getElementById("Addbook");

const mylibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addbook(title,author,pages,read){
  this.title= title;
   this.author=author;
   this.pages=pages;
   this.read=read;

    const book=new Book("Love","snow",126,"yes");
    const book2=new Book("My love", "Snow", 100, "yes");
    mylibrary.push(book,book2);
}
addbook();
for (let i=0; i<mylibrary.length; i++){
    console.log(mylibrary[i]);
}
