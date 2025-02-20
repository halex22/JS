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
// converto elements to fahrenheit
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
// calcolate the mean
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
  
}

// 6th exercise 
// transform names to uppercase

// 7th exercise
// capitalize each string


// 8th exercise
// return string with first char of all names


// 9th exercise 
// count the sum of all char of all the names


// 10th exercise 
// delete vowels from names


// 11th exercise 
// return array with each name length 


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]]

// 12th exercise 
// return an array with the length of each array 


// 13 exercise 
// sum all number in the arrays


// 14th exercise 
// sum all arrays length 