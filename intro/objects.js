const emptyObj = {}

const student = {
  name: 'first',
  age: 100,
  lastName: 'last',
  marks:[9, 10, 8],
  address: {
    street: 'main street',
    streetNumber: 1,
    cap: 16123
  },
  isMarried: false,
  // sayHello() {console.log('hello')}
}
// const isHumgry = true;
// student.isHumgry = isHumgry 

console.log(Object.entries(student))
console.log(student)