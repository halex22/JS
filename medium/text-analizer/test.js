const testStr = 'mi chiamo pippo, ho 7 Fratelli, mi piace il numero 5 e vado spesso al parco che dista 8 km da casa mia'

// const rgx = /\d+/
const rgx = /(\d+) (\w+)/

// rgx.test(testStr)

// console.log(testStr.match(rgx))
console.log(testStr.match(rgx))
console.log(rgx.exec(testStr))

