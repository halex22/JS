
import Book from "./book.js";

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

export default User;