const list = `
Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Superme|rcato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`


//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}
// olanzapina
// ciprexa

// const rgx = /(\w+|\w+\s\w+);(\d{1,3});(\w+)g/
const rgx = /(\w+(?:\s\w+)*);(\d{1,3});(\w+)/g;

function num1(txt) {

  let arr;
  let resultsArr = []

  while ((arr = rgx.exec(txt))) {
    resultsArr.push({
      value: arr[1],
      quantity: arr[2],
      origin: arr[3]
    })
  }


  return resultsArr

}

const result1 = num1(list)

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}
const rgx2 = /(\w+(?:\s\w+)*);(\d{1,3});Supermercato/gi;
function num2(txt) {
  let arr;
  let resultsArr = []

  while ((arr = rgx2.exec(txt))) {
    resultsArr.push({
      value: arr[1],
      quantity: arr[2],
      origin: 'supermercato'
    })
  }
  return resultsArr
}
const result2 = num2(list)
// console.log(result2)

//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}

/**
 * 
 * @param {string} txt 
 * @param {string[]} keys 
 * @returns 
 */
function num4(txt, keys) {

  let arr;
  let resultsArr = []


  while ((arr = rgx.exec(txt))) {
    const [_, value, quantity, origin,] = arr
    const objectValues = [value, quantity, origin]
    const r = {}
    keys.forEach((key, i) => {
      r[key] = objectValues[i]
      console.log(r)
    })
    resultsArr.push(r)
     
  }

  return resultsArr
}

const result4 = num4(list, ['qui', 'quo', 'qua'])
console.log(result4)
const result5 = num4(list, ['ciao', 'test', 'funziona'])
console.log(result5)