const array1 = [23 , 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

function genericMap(array, mappingFunction) { //array anche di non numeri, e una funzione come parametro
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element, i, array);
        newArray.push(newElement);
    }

    return newArray;
}

function genericFilter(array, filteringFunction) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filteringFunction(element, i, array)) {
            newArray.push(element);
        }
    }

    return newArray;
}

function genericReduce(array, reducingFunction, startingAccumulator){
    let accumulator = startingAccumulator;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        accumulator = reducingFunction(accumulator, current, i, array);
    }

    return accumulator;
}

// ESERCIZIO 1 (FILTER)
// filtrare tutti i numeri minori o uguali a zero

// const keepBiggerThanZero = value => value > 0;
// const genericNumbersBiggerThanZero = genericFilter(array1, keepBiggerThanZero);

// const numbersBiggerThanZero = array1.filter(value => value > 0)

// console.log(numbersBiggerThanZero);

 
// ESERCIZIO 2 (MAP)
// convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

// const celToFahFntc = value => (value * (9/5)) + 32;
// const genericFahDegrees = genericMap(array1, celToFahFntc);

// const fahDegrees = array1.map(value => (value * (9/5)) + 32);

// console.log(fahDegrees);

// ESERCIZIO 3 (REDUCE)
// fare la media dei valori

// const meanFnct = (acc,curr,_,array) => (acc + (curr/array.length));
// const genericMeanResult = genericReduce(array1, meanFnct, 0);

// const meanResult = array1.reduce((acc,curr,_,array) => (acc + (curr/array.length)), 0)

// console.log(meanResult);

// ESERCIZIO 4 (REDUCE)
// restituire il valore più basso e il più alto

// const maxMinFnct = ([max, min], c) => [Math.max(max, c), Math.min(min,c)];
// const genericMaxMin = genericReduce(array1, maxMinFnct, [-Infinity, Infinity]);

// const maxMin = array1.reduce(([max, min],c) => [Math.max(max, c), Math.min(min,c)], [-Infinity, Infinity])


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

// ESERCIZIO 5 (FILTER)
// filtrare tutti i nomi piu grandi di 4 caratteri
const isShorterThanFour = value => value.length < 4
// const genericShortNames = genericFilter(array2, isShorterThanFour)
// const shortNames = array2.filter(name => name.length < 4)

// ESERCIZIO 6 (MAP)
// traformare tutte le stringe in maiuscolo
// const convertToUpperCase = name => name.toUpperCase()
// const genericUpperCaseNames = genericMap(array2, convertToUpperCase)
// const upperCaseNames = array2.map(name => name.toUpperCase())

// ESERCIZIO 7 (MAP)
// mettere SOLO le iniziali maiuscole
// const capitalizeName = name => `${name[0].toUpperCase()}${name.slice(1)}`
// const genericCapitalizeNames = genericMap(array2, capitalizeName)
// const capitalizeNames = array2.map(name => `${name[0].toUpperCase()}${name.slice(1)}`)
// ESERCIZIO 8 (REDUCE)
// restituire una stringa composta dalle iniziali delle parole
// const composeStrWithInitials = (a, c) => a + c[0] 
// const genericStrWithInitial = genericReduce(array2, composeStrWithInitials, '')
// const strWithInitials = array2.reduce((a, c) => a+c[0], '')

// ESERCIZIO 9 (REDUCE)
// sommare tutti i caratteri di tutte le stringhe
// const sumNamesLen = (a,c) => a + c.length
// const genericCharSum = genericReduce(array2, sumNamesLen, 0)
// const charSum = array2.reduce((a,c) => a + c.length, 0)

// ESERCIZIO 10 (MAP)
// eliminare le vocali dalle stringhe
const vowels = ['a', 'e', 'i', 'o', 'u'];
// const isVowel = char => vowels.includes(char.toLowerCase())

// const removeVowels = name => [...name].filter(char => !vowels.includes(char)).join('')

// const genericNoVowelsNames = genericMap(array2, removeVowels)
// const noVowelsNames = array2.map(name => [...name].filter(char => !vowels.includes(char)).join(''))

// ESERCIZIO 11 (MAP)
// restituire un array di numeri che sono le lunghezze delle singole parole
// const countNameLen = name => name.length
// const genericNameLen = genericMap(array2, countNameLen)
// const NamesLen = array2.map(name => name.length)


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//ESERCIZIO 12 (MAP)
//restituire un array di numeri che sono le lunghezze dei sigoli array
// const countArrayLenFnct = arrayOfNumber => arrayOfNumber.length 
// const genericCountArrayLen = genericMap(array3, countArrayLenFnct)
// const countArrayLen = array3.map(arrayOfNumber => arrayOfNumber.length)

//ESERCIZIO 13 (REDUCE)
//sommare tutti i numeri in tutti gli array
const sumAllNumberInArraysFnct =  (acc, cur) => {
    if (Array.isArray(cur)) {
        return genericReduce(cur, sumAllNumberInArraysFnct, acc)
    }
    return acc + cur
}

const genericSumOfAllArrayNumbers = genericReduce(array3, sumAllNumberInArraysFnct, 0)
const sumOfAllArrayNumbers = array3.reduce((a, c) => a + c.reduce((a, c) => a + c), 0)
// console.log(genericSumOfAllArrayNumbers)

    // arrayOfArraysNumber
//ESERCIZIO 14 (REDUCE)
//sommare tutte le lunghezze degli array
const sumAllArrayLen = array3.reduce((a, c) => a + c.length, 0)
// console.log(sumAllArrayLen)

//ESERCIZIO 15 (REDUCE)
//sommare tutti i numeri con indice uguale e restituire un array di risultati, ho usato tre funzioni x_x

// Closure 
const maxArraysLen = array3.map(arrayOfNumber => arrayOfNumber.length)
const maxIndex = Math.max(...maxArraysLen)

const superReduceWithClosure = (a, c) => {
    for (let index = 0; index < maxIndex; index++) {
        const numberToSum = c[index] ?? 0
        a[index] ? a[index] += numberToSum : a[index] = numberToSum
    }
    return a
}
const sameIdexSumArrayClosure = array3.reduce(superReduceWithClosure, [])
console.log(sameIdexSumArrayClosure)


// const sameIdexSumArray = array3.reduce((a, c) => {
//     const maxArraysLen = array3.map(arrayOfNumber => arrayOfNumber.length)
//     const maxIndex = Math.max(...maxArraysLen)
//     for (let index = 0; index < maxIndex; index++) {
//         const numberToSum = c[index] ?? 0
//         a[index] ? a[index] += numberToSum : a[index] = numberToSum
//     }
//     return a
    
// } , [])