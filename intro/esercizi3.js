const array1 = [23,14,56,44,3,0,-1, 55, -12, 60, 8]

// 1ft exercise 
// filter numbers that are less or equal to zero 
const removeGraterThan30 = arrayToFilter => {
  const filteredArray = []
  for (const number of arrayToFilter) {
    if (number <= 0) filteredArray.push(number)
  }
return filteredArray
}
console.log(removeGraterThan30(array1))

// 2nd exercise
// convert elements to fahrenheit
const celToFah = number => (number * (9/5) + 32)
const convertDegrees = arrayToMap => {
  const mappedArray = []
  for (const number of arrayToMap) {
    mappedArray.push(celToFah(number))
  }
  return mappedArray
}
console.log(convertDegrees(array1))

// 3rd exercise 
// calculate the mean
const calculateMean = arrayToReduce => {
  let accumulator = 0
  for (const number of arrayToReduce) {
    accumulator += number
  }
  return accumulator / arrayToReduce.length
}
console.log(calculateMean(array1))

// 4th exercise 
// return max and min 
const findMaxAndMin = arrayToReduce => {
  let maxNumber = 0
  let minNumber = 0
  let lastNumber = 0

  for (const number of arrayToReduce) {
  
    if (number > maxNumber) {
      maxNumber = number
    } else {
      if (!minNumber) {
        minNumber = number
      } else {
        if (number < minNumber) minNumber=number
      }
    }
  lastNumber = number
  }
  return [maxNumber, minNumber]
}
console.log(findMaxAndMin(array1))


// section 2

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minn'] 

// 5th exercise
// filter name.length < 4
const filterNames = arrayToFilter => {
  const filteredArray = []
  for (const name of arrayToFilter) {
    if (name.length < 4) filteredArray.push(name)
  }
  return filteredArray
}
console.log(filterNames(array2))

// 6th exercise 
// transform names to uppercase
const mapToUpperCase = arrayToMap => {
  const mappedArray = []
  for (const name of arrayToMap) {
    mappedArray.push(name.toUpperCase())    
  }
  return mappedArray
}
console.log(mapToUpperCase(array2))

// 7th exercise
// capitalize each string
const capitalizeString = text => {
  let capitalizedText = ''
  capitalizedText += text[0].toUpperCase()
  capitalizedText += text.slice(1, text.length)
  return capitalizedText
}

const capitalizeNames = arrayToMap => {
  const mappedArray = []
  for (const name of arrayToMap) {
    mappedArray.push(capitalizeString(name))
  }
  return mappedArray
}
console.log(capitalizeNames(array2))

// 8th exercise
// return string with first char of all names
const createStringInitial = arrayToReduce => {
  let resultString = ''
  for (const name of arrayToReduce) {
    resultString += name[0]
  }
  return resultString
}
console.log(createStringInitial(array2))

// 9th exercise 
// count the sum of all char of all the names
const countAllChars = arrayToReduce => {
  let accumulator = 0
  for (const name of arrayToReduce) {
    accumulator += name.length
  }
  return accumulator
}
console.log(countAllChars(array2))

// 10th exercise 
// delete vowels from names
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = char => vowels.includes(char)

const deleteVowels = arrayToMap => {
  const mappedArray = []
  for (const name of arrayToMap) {
    let mappedString = ''
    for (const letter of name) {
      if (!isVowel(letter)) mappedString += letter
    }
    mappedArray.push(mappedString)
  }
  return mappedArray
}
console.log(deleteVowels(array2))

// 11th exercise 
// return array with each name length 
const countNamesLength = arrayToMap => {
  const mappedArray = []
  for (const name of arrayToMap) {
    mappedArray.push(name.length)
  }
  return mappedArray
}
console.log(countNamesLength(array2))


// section 3
const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]]

// 12th exercise 
// return an array with the length of each array 
const countArraysLengths = arrayToMap => {
  const mappedArray = []
  for (const singleArray of arrayToMap) {
    mappedArray.push(singleArray.length)
  }
  return mappedArray
}
console.log(countArraysLengths(array3))

// 13 exercise 
// sum all number in the arrays

const sumAllNumbers = arrayToReduce => {
  let accumulator = 0
  for (const number of arrayToReduce) {
    accumulator += number
  }
  return accumulator
}

const sumMultipleArrays = arrayToReduce => {
  let accumulator = 0
  for (const singleArray of arrayToReduce) {
    accumulator += sumAllNumbers(singleArray)
  }
  return accumulator
}

console.log(sumMultipleArrays(array3))

// 14th exercise 
// sum all arrays length 