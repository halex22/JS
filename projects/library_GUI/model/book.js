export default class Book {
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

  // abstract method
  CanBeBorrowed() {}

  // abstract method
  changeAvailabilityStatus(){}
}

export class PhysicalBook extends Book {
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

export class EBook extends Book {
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

