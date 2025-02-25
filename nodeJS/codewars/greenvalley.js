a = [79, 35, 54, 19, 35, 25]
b = [67, 93, 100, -16, 65, 97, 92]
/**
 * 
 * @param {array[]} arrayOfNumbers 
 * @param {number} splitingIndex 
 */
function structureValley(arrayOfNumbers, splitingIndex, valley) {

  const resultArray = new Array(arrayOfNumbers.length -1)
  arrayOfNumbers.splice(splitingIndex, 1)
  arrayOfNumbers.sort((a, b) => b - a)

  let initIndex = 0
  let limitIndex = arrayOfNumbers.length - 1
  let populateRight = true
  for (const number of arrayOfNumbers) {

    if (populateRight) {
      resultArray[initIndex] = number
      initIndex++
    } else {
      resultArray[limitIndex] = number
      limitIndex--
    }
    populateRight = !populateRight
  }
  resultArray.splice(splitingIndex, 0, valley)
  console.log(resultArray)
}


/**
 * 
 * @param {Array[]} arrayOfNumbers 
 */
function makeValley(arrayOfNumbers) {
  const lowerElement = Math.min(...arrayOfNumbers)

  const lowerElementIndex = arrayOfNumbers.findIndex(element => element === lowerElement)

  structureValley(arrayOfNumbers, lowerElementIndex, lowerElement)
}

makeValley(a)
makeValley(b)