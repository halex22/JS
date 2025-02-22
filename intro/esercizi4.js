// 1 create an object student for each classmate
// keys: name, surname, marks, yob, nationality, gender
// objects must be contain in an array

const lorenzo = {
  name: 'lorenzo',
  surname: 'puppo',
  yob: 1995,
  nationality: 'italy',
  gender: 'm',
}

const jan = {
  name: 'jan',
  surname: 'stigliani',
  yob: 2000,
  nationality: 'italy',
  gender: 'm'
}

const giovanni = {
  name: 'giovanni',
  surname: 'sussarellu',
  yob: 1981,
  nationality: 'italy',
  gender: 'm'
}

const sara =  {
  name: 'sara',
  surname: 'd prà',
  yob: 1989,
  nationality: 'italy',
  gender: 'fluid'
}

const jeremias = {
  name: 'jeremias',
  surname: 'cedeno',
  yob:2003,
  nationality: 'ecuador',
  gender: 'm'
}

const laura = {
  name: 'laura',
  surname: 'mazza',
  yob: 1984,
  nationality: 'italy',
  gender: 'f'
}

const eusebio = {
  name: 'eusebio',
  surname: 'veizi',
  yob: 1993,
  nationality: 'albanese',
  gender: 'peanut'
}

const hugo = {
  name: 'hugo',
  surname: 'martinez',
  yob: 1994,
  nationality: 'elSalvador',
  gender: 'f'
}

const classmates = [lorenzo, jan, jeremias, giovanni, sara, laura, eusebio, hugo]
// 2 write a function that return the mean age of the students

const calculateMeanAge = classmatesArray => {
  let meanAge = 0
  for (const classmate of classmatesArray) {
    const classmateAge = 2025 - classmate.yob
    meanAge += classmateAge
  }
  return meanAge / classmatesArray.length
}

console.log('the mean age of the students is: ', calculateMeanAge(classmates))

// 3 write a function that return a [str] that contains the format "name/surname"
const constructFirstLastName = classmatesArray => {
  const firstLastCombo = []
  for (const classmate of classmatesArray) {
    firstLastCombo.push(`${classmate.name}/${classmate.surname}`)
  }
  return firstLastCombo
}
console.log(constructFirstLastName(classmates))

// 4 write a function that returns the count if males and females
const countGenders = classmatesArray => {
  const gendersCount = {}
  for (const element of object) {
    
  }
}
// 5 write a function that returns the mean of all means


// 6 write a function that returns an object structured 
// {nationality1: [student1Name, student2Name ...], nationality2: [student3Name, ...]}

