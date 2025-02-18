// const userName = prompt('bella domanda ?')
// alert(`Hello ${userName}`)

// if
// const userAge = prompt("'What's your age again?");

// if (parseInt(userAge) < 18) {
//   alert("go away");
// } else {
//   alert("Welcome ");
// }

// if (parseInt(userAge) > 18  &&  parseInt(userAge) < 80 ) {
//     alert('you can enter')
// } else if (parseInt(userAge) > 80) {
//     alert('your heart my brake')
// } else {
//     alert('go away')
// }

// if (userAge) console.log('thanks for providing age')

// for (let i=0, i ++, i< 10) {}
// let i = 0;
// while (i < 11) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let j = 0
// do {
//     console.log('Doing it', j)
//     j++
// } while (j<11);

// let j = 0;
// do {
//   console.log("Doing it", j ** 2);
//   j++;
// } while (j < 11);


// const secretNumber = Math.round(Math.random() * 10 ) 
// console.log('the secret number is:',secretNumber)

// while (true) {
//     const guessedString = prompt('Guess a secret number from 0 to 10')
//     const parsedGuessesNumber = parseInt(guessedString)

//     if (parsedGuessesNumber === secretNumber) {
//         alert('Got it !')
//         break
//     } else {
//         alert('try again')
//     }
// }

// for (let i = 0; i <= 10 ; i++) {
//   console.log(i)
// }

// for (let i = 0; i < Infinity; i++) {
//   console.log('infinity')
// }

for (let y = 0; y < 4; y++) {
  let row = ''
  for (let x = 0; x < 4; x++) {
    row += `x: ${x}, y: ${y} ; `  
  } 
  console.log(row)
}