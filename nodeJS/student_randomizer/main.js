const fs = require('fs')


function readFileInfo(filename) {
  const fileInfo = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' })
  const parsedInfo = JSON.parse(fileInfo)
  return parsedInfo
}

function randomIndex(arrayOfClassmates) {
  const randomIndex = Math.round(Math.random() * (arrayOfClassmates.length - 1));
  return randomIndex
}

function createStudentCouples(classmates) {

  const couplesArray = [];

 
  for (let j = 0; j < 4; j++) {
    
   const singleCoupleArray = []

   // qui sceglieamo due classmate da mettere dentro un singolo array 
    for (let i = 0; i < 2; i++) {

      const index = randomIndex(classmates) // qui scelgo un index
      const pickedClassmate = classmates[index] // qui con l'indice scelto prendo un compagno 
      singleCoupleArray.push(pickedClassmate.name) // aggiungo il compagno all array di coppia 
      // qui togliamo quello che è stato scelto
      classmates.splice(index, 1) // qui elimino il compagno dall array classmate array 
    }
    couplesArray.push(singleCoupleArray) // qui aggiungo la coppia al mio array di coppie 
  }
  return couplesArray
}

function printStudentCouples(listOfCouples) {

  for (let index = 0; index < listOfCouples.length; index++) {
    const couple = listOfCouples[index];

    const student1 = couple[0]      // qui devo prendere il primo elemento dentro l'array 
    const student2 = couple[1]     // qui devo prendere il secondo elemento dentro l'array 
  
    console.log(`${index+1}) ${student1} - ${student2}`)
  }


}

function main() {

  //0) recupera le informazioni degli studenti dal file students.json
  //const allStudents = getStudentsFromJsonFile('students.json')
  const originalClassmatesArrays = readFileInfo('students.json')

  const classmates = [...originalClassmatesArrays]

  //1) dall 'array studenti estrai un array di coppie di studenti
  // [[student3name, student1name], [student8name, student7name], [...], [...]]
  const studentCouples = createStudentCouples(classmates)
  console.log(studentCouples)

  //2) fare console.log delle coppie degli studenti con questo output
  //1) student3name - student8name
  //2) student1name - student7name
  //......................
  printStudentCouples(studentCouples);

}

main();