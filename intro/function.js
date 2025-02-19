function gridaShiappa() {
  console.log('SCHIAPPA')
}

function gridaSchiappa2(name) {
  console.log(name + ' schiappa')
}

const logDouble = (number) => console.log(number ** 2)

gridaSchiappa2('hola')
logDouble(2)

const sum = (n1, n2) => n1 + n2

function sum2 (n1, n2 = 0) {
  return n1 + n2
}

// returns nan since one arg is missing 
console.log(sum2(1))

// function sayHello(name) {

// }

// shadowing

// clojure
function createCallTwice(name) {
  const call = name + ',' + name + ' !'
}


function createMultiplicator(multiplicateBy) {

  const multiplicatorFunction = (numberToMultiplicate) => numberToMultiplicate * multiplicateBy
  return multiplicatorFunction
}

// const createMultiplicator =  (multiplicateBy) => (numberToMultiplicate) => numberToMultiplicate * multiplicateBy
  
const multiplyBySix = createMultiplicator(6)
const multiplyByFive = createMultiplicator(5)

console.log(multiplyBySix(2), '2 was multiply by 6')
console.log(multiplyByFive(3), '2 was mutiply by 5')


function createCounter() {
  let counter = 0

  const incrementFunction = function() {
    counter++
    return counter
  }

  return incrementFunction
}

// const increment = createCounter()
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())


// recursion 

function factorial(number) {
  if (number === 0) {
    return 1
  } 
  return number * factorial(number - 1)
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(7))
