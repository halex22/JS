import { PhysicalBook } from "./model/book.js";

const paperBooks = [
  new PhysicalBook(`Lord of the rings`, `J.R.R. Tolkien`, 80054278, `a-15`),
  new PhysicalBook('Frankenstein', 'Merry Shelly', 564879, 'C-07'),
  new PhysicalBook('Don Quixote', 'Miguel De Cervantes', 46879, 'D-22'),
  new PhysicalBook('1984', 'George Orwell', 123456, 'A-01'),
  new PhysicalBook('Pride and Prejudice', 'Jane Austen', 789012, 'B-15'),
  new PhysicalBook('Moby-Dick', 'Herman Melville', 345678, 'F-09'),
  new PhysicalBook('The Great Gatsby', 'F. Scott Fitzgerald', 901234, 'G-30'),
  new PhysicalBook('War and Peace', 'Leo Tolstoy', 567890, 'H-45'),
  new PhysicalBook('To Kill a Mockingbird', 'Harper Lee', 234567, 'K-18'),
]

export default paperBooks;
