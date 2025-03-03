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

  bestStudent() {
    // return this.students.reduce((a, c) => c.calculateMean() > a)
  }
}

class Principal extends Human {
  constructor (name, surname, yob, nationality, gender, schoolName, teachers = []) {
    super(name, surname, yob, nationality, gender)
    this.schoolName = schoolName
    this.teachers = teachers
  }

  bestTeacher () {}
  bestStudent () {}
}


// aggiungere al tString di tutte le xlassi gender e nationality 


// aggiungere a teacher le funzioni: bestStudent  e StudentsMean


// aggiungere la classe Rpincipal che erediterà da human e come caratteristiche
// - array of teachers
// - school name 


// aggiungere al principal due funzioni
// - beastTeacher e BestStudent