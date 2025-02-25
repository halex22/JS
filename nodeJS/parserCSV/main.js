function readCsvFromFile(filePath) {}

function fromCsvToJson(csvToConvert) {
  const ArrayOfStringRow = splitCsvInRow(csv)
  const arrayOfSplittedRow = splitRow(csv)
  // create array of arrays with spited lines
}

function main () {

  // leggere il file
  const csvData = readCsvFromFile(filePath)

  // transform data to json 
  const jsonData = fromCsvToJson(csvToConvert)

  writeJsonFile(filePath)
}


main()