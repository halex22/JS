const testArray = [2, 5, 7, 1, 0, 100, 103]

function add2ToArray(arrayOfNumbers) {
  let parkingArray = []
  for (const number of arrayOfNumbers) {
    parkingArray.push((number + 2))
  }
  return parkingArray
}

function map(array, mappingFunction) {
  const resultArray = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newElement = mappingFunction(element, index, array)
    resultArray.push(newElement)
  }
  return resultArray
}

function addToMappingFunction (element) {
  return element + 2
}

function addIndexMapFunction(element, index) {
  return element + index
}

function addArrayLengthFunction (element, _, array) {
  return element + array.length
}

// console.log(map(testArray, addToMappingFunction))
// console.log(map(testArray, addIndexMapFunction))
// console.log(map(testArray, addArrayLengthFunction))


const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie']

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
const sumNumbers = (valueToModify, valueToAdd) => {
  return valueToModify + valueToAdd
}

function genericReduce(array, funct, initvalue) {
  accumulator = initvalue
  for (let index = 0; index < array.length; index++) {
    const current = array[index];
    accumulator = funct(accumulator, current, index, array)
  }
  return accumulator
}

const removeSmallNames = (currentBigNames, name)  => {
  // console.log(currentBigNames, name)
  if (name.length > 6) {
    const newCurrentBigNames = [...currentBigNames, name]
    return newCurrentBigNames
  }
  return currentBigNames;
}
 
console.log(testArray2.reduce((a, c) => a + c, ''))
console.log(testArray.reduce((acc, cur) => acc + cur))
console.log(testArray2.reduce((acc, cur) => removeSmallNames(acc, cur),[]))
console.log(testArray2.reduce((a, c) => {if (c.length > 6) {a.push(c)} return a}, []))
  console.log(testArray2.reduce((a, c) => c.length > 6 ? [...a, c] : a, []))
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