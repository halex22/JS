import { question } from 'readline-sync';
import Library from './model/library.mjs'

console.log('welcome to Super Library 5000')

function createMenuString(...args) {
  return args.reduce((a, c, i) => a + `${i + 1}) ${c}\n`, '')
}
const options = createMenuString('add user', 'add book', 'borrow book', 'return book', 'exit')
const menuString ="Here is what you can do\n" + options + "insert the number of the action you want to do\n"

while (true) {
  const actionNumber = question(menuString)

  switch (actionNumber) {
    case "1":
      // addUser();
      break;

    case "2":
      // addUser();
      break;

    case "3":
      // borrowBook();
      break;

    case "4":

      break;

    case "5":
      console.log('thanks for visiting')
      process.exit(0)
      break;

    default:
      console.log('not a valid input, please try again or enter 5 to exit')
      break;
  }
}








