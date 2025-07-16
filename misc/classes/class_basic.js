class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = false;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'already read' : 'not read yet'}`;
    }

    setToRead() {
        this.hasRead = true;
    }

    setToUnread() {
        this.hasRead = false;
    }

    getHasRead() {
        return this.hasRead;
    }
}

const myBook = new Book("The Hobbit", "J.R.R. Tolkien", 310);

console.log(myBook.getInfo());

myBook.setToRead();

console.log(myBook.getInfo());
