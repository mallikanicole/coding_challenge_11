//Task 1 Creating a Book Class
class Book {
    constructor(title,author,isbn,copies) {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.copies=copies;
    };//create class of books
    getDetails(){
        return `Title:${this.title}, Author:${this.author}, ISBN:${this.isbn}, Copies:${this.copies}`;
    }//log book details
    updateCopies(quantity){
        if (this.copies>=quantity){
            this.copies+=quantity;
        }else{
            console.log("No Copies");
        }//modify available copies
    }
}
//Test
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2 Creating a Borrower Class

class Borrower {
    constructor(name,borrowerID,borrowedBooks) {
        this.name=name;
        this.borrowerID=borrowerID;
        this.borrowedBooks=[];
    };//create class of borrowers
    borrowBook(book){
        this.borrowedBooks.push(book);
    };//add book to borrowed list
    returnBook(book){
        this.borrowedBooks.pop(book);
    };//remove book from borrowed list
};

//test
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

//Task 3 Creating a Library Class

class Library {
    constructor(books,borrowers) {
        this.books=[];
        this.borrowers=[];
    };//add books and borrowers to library class
    addBook(book){
        this.books.push(book);
    }//add books to library
    listBooks(){
        this.books.forEach(book=>console.log(book.getDetails()));
    };//log details of books
}

//test
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"