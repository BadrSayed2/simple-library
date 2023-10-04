

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


// ##################################################################################################



this.library = {

    books : [],
    indexOfDisplayedBook:0,


    addBookToLibrary(book) {

        if(book instanceof Book){
            this.books.push( new Book(book.title , book.author ,book.pages , book.ifRead));
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
            card.appendChild(ifRead);
        } else{
            ifRead.textContent = 'not read';
            ifRead.classList.add('not-read');
            
            const read =document.createElement('button');
            read.textContent = 'read';
            card.appendChild(ifRead);
            card.appendChild(read);


            read.addEventListener('click',function(){
            addedBook.read();
            read.setAttribute('style','display:none;');
            ifRead.textContent = 'read';

            ifRead.classList.remove('not-read');
            ifRead.classList.add('read');
        });          
        }
        
        
        
        cards.appendChild(card);
        this.indexOfDisplayedBook++;

    }
    
}



// #################################################################################################

//the form control logic 

        const authorField= document.querySelector('input#author');
        const titleField= document.querySelector('input#title');
        const pagesField= document.querySelector('input#pages');
class formController {
    
    clearFormFields(){
  
        authorField.value='';
        titleField.value='';
        pagesField.value='';
    }
    
    static activateButton(){
        
        const readStatusField = document.querySelector('select#read-status');
        const submitButton = document.querySelector('button#submit');


        submitButton.addEventListener('click' , function(event){
            event.preventDefault();
        },false);
        
        
        
        submitButton.addEventListener('click',function(){
            let authorName = authorField.value;
        
            let titleName = titleField.value;
            
            let pagesNo = pagesField.value;
            
        
            let readStatus = readStatusField.value;
            let ifRead=false;    
            if(readStatus ==='read'){
                ifRead=true;
                }
            let newBook = new Book(titleName,authorName,pagesNo,ifRead);
            window.library.addBookToLibrary(newBook);
            console.log(window.library);
            window.library.displayNewBook();
            clearFormFields();
        
        });
    }
    
}

formController.activateButton();

// ##################################################################################################