// // Arrays
// const pippo = 12;
// const notAGoodArray = ["hi", 2, 23.5, true, [], ["hello"], pippo];

// const firstArray = [];
// firstArray.push(8);
// firstArray.push(4);
// console.log(firstArray);
// firstArray.pop();
// console.log(firstArray);

// const secondArray = [12];
// secondArray.unshift(8);
// secondArray.unshift(24);
// console.log(secondArray);
// secondArray.shift();
// console.log(secondArray);

// const thirdArray = [];
// thirdArray.push(4, 8, 9);
// console.log(thirdArray);
// thirdArray[0] = 12;
// console.log(thirdArray);

// const forthArray = [4, 5, 9, 7, 15, 24, 65, 48, 7];

// for (let i = 0; i < forthArray.length; i++) {
//   const element = forthArray[i];
//   console.log(`${element} is at index ${i}`)
// }

// for (const element of forthArray) {
//   console.log(`I'm element ${element}`)
// }

// forthArray.reduce((number, 0, 0) => number +)

// const fithArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(fithArray);
// console.log(fithArray.slice(0, 2));
// console.log(fithArray.slice(2, -2));

// forthArray.forEach((number, index) => {
//   console.log(`${number} is at index ${index}`)
// })
function removeOddNumbers(arrayOfNumber) {
  const filterdArray = []

  for (let i = 0; i < arrayOfNumber.length; i++) {
    const element = arrayOfNumber[i];
    if (!(element % 2)) filterdArray.push(element)
  }
  return filterdArray
}

function sumArrayElements(arrayToReduce) {
  let total = 0
  for (let I = 0; I < arrayToReduce.length; I++) {
    const element = arrayToReduce[I];
    total += element
  }
  return total
}

const sumOnlyOdd = arrayToReduce => {
  let total = 0

  for (const number of arrayToReduce) {
    total += (number % 2) ? number : 0 
  }
  return total
}

const keepEvenElements = arrayOfNumber => {
  const filteredArray = []

  for (const number of arrayOfNumber) {
    if (!(number % 2)) filteredArray.push(number)
  }
  return filteredArray
}

const sumAllEven = arrayOfNumber => {
  return sumArrayElements(keepEvenElements(arrayOfNumber))
}


const sumOddEvenSeparately = arrayToReduce => {
  // let accumulatorEven = 0
  // let accumulatorOdd = 0
  

  // for (const number of arrayToReduce) {

  //   number % 2 ? accumulatorOdd += number : accumulatorEven += number
  // } 
  const accumulator = [0, 0]
  for (const number of arrayToReduce) {
    number % 2 ? accumulator[1] = accumulator[1] + number
    : accumulator[0] =  accumulator[0] + number 
  }
  return accumulator
}

const sampleArray = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4];
console.log(sumOddEvenSeparately(sampleArray))
console.log(sumAllEven(sampleArray))
console.log(keepEvenElements(sampleArray))
console.log(removeOddNumbers(sampleArray))
console.log(sumArrayElements(sampleArray))
console.log(sumOnlyOdd(sampleArray))


// const reducedSampleArray = sampleArray.reduce((total, amount, index) => total + amount)
// const mappedSampleArray = sampleArray.map(element => element * 2)
// const filteredSampleArray = sampleArray.filter(element => element < 30)
// console.log(mappedSampleArray) 
// console.log(reducedSampleArray)
// console.log(filteredSampleArray)