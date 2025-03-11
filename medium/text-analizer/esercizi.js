const list = `
Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`


//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

const rgx = /(?<value>.+);(?<quantity>\d{1,3});(?<origin>.+)/g;

function num1(txt) {

  let arr;
  const resultsArr = []

  while ((arr = rgx.exec(txt))) {
    // console.log(arr)
    const {...info} = arr.groups
    resultsArr.push(info)
  }
  return resultsArr
}

const result1 = num1(list)
console.log(result1, 'logging result 1')

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}

const rgx2 = /(?<value>\w+(?:\s\w+)*);(?<quantity>\d{1,3});(?<origin>Supermercato)/gi;

function num2(txt) {
  let arr;
  let resultsArr = []

  while ((arr = rgx2.exec(txt))) {
    const {_, ...info} = arr.groups
    resultsArr.push(info)
  }
  return resultsArr
}

const result2 = num2(list)
console.log(result2)


//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}
/**
 * 
 * @param {string} txt 
*  @param {'supermercato' | 'enoteca' | 'Pescheria' | 'Macelleria' | 'Panetteria'} filter 
 * @returns 
 */
function num3(txt, filter) {

  const rgx3 = new RegExp(String.raw`(\w+(?:\s\w+)*);(\d{1,3});(${filter})`, 'gi')

  let arr;
  let resultsArr = []

  while ((arr = rgx3.exec(txt))) {
    let [_, value, quantity, origin] = arr
    resultsArr.push({value, quantity, origin})
  }

  return resultsArr
}

// const result3 = num3(list, 'Macelleria')
// console.log(result3)


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
    const result = {}
    keys.forEach((key, i) => {
      result[key] = objectValues[i]
    })
    resultsArr.push(result)
     
  }

  return resultsArr
}


// const result4 = num4(list, ['qui', 'quo', 'qua'])
// console.log(result4)
// const result5 = num4(list, ['ciao', 'test', 'funziona'])
// console.log(result5)