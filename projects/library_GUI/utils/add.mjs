import User from '../model/user.mjs'
import { PhysicalBook } from '../model/book.js';
import { EBook } from '../model/book.js';
import { question } from 'readline-sync';
import AskBot from './bot.mjs';




export function AskBookInfo() {


  const bookISBN = AskBot.askQuestion('What is the ISBN of the new book?\n')
  const bookName = AskBot.askQuestion('What is the name of the new book?\n')
  const bookAuthor = AskBot.askQuestion('How is the author?\n')

  let bookType;
  while (true) {
    const answer = AskBot.askQuestion(`Type 'e' for Ebook or 'p' for physical\n`)
    if (answer !== 'e' && answer !== 'p') continue
    bookType = answer
    break
  }

  if (bookType === 'p') {
    const bookShelfId = AskBot.askQuestion('Where is the ID of the new book shelf\n')
    return new PhysicalBook(bookISBN, bookName, bookAuthor, bookShelfId)
  }

  const allowedFormats = ['epub', 'mobi', 'pdf']
  while (true) {
    const bookFormat = AskBot.askQuestion('Which is the format of the e-book? choose between epub, mobi or pdf\n')
    if (allowedFormats.includes(bookFormat.toLowerCase())) {
      return new EBook(bookISBN, bookName, bookAuthor, bookFormat)
    }
    console.log("Invalid format. Please enter 'epub', 'mobi', or 'pdf'.")
  }
}

export function askUserInfo() {
  const name = AskBot.askQuestion("What is the user name\n");
  console.log(name)
  const id = crypto.randomUUID();
  return new User(id, name);

}

