// const testArray = [2, 5, 7, 1, 0, 100, 103]

// function add2ToArray(arrayOfNumbers) {
//   let parkingArray = []
//   for (const number of arrayOfNumbers) {
//     parkingArray.push((number + 2))
//   }
//   return parkingArray
// }

// function map(array, mappingFunction) {
//   const resultArray = []

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const newElement = mappingFunction(element, index, array)
//     resultArray.push(newElement)
//   }
//   return resultArray
// }

// function addToMappingFunction (element) {
//   return element + 2
// }

// function addIndexMapFunction(element, index) {
//   return element + index
// }

// function addArrayLengthFunction (element, _, array) {
//   return element + array.length
// }

// console.log(map(testArray, addToMappingFunction))
// console.log(map(testArray, addIndexMapFunction))
// console.log(map(testArray, addArrayLengthFunction))


// const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie']

// const toUpperCase = name => name.toUpperCase()

// console.log(map(testArray2, toUpperCase))

// console.log(add2ToArray(testArray))
// console.log(testArray.map(number => number + 2))
// console.log(testArray.map((number, index) => number + index))
// console.log(testArray.map(number => number + testArray.length))
// console.log(testArray2.map(name => name.toUpperCase()))



// filter
// console.log(testArray.filter(val => val < 5))
// console.log(testArray2.filter(name => name.length > 6))
// console.log(testArray2.filter((_, index) => index % 2))

// reduce
// const sumNumbers = (valueToModify, valueToAdd) => {
//   return valueToModify + valueToAdd
// }

// function genericReduce(array, funct, initvalue) {
//   accumulator = initvalue
//   for (let index = 0; index < array.length; index++) {
//     const current = array[index];
//     accumulator = funct(accumulator, current, index, array)
//   }
//   return accumulator
// }

// const removeSmallNames = (currentBigNames, name)  => {
//   // console.log(currentBigNames, name)
//   if (name.length > 6) {
//     const newCurrentBigNames = [...currentBigNames, name]
//     return newCurrentBigNames
//   }
//   return currentBigNames;
// }
 
// console.log(testArray2.reduce((a, c) => a + c, ''))
// console.log(testArray.reduce((acc, cur) => acc + cur))
// console.log(testArray2.reduce((acc, cur) => removeSmallNames(acc, cur),[]))
// console.log(testArray2.reduce((a, c) => {if (c.length > 6) {a.push(c)} return a}, []))
//   console.log(testArray2.reduce((a, c) => c.length > 6 ? [...a, c] : a, []))
// console.log(testArray2.reduce((a, c) => {
//   if (c.length > 6) {
//     return [...a, c]
//   } else {
//     return c
//   }
// }, []))
// console.loù(testArray2.reduce((a, c) => ))

// console.log(genericReduce(testArray, sumNumbers, 0))
// console.log(genericReduce(testArray2, removeSmallNames, [])) 


// const isEven = nbr => nbr % 2 === 0
// console.log(testArray.find(isEven))
// console.log(testArray.some(isEven))
// console.log(testArray.every(isEven))

// const sortingCres = (first, second) => {
//   if (first > second) return 1
//   else if (first < second) return -1
//   return 0
// }


// function betterSorter(array, sortingFunction) {
//   return [...array].sort(sortingFunction)
// }

// const sortedArray = [...testArray].sort(sortingCres)
// const sortedArray2 = [...testArray].sort((a, b) => a - b)
// console.log(sortedArray2)


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

const hugo2 = {
  name: 'hugo',
  surname: 'evil',
  yob: 1994,
  nationality: 'elSalvador',
  gender: 'f'
}

const laura2 = {
  name: 'laura',
  surname: 'old',
  yob: 1920,
  nationality: 'italy',
  gender: 'f'
}

const allStudents = [lorenzo, jan, jeremias, giovanni, sara, laura, eusebio, hugo, hugo2, laura2]

console.log([...allStudents].sort())

function testSorting(student1, student2) {
  if(student1.yob === student2.yob) {
    return student1.surname.localeCompare(student2.surname)
  }
  return student1.yob - student2.yob
}

// sort by age
const sortByAge = (student1, student2) => student1.yob - student2.yob
console.log("sorting students by age older to younger:",[...allStudents].sort((student1, student2) => student1.yob - student2.yob))
// console.log([...allStudents].sort(testSorting))
// console.log("sorting students by age younger to older:",[...allStudents].sort((student1, student2) => student2.yob - student1.yob && student1.surname - student2.surname))
console.log("sorting students by age younger to older:",
  [...allStudents].sort((student1, student2) => student1.yob === student2.yob ?
   student1.surname.localeCompare(student2.surname)
  : student1.yob - student2.yob))


// sorty by name if name is the same sort by age


// sorty by students mean 

