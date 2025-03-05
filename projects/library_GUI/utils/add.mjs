import User from '../model/user.mjs'
import { PhysicalBook } from '../model/book.js';
import { EBook } from '../model/book.js';
import { question } from 'readline-sync';

class AskBot {

  static askQuestion(query) {
    let answer;
    while (true) {
      const answer = question(query)
      if (answer) break
    }
    return answer
  }
}

function AskUserInfo() {

}

export function AskBookInfo() {

  const bookISBN = question('What is the ISBN of the new book?\n')
  const bookName = question('What is the name of the new book?\n')
  const bookAuthor = question('How is the author?\n')

  let bookType;
  while (true) {
    const answer = question(`Type 'e' for Ebook or 'p' for physical\n`)
    if (answer !== 'e' && answer !== 'p') continue
    bookType = answer
    break
  }

  if (bookType === 'p') {
    const bookShelfId = question('Where is the ID of the new book shelf\n')
    return new PhysicalBook(bookISBN, bookName, bookAuthor, bookShelfId)
  }

  const allowedFormats = ['epub', 'mobi', 'pdf']
  while (true) {
    const bookFormat = question('Which is the format of the e-book? choose between epub, mobi or pdf\n')
    if (allowedFormats.includes(bookFormat.toLowerCase())) {
      return new EBook(bookISBN, bookName, bookAuthor, bookFormat)
    }
    console.log("Invalid format. Please enter 'epub', 'mobi', or 'pdf'.")
  }
}

function addUser() {
  const addUserName = "inserisci nome:\n";
  const name = question(addUserName);
  const id = crypto.randomUUID();
  const user = new User(id, name);
  library.addUser(user)
  library.listUsers();
}

