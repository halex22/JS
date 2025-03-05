import Book from "./book.js"
import User from "./user.mjs"

export default class Library {
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
      console.log(`user ${user.name} was enrolled ! welcome` )
    }
  }

  removeUser(user){
    if (this.#isAnUser(user)) {
      this.users = this.users.filter(libraryUser => libraryUser !== user)
    }
  }

  listBooks() {
    if (!this.books.length) {
      console.log('There are no books yet')
      return 
    }
    console.log('This library users are:\n')
    this.books.forEach((book, i) => console.log(`${i + 1}) ${book.title}`))
  }

  listUsers() {
    if (!this.users.length) {
      console.log('There are no users yet')
    }
    this.users.forEach((user, i) => console.log(`${i + 1}) ${user.name}`))
  }

  borrowBook(user, book){
    user.borrowBook(book)
  } 
}