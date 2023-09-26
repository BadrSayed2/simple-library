

class Book{
    
    constructor(title ,author ,pages,ifRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.ifRead = ifRead;
    }

    read (){
        this.ifRead =true;
    }

}


let library = {

    books : [],
    indexOfDisplayedBook:0,


    addBookToLibrary(book) {

        if(book instanceof Book){
            this.books.push( new Book(book.title , book.author ,book.pages , book.ifRead));
            return true;
        } else{
            return false;
        }
    } ,

    displayNewBook(){
        const cards =document.querySelector('div.cards');
        const card = document.createElement('div');
        const addedBook = this.books[this.indexOfDisplayedBook];
        card.classList.add('card');

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = 'author : ' + addedBook.author;
        card.appendChild(author);


        const title = document.createElement('div');
        title.textContent = 'title : ' + addedBook.title;
        title.classList.add('title')
        card.appendChild(title);

        const pages = document.createElement('div');
        pages.textContent = 'pages : ' + addedBook.pages;
        pages.classList.add('pages');
        card.appendChild(pages);
        
        
        const ifRead = document.createElement('div');
        if(addedBook.ifRead == true){
            ifRead.textContent = 'read';
            ifRead.classList.add('read');
        } else{
            ifRead.textContent = 'not read';
            ifRead.classList.add('not-read');            
        }
        card.appendChild(ifRead);
        
        
        cards.appendChild(card);
        this.indexOfDisplayedBook++;

    }
    
}


const book1 = new Book('aero','saso',123,false);
const book2 = new Book('aero','saso',123,false);
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);

library.displayNewBook();
library.displayNewBook();



