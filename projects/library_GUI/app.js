import { question } from 'readline-sync';
import Library from './model/library.mjs'
import { AskBookInfo, askUserInfo } from './utils/add.mjs';
import { handleBorrowProcess, identifyUser,  } from './utils/borrow_return.mjs';

const library = new Library('Hugo & Jere Library');
console.log('\n\nwelcome to Super Library 5000')

function createMenuString(...args) {
  return args.reduce((a, c, i) => a + `${i + 1}) ${c}\n`, '')
}
const options = createMenuString('add user', 'add book','list books', 'list users', 'borrow book', 'return book', 'exit')
const menuString ="\nHere is what you can do\n" + options + "insert the number of the action you want to do\n"

while (true) {
  const actionNumber = question(menuString)

  switch (actionNumber) {
    case "1":
      addUser();
      break;

    case "2":
      addBook();
      break;

    case "3":
      library.listBooks()
      break;

    case "4":
      library.listUsers()
      break;

    case "5":

      break;

    case "6":

      break;

    case "7":
      console.log('thanks for visiting')
      process.exit(0)
      break;

    default:
      console.log('not a valid input, please try again or enter 5 to exit')
      break;
  }
}


function addBook() {
  const newBook = AskBookInfo()
  library.addBook(newBook)
}

function addUser() {
  const newUser = askUserInfo()
  console.log(newUser)
  library.addUser(newUser)
}

function borrowBook() {
  const user = identifyUser()

  if (!user){}
  handleBorrowProcess()

}






