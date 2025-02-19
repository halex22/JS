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
  if (number >= 2 ) return isEven((number - 2 ))
  return number === 0 ? true : false
}

const isEvenArrow = number => {
  if (number >= 2) return isEvenArrow((number - 2))
    return number ? false : true
}

console.log(isEven(72))
console.log('is 14 even? ',isEvenArrow(14))
console.log('is 21 even? ',isEvenArrow(21))


//  char counter
function countBs(stringToCheck) {
  let count = 0
  for (let charIndex = 0; charIndex < stringToCheck.length; charIndex++) {
    if (stringToCheck[charIndex] === 'B') count++
  }
  return count
}

console.log(countBs('Bouna Notte Belli'))


const countChar = (stringToCheck, characterToCheck)  => {
  let count = 0
  for (let charIndex = 0; charIndex < stringToCheck.length; charIndex++) {
      if (stringToCheck[charIndex] === characterToCheck) count ++    
  }
  return count
}

console.log(countChar('this is the string', 'w'))
