// create min function 
function min (n1, n2) {
  return n1 < n2 ? n1 : n2
}

const minArrow = (n1, n2) => n1 < n2 ? n1 : n2

console.log(min(5,4))
console.log(minArrow(5,4))

// even or odd 
// zero is even - one is odd
function isEven(number) {
  if ((number - 2) === 1) {
    return false
  } else if ((number - 2) === 0) {
    return true
  }
}

//  char counter
// function countBs(stringToCheck) {
//   let numberOfBs = 0

//   for (let letter = 0; letter < ; letter++) {
    
//   }

// }

const test = 'qusta è una stringa'
console.log(test[3])