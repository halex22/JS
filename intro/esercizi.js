// looping a triangle


// 1) esercizio 
// let resultString = ''  

// for (let i = 0; i < 7; i++) {
  
//   for (let j = 0; j <= i; j++) {
//     resultString += '#'
//   }
//   resultString += "\n" 
// }
// console.log(resultString)

// console.log(resultString.length)

// let i = 0 ;
// let stringResult = ''
// while (i < 7) {
//   stringResult += '#'
//   console.log(stringResult)
//   i ++
// }

// for (let strartingString = '#'; strartingString.length <= 7; strartingString += '#') {
//   console.log(strartingString)
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
//   if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {

//   }
  
// }

// grid size  chessbiard
// 8x8

let cheeboard = ''
for (let row = 0; row < 8; row++) {

  // righe che iniziano con lo spazio
  if (row % 2 === 0) {
    // qui inizio a popolare le colonne 
    for (let col = 0; col < 8; col++) {
      // qui decido cosa metto nella colonna 
      if (col % 2 === 0) {
        cheeboard += ' ' //se la condizione è vera mette spazio, se no va all'alternativa
      } else {
        cheeboard += '#'
      }
    }
    // righe che iniziano con #
  } else { 
    //popola colonne
    for (let col = 0; col < 8; col++) {
      // qui decido cosa mettere
      if (col %2===0){
        cheeboard+= "#" // se la colonna e pari metto #
      } else {
        cheeboard+= " " // se la colonna è dispari metto ' '
      }
    }
  }
  // qui ho finito il flow control 
  cheeboard += '\n' // qui aggiungo new line 
  // qui posso andare a capo 
}
console.log(cheeboard)

// const rowNumber = parseInt(prompt('quante righe vuoi ?'))
// const colNumber = parseInt(prompt('quante colonne vuoi ?'))

// let newCheeboard = ''
// for (let row = 0; row < rowNumber; row++) {

//   // righe che iniziano con lo spazio
//   if (row % 2 === 0) {
//     // qui inizio a popolare le colonne 
//     for (let col = 0; col < colNumber; col++) {
//       // qui decido cosa metto nella colonna 
//       if (col % 2 === 0) {
//         newCheeboard += ' ' //se la condizione è vera mette spazio, se no va all'alternativa
//       } else {
//         newCheeboard += '#'
//       }
//     }
//     // righe che iniziano con #
//   } else { 
//     //popola colonne
//     for (let col = 0; col < colNumber; col++) {
//       // qui decido cosa mettere
//       if (col %2===0){
//         newCheeboard+= "#" // se la colonna e pari metto #
//       } else {
//         newCheeboard+= " " // se la colonna è dispari metto ' '
//       }
//     }
//   }
//   // qui ho finito il flow control 
//   newCheeboard += '\n' // qui aggiungo new line 
//   // qui posso andare a capo 
// }
// console.log(newCheeboard)

// 2) usando un ciclo crea una priameide come quella dl primo eserziion del libro ma capovolta




















