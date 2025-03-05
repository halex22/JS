// import  EBook  from "./model/e_book.js";
import { EBook } from "./model/book.js";
import  User from "./model/user.js";
import  PremiumUser from "./model/premium_user.js";
import  Library from "./model/library.js";
import  paperBooks from "./paper_books.js";

// console.log(bookPhy1.toString());

const eBook1 = new EBook(`Lord of the rings`, `J.R.R. Tolkien`, 80054278, `.mobi`);
// console.log(eBook1.toString());

const regularUser = new User(`Patrick`, `T-1520` );
const regularUser2 = new User(`Bob`, `T-9678` );
const premiumUser = new PremiumUser('Hugo', 'T-25468')
const premiumUser2 = new PremiumUser('Pippo', 'T-78521')

// console.log(regularUser.borrowedBooks)
// regularUser.borrowBook(paperBook1)
// console.log(regularUser.borrowedBooks)
// console.log(paperBook1.toString())
// regularUser.borrowBook(paperBook1)

const libraryUsers = [regularUser, regularUser2, premiumUser, premiumUser2]
// const paperBooks = [paperBook1, paperBook2, paperBook3, paperBook4, paperBook5, paperBook6, paperBook7, paperBook8, paperBook9];

const myLibrary = new Library()
paperBooks.forEach(book => myLibrary.addBook(book))
myLibrary.listBooks()
console.log(myLibrary.isBookAvailable(567890))
// myLibrary.borrowBook(regularUser2, paperBook4)

