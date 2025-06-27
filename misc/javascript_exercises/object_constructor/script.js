// Exercise
// Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

// console.log(theHobbit.info());

function Book(title, author, pageCount) {
    if (!new.target) {
        throw Error("You MUST use 'new' keyword when creating a Book object");
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = false;

    this.getInfo = function () {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.read ? "Has Read" : "Has NOT Read"}`
    }

    this.markRead = function () {
        this.read = true;
    }
}

const myBook = new Book("Lord of The Rings", "Tolkin", 854);

console.log(myBook.getInfo());

myBook.markRead();

console.log(myBook.getInfo());