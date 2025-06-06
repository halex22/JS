import Book from "./book.js"

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

  borrowBook(user, book){
    user.borrowBook(book)
  } 
}