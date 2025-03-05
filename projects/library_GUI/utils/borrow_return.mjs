import AskBot from "./bot.mjs";
import User from "../model/user.mjs";
import { PhysicalBook } from "../model/book";
import Book from "../model/book";


/**
 * takes an array of Book objects as a parameter. It prompts the user to enter the name of the book 
 * they want to borrow using the `AskBot.askQuestion` method. It then searches for a book in the provided
 * array whose title matches the input (case-insensitive) using the `find` method. 
 * If no matching book is found, it logs a message indicating that the book was not found.
 * @param {Book[]} arrayOfBooks 
 */
export function handleBorrowProcess(arrayOfBooks, user) {
  const booksNameTarget = AskBot.askQuestion('What is the name of the book you want to borrow\n').toLowerCase()
  const bookToBorrow = fetchBook(booksNameTarget, arrayOfBooks)
    
}

/**
 * 
 * @param {string} booksName 
 * @param {Book[]} arrayOfBooks 
 * @returns {Book | undefined}
 */
function fetchBook(booksName, arrayOfBooks) {
  const bookToBorrow = arrayOfBooks.find(book => book.title.toLowerCase() === booksNameTarget)
  if (!bookToBorrow) console.log(`The book ${booksNameTarget} was not found`)
  return bookToBorrow
}


/**
 * Takes in a list of users as parameter. It then searches for a user in the provided list 
 * whose name matches the input (case-insensitive) using the `find` method. 
 * If no matching user is found, it logs a message indicating that the user was not found. 
 * Finally, it returns the found user object or `undefined` if no user was found.
 * @param {string} usersName 
 * @param {User[]} userList 
 * @returns {User | undefined}
 */
export function identifyUser(userList) {
  const userNameToFind = AskBot.askQuestion('Please write the user name')
  const user = userList.find(user => user.name.toLowerCase() === userNameToFind)
  if (!user) console.log(`The user ${user} was not found`)
  return user
}

function deliverBook(book, user) {}

function handleReturnProcess() {}

