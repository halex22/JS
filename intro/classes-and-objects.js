class Person {
  constructor(name, surname, yob, nationality, gender) {
    this.name = name;
    this.surname = surname;
    this.yob = yob;
    this.nationality = nationality;
    this.gender = gender;
  }
}

class Student {
  constructor(name, surname, yob, nationality, gender, marks = []) {
    this.name = name;
    this.surname = surname;
    this.yob = yob;
    this.nationality = nationality;
    this.gender = gender;
    this.marks = marks;
  }

  calculateMean() {
    if (!this.marks.length) return 0;
    return this.marks.reduce((a, c) => a + c) / this.marks.length;
  }

  toString() {
  return `
  student: ${this.name} ${this.surname}
  age: ${this.getAge()}
  nationality: ${this.nationality}
  mean: ${this.calculateMean()}
  `;
  }

  getAge() {
    const now = new Date();
    return now.getFullYear() - this.yob;
  }

  compareTo(otherStudent) {

    if (this.name === otherStudent.name) {
      return this.yob - otherStudent.yob
    }
    return this.name.localeCompare(otherStudent.name)
  }

  addMark = mark => this.marks.push(mark)

  callMe = () => console.log(this.name)

  callMe2 = function () {
    console.log(this)
  }

  getBestMark() {
    if (!this.marks.length) return 0
    return Math.max(...this.marks)
  }
  
}

class Teacher {
  constructor(name, surname, yob, nationality, gender, subject, students= []) {
    this.name = name;
    this.surname = surname;
    this.yob = yob;
    this.nationality = nationality;
    this.gender = gender;
    this.subject = subject;
    this.students = students;
  }
}

const student1 = new Student("Laura","Mazza", 1984,"it", "f", [1, 2, 3, 4, 5, 6]);
const student2 = new Student("Eusebio", "Veizi", 1993, "alb", "m");
const Student3 = new Student("lorenzo", "puppo", 1995, 'it', 'm')

// console.log(student1.calculateMean());
// console.log(student2.calculateMean());
// console.log(student1.toString());
// console.log(student2.toString());

const students = [student1, student2]
// students.sort((s1, s2) => s1.compareTo(s2))
// console.log(students)
const teacher = new Teacher('Andrea', 'asioli', 1978, 'it', 'm', 'CS', students)
console.log(teacher)
// student1.callMe()
// console.log(student1.getBestMark())
// console.log(student2.getBestMark())
