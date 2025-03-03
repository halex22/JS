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
    nationality: ${this.nationality}
    gender: ${this.gender}`;
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
    return this.students.reduce((a, c) => c.calculateMean() > a ? c : a)
  }

  studentsMean() {
    return this.students.reduce((a, c) => a + c.calculateMean(), 0) / this.students.length
  }
}

class Principal extends Human {
  constructor (name, surname, yob, nationality, gender, schoolName, teachers = []) {
    super(name, surname, yob, nationality, gender)
    this.schoolName = schoolName
    this.teachers = teachers
  }

  bestTeacher () {
    return this.teachers.reduce((a, c) => c.studentsMean() > c ? c.studentsMean(): a )
  }
  bestStudent () {
    return this.teachers
    .flatMap( teacher => teacher.students)
    .reduce((bestStudent, student) => {
      return student.calculateMean() > (bestStudent?.calculateMean() ?? 0) ? student : bestStudent;
    }, null)
  }
}



const student1 = new Student("Laura","Mazza", 1984,"it", "f", [1, 7, 3, 4, 5, 6]);
const student2 = new Student("Eusebio", "Veizi", 1993, "alb", "m", [6, 2, 3, 4, 5, 6]);
const Student3 = new Student("lorenzo", "puppo", 1995, 'it', 'm', [1, 2, 6, 4, 5, 6])

const studentGroup1 = [student1, student2, Student3]

const student4 = new Student("Giovanni","sussarellu", 1981,"it", "m", [1, 7, 3, 9, 5, 6]);
const student5 = new Student("jan", "stigliani", 2000, "it", "m", [6, 2, 5, 4, 7, 99]);
const student6 = new Student("jeremias", "cedeno", 2002, 'ecu', 'm', [10, 2, 6, 4, 5, 6])

const studentGroup2 = [student4, student5, student6]

const student7 = new Student("Sara","d pra", 1989 ,"it", "f", [8, 7, 3, 9, 5, 6]);
const student8 = new Student("hugo", "martinez", 1994, "slv", "m", [2, 2, 6, 4, 7, 6]);

const studentGroup3 = [student7, student8]

const teacher1 = new Teacher('Andrea', 'asioli', 1978, 'it', 'm', 'CS', studentGroup1)
const teacher2 = new Teacher('Andrea', 'evil', 1977, 'it', 'm', 'evil Things', studentGroup2)
const teacher3 = new Teacher('Aerdna', 'iloisa', 1980, 'it', 'm', studentGroup3)

const teachers = [teacher1, teacher2, teacher3]



// aggiungere al tString di tutte le xlassi gender e nationality 
// console.log(student1.toString())

// aggiungere a teacher le funzioni: bestStudent  e StudentsMean
// console.log(`the best student of ${teacher1.name} is:\n`, teacher1.bestStudent())
// console.log('the mean of', teacher1.name, ' students is ',teacher1.studentsMean())

// aggiungere la classe Rpincipal che erediterà da human e come caratteristiche
// - array of teachers
// - school name 
const principal = new Principal('Seymour', 'Skinner', 1969, 'usa', 'm', 'axiaSchool', teachers)

// aggiungere al principal due funzioni
// - beastTeacher e BestStudent
// console.log('the best teacher is: ', principal.bestTeacher().toString())
// console.log('the best teacher is: ', principal.bestStudent().toString())

class ContoCorrente {
  constructor(owner, balance = 0) {
    this.owner = owner
    this.balance = balance
  }

  toString() {
    return `${this.owner.name} ${this.owner.surname}' bank account`
  }

  addMoney(amount) {
    if (amount < 1) {
      console.error('the amount to be added must be positive')
      return 
    }
    this.balance += amount
    console.log(`amount added successfully\nnew balance is ${this.balance}`)
  }

  withdrawCash(amount){
    if (amount > this.balance) {
      console.error('you do not have enough money !!')
      return 
    }
    this.removeMoneyFromBalance('withdraw',amount)
  }

  removeMoneyFromBalance(actionName,amount) {
    this.balance -= amount
    console.log(`${actionName} successfully, your new balance is ${this.balance}`)
  }
}

//1)Crea una classe base ContoBancario:
    //-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
    //-La classe ContoBancario deve avere i seguenti metodi:
        //-toString()
        //-deposita(importo): Aggiunge l'importo al saldo.
        //-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.
const contoCorrente = new ContoCorrente(student8, 100)
console.log(contoCorrente.toString())
contoCorrente.addMoney(0)
contoCorrente.addMoney(25)
contoCorrente.withdrawCash(1000)
contoCorrente.withdrawCash(5)




//2)Crea una classe derivata ContoCorrente che eredita da ContoBancario:
    //-La classe ContoCorrente deve avere le seguenti proprietà aggiuntive:
        //-limiteSpesa (numero)
    //-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
        //-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
        // se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo
class ContoBancario extends ContoCorrente {
  constructor(owner, balance, paymentLimit = 50) {
    super(owner, balance)
    this.paymentLimit = paymentLimit
  }

  Pay(amount){
    const hasEnoughMoney = this.balance > amount
    if (!hasEnoughMoney || amount < this.paymentLimit) {
      const msg = !hasEnoughMoney ? 'You do not have enough money':
      'the amount that you are trying to pay is over the limit'
      console.error(msg)
      return
    }
    this.removeMoneyFromBalance('payment',amount)
    this.addCashBack()
  }

  addCashBack(percentage= 0.2) {
    const cashbackMoney = this.balance * percentage
    this.balance += cashbackMoney
    console.log(`${cashbackMoney} euros were added to your balance`)
  }
}

console.log('conto bancario esempio')
const contoBancarioHugo = new ContoBancario(student8, 100)
contoBancarioHugo.Pay(3000)
contoBancarioHugo.Pay(70) 
contoBancarioHugo.Pay(10) 

//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
    //-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
        //-sogliaBonus(numero)
    //-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
        //-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.

class ContoRisparmio extends ContoBancario {
  constructor(owner, balance, paymentLimit, sogliaBonus) {}

  applyBonus() {}
}