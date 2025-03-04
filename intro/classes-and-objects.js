class Human {
  constructor(name, surname, yob, nationality, gender) {
    this.name = name;
    this.surname = surname;
    this.yob = yob;
    this.nationality = nationality;
    this.gender = gender;
  }

  getAge() {
    const now = new Date();
    return now.getFullYear() - this.yob;
  }

  toString() {
    return `
    student: ${this.name} ${this.surname}
    age: ${this.getAge()}
    nationality: ${this.nationality}`;
    }
}

class Student extends Human {
  constructor(name, surname, yob, nationality, gender, marks = []) {
    super(name, surname, yob, nationality, gender);
    this.marks = marks;
  }

  calculateMean() {
    if (!this.marks.length) return 0;
    return this.marks.reduce((a, c) => a + c) / this.marks.length;
  }

  toString() {
    const str = super.toString()
    return str + `\n    mean: ${this.calculateMean()}`
  }

  compareTo(otherStudent) {

    if (this.name === otherStudent.name) {
      return this.yob - otherStudent.yob
    }
    return this.name.localeCompare(otherStudent.name)
  }

  addMark = mark => this.marks.push(mark)

  getBestMark() {
    if (!this.marks.length) return 0
    return Math.max(...this.marks)
  }
  
}

class Teacher extends Human {
  constructor(name, surname, yob, nationality, gender, subject, students= []) {
    super(name, surname, yob, nationality, gender)
    this.subject = subject;
    this.students = students;
  }

  toString() {
    const str = super.toString()
    return str + `\n    Subject:${this.subject}`
  }
}

const student1 = new Student("Laura","Mazza", 1984,"it", "f", [1, 2, 3, 4, 5, 6]);
const student2 = new Student("Eusebio", "Veizi", 1993, "alb", "m");
const Student3 = new Student("lorenzo", "puppo", 1995, 'it', 'm')

// console.log(student1.calculateMean());
// console.log(student2.calculateMean());
console.log(student1.toString());
console.log(student2.toString());

const students = [student1, student2]
// students.sort((s1, s2) => s1.compareTo(s2))
// console.log(students)
const teacher = new Teacher('Andrea', 'asioli', 1978, 'it', 'm', 'CS', students)
console.log(teacher.toString())
// student1.callMe()
// console.log(student1.getBestMark())
// console.log(student2.getBestMark())

class Circle {
  constructor(centerX, centerY, r){
    this.centerX = centerX
    this.centerX = centerY
    this.r = r
  }
  static PI = 3.1416

  get diameter() {
    return this.r * 2
  }

  get perimeter(){}

  calculatePerimeter() {
    return 2 * this.r * Circle.PI
  }

  calculateArea(){
    return (this.r ** 2) * Circle.PI
  }
}

const circle = new Circle(0,0,10)
console.log(circle.calculatePerimeter())
console.log(circle.calculateArea())


class Math2 {

  static sum(n1, n2) {
    return n1 + n2
  }

  static absolute(n1){
    return n1 < 0 ? - (n1): n1
  }

  static cube(n) {
    return n**3
  }

}

console.log(Math2.sum(1,2))
console.log(Math2.absolute(-10))
console.log(Math2.cube(3))


// polymorphism
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return '?'
  }

  sayName() {
    return `my name is ${this.name}`
  }
}

class Dog extends Animal{
  constructor(name) {
    super(name)
  }
  speak() {
    return 'bau'
  }
}

class Cat extends Animal{
  constructor(name) {
    super(name)
  }

  speak(){
    return 'meow'
  }
}

const cat1 = new Cat('Laura')
const cat2 = new Cat('Lorenzo')
const dog1 = new Dog('Giovanni')
const dog2 = new Dog('Jan')
const cat3 = new Cat('Hugo')
const cat4 = new Cat('Eusebio')
const cat5 = new Cat('Jeremias')

const animals = [
  cat1,
  cat2,
  dog1,
  dog2,
  cat3,
  cat4,
  cat5
]
