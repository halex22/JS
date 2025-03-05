class Book {
  #isbn;
  #title
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.#isbn = isbn;
      this.rawIsbn = isbn
      
  }

  get isbn(){
      return `ISBN ${this.#isbn}`;
  }

  toString(){
      return `Title : ${this.title}\nauthor : ${this.author}\n${this.isbn}`;
  }

  get title(){
      return this.#title;
  }

  set title(value){
      this.#title = value.toUpperCase();
  }

  CanBeBorrowed() {}
}

class PhysicalBook extends Book {
  #isAvailable;
  constructor(title, author, isbn, shelfLocation) {
      super(title, author, isbn);
      this.shelfLocation = shelfLocation;
      this.#isAvailable = true
  }

  get isAvailable() {
    return this.#isAvailable
  }

  changeAvailabilityStatus(newStatus){
    this.#isAvailable = newStatus
  }

  CanBeBorrowed() {
    return this.#isAvailable
  }


  toString(){
      return `Physical Version\n${super.toString()}\nshelfLocation : ${this.shelfLocation}\nstatus: ${this.#isAvailable}`
  }
}

class EBook extends Book {
  constructor(title, author, isbn, fileFormat) {
      super(title, author, isbn);
      this.fileFormat = fileFormat;
  }
  toString(){
      return `EBook version\n${super.toString()}\nfileFormat : ${this.fileFormat}`;
  }

  CanBeBorrowed() {
    return true
  } 

  changeAvailabilityStatus(){}

}

class User {
  static MAX_BORROW_LIMIT = 3;
  constructor(name, id) {
      this.name = name;
      this.id = id;
      this.borrowedBooks = [];
  }

  get borrowedBooksNumber () {
    return this.borrowedBooks.length
  }

  get maxLimit(){
    return User.MAX_BORROW_LIMIT
  }

  /**
   * The function `borrowBook` checks if a book is available and if the user has reached the borrowing
   * limit before allowing the user to borrow a book.
   * @param {Book} book - The `borrowBook` function takes a `book` object as a parameter. The `book` object
   * likely has properties such as `isAvailable` to check if the book is currently available for
   * borrowing, `title` to display the title of the book, and `changeAvailabilityStatus` method to
   * @returns In the `borrowBook` function, if the book is not available or the borrow limit has been
   * reached, the function will return without performing any further actions. If the book is
   * successfully borrowed, the function will log a message indicating that the book has been borrowed.
   */
  borrowBook(book){
    if (!book.isAvailable) {
      console.error('The book is not available right now, please ask later')
      return 
    }
    if(this.borrowedBooks.length >= this.maxLimit){
      console.error('Borrow limit has been reached (max 3) please return one book in order to take a new one')
      return 
    }
    book.changeAvailabilityStatus(false)
    this.borrowedBooks.push(book);
    console.log(`You just borrow ${book.title}`);
  }

  returnBook(book){
    if(this.borrowedBooks.length > 0){
      console.error("You haven't borrow any but yet")
      return 
    }
    if(!this.borrowedBooks.includes(book) ){
      console.log(`The book ${book.title} is not in your books list, please check again`);
      return 
    }
    // this.borrowedBooks.splice(book);
    console.log(`Thanks for returning ${book.title}, hope you have enjoyed it`);
  }
}

class PremiumUser extends User {
  static MAX_BORROW_LIMIT = 5;
  constructor(name, id) {
    super(name, id)
  }

  get maxLimit() {
    return PremiumUser.MAX_BORROW_LIMIT
  }
}

class Library {
  constructor() {
    this.books = []
    this.users = []
  }

  #isABook(possibleBook) {
    if (!(possibleBook instanceof Book)) {
      console.error('Please provide a valid book object')
      return false
    }
    return true
  }

  #isAnUser(possibleUser) {
    if(!(possibleUser instanceof User)) {
      console.error('Please provide a valid user')
      return false
    }
    return true
  }

  addBook(book){
    if (this.#isABook(book)) {
      this.books.push(book)
      console.log(`the book ${book.title} was added to the library`)
    }
  }

  removeBook(book){
    if (!this.#isABook(book)) return
    this.books = this.books.filter(borrowedBook => borrowedBook !== book)
  }

  isBookAvailable(isbn){
    const targetBook = this.books.find(book => book.rawIsbn === isbn)
    return targetBook.isAvailable
  }

  addUser(user){
    if (this.#isAnUser(user)) {
      this.users.push(user)
      console.log(user.name, 'was registered in the library')
    }
  }

  removeUser(user){
    if (this.#isAnUser(user)) {
      this.users = this.users.filter(libraryUser => libraryUser !== user)
    }
  }

  listBooks() {
    this.books.forEach((book, i) => console.log(`${i + 1}) ${book.title}`))
  }

  listUsers() {
    this.users.forEach((user, i) => console.log(`${i + 1}) ${user.name}`))
  }

  /**
   * 
   * @param {User} user 
   * @param {PhysicalBook} book 
   */
  borrowBook(user, book){
    user.borrowBook(book)
  } 
}

const book1 = new Book(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278);
// console.log(book1.isbn);

const bookPhy1 = new PhysicalBook(`Lord of the rings`, `J.R.R. Tolkien`, 80054278, `a-15`);
const paperBook2 = new PhysicalBook('Frankenstein', 'Merry Shelly', 564879, 'C-07')
const paperBook3 = new PhysicalBook('Don Quixote', 'Miguel De Cervantes', 46879, 'D-22')
const paperBook4 = new PhysicalBook('1984', 'George Orwell', 123456, 'A-01');
const paperBook5 = new PhysicalBook('Pride and Prejudice', 'Jane Austen', 789012, 'B-15');
const paperBook6 = new PhysicalBook('Moby-Dick', 'Herman Melville', 345678, 'F-09');
const paperBook7 = new PhysicalBook('The Great Gatsby', 'F. Scott Fitzgerald', 901234, 'G-30');
const paperBook8 = new PhysicalBook('War and Peace', 'Leo Tolstoy', 567890, 'H-45');
const paperBook9 = new PhysicalBook('To Kill a Mockingbird', 'Harper Lee', 234567, 'K-18');


// console.log(bookPhy1.toString());

const eBook1 = new EBook(`Lord of the rings`, `J.R.R. Tolkien`, 80054278, `.mobi`);
// console.log(eBook1.toString());

const regularUser = new User(`Patrick`, `T-1520` );
const regularUser2 = new User(`Bob`, `T-9678` );
const premiumUser = new PremiumUser('Hugo', 'T-25468')
const premiumUser2 = new PremiumUser('Pippo', 'T-78521')

console.log(regularUser.borrowedBooks)
regularUser.borrowBook(bookPhy1)
console.log(regularUser.borrowedBooks)
console.log(bookPhy1.toString())
regularUser.borrowBook(bookPhy1)

const libraryUsers = [regularUser, regularUser2, premiumUser, premiumUser2]
const paperBooks = [paperBook2, paperBook3, paperBook4, paperBook5, paperBook6, paperBook7, paperBook8, paperBook9];

const myLibrary = new Library()
paperBooks.forEach(book => myLibrary.addBook(book))
myLibrary.listBooks()
console.log(myLibrary.isBookAvailable(567890))
myLibrary.borrowBook(regularUser2, paperBook4)

