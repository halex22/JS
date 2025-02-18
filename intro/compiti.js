// 1 exercise 
let resultString = ''  
console.log('1 exercise')
for (let i = 0; i < 7; i++) {
  
  for (let j = 0; j <= i; j++) {
    resultString += '#'
  }
  resultString += "\n" 
}
console.log(resultString)


// 2 exercise 
resultString = ''  
console.log('2 exercise')
for (let row = 7; row > 0 ; row--) {
  for (let j = 0; j < row; j++) {
    resultString += '#'
  }
  resultString += "\n"
}
console.log(resultString)


// 3 exercise
resultString = ''  
console.log('3 exercise')
let hashTagNumber = 1

for (let index = 0; index < 5; index++) {

  const numberOfBlankSpaces = (9 - hashTagNumber) / 2
  innerRow = ''
  while (innerRow.length < 9) {
    for (let blackSpace = 0; blackSpace < numberOfBlankSpaces; blackSpace++) {
      innerRow += ' '
    }
    if (innerRow.length >= 9) break
    for (let hastTag = 0; hastTag < hashTagNumber; hastTag++) {
      innerRow += '#'
    }
  }
  resultString += `${innerRow}\n`
  hashTagNumber += 2

}
console.log(resultString)



// for (let i = 100; i < -101; i--) {
//   console.log(i)
// }

// 4 exercise 
// console.log('4 exercise')
// for (let i = 100; i >= -100; i--) {
//   console.log(i)
// }

// 5 exercise 
// console.log('5 exercise')
// for (let index = 0; index <= 100; index++) {
//   // if (!(index % 7)) {
//   //   console.log(`${index} *`)
//   // } else {
//   //   console.log(index)
//   // }
//   const outputToPrint = index % 7 ? index : `${index} *`
//   console.log(outputToPrint)
// }

// 6 exercise 
// console.log('6 exercise')
// for (let i = 0; i <= 100; i++) {
//   const result = Math.sqrt(i)
//   if (result % 1 !== 0) {
//     console.log(result)
//   } else {
//     console.log(`${result} *`)
//   }
// }

// 7 
// let userNumber
// while (true) {
//   userNumber = parseInt(prompt('please provide a positive number...'))
//   if (userNumber >= 0 ) break
// }
// for (let i = userNumber; i >= 0; i--) {
//   console.log(i)
// }

// 8 exercise 
const userNumber = parseInt(prompt('Please provide a number', 5))

let index = userNumber
const updateFactor = userNumber < 100 ? 1 : -1
while (index !== 100) {
  console.log(index)
  index += updateFactor
}
console.log(100)
