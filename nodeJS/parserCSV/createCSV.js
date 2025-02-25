const fs = require('fs')
const { json } = require('stream/consumers')

const arrayIntoOneString = arrayOfString => arrayOfString.join(',')

const createDataValues = arrayOfStudents => {
  const arrayOfStudentsData = []
  for (const student of arrayOfStudents) {
    const singleStudentData = arrayIntoOneString(Object.values(student))
    arrayOfStudentsData.push(singleStudentData)
  }
  return arrayOfStudentsData
}

const joinHeaderWithData = (headerInfo, dataInfo) => {
  const singleStringDataInfo = dataInfo.join('\n')
  const finalInfo = headerInfo.concat('\n', singleStringDataInfo)
  return finalInfo
}

function main() {

  // 1. read info from input file
  const inputFilePath = process.argv[2]
  const inputFileInfo = fs.readFileSync(inputFilePath, {encoding:'utf-8', flag:'r'})
  const parsedFileInfo = JSON.parse(inputFileInfo)

  // 2. structure data into csv format
  const sampleObject = parsedFileInfo[0]
  // 2.1 create header
  const csvHeader = arrayIntoOneString(Object.keys(sampleObject))
  // 2.2 create values
  const csvData = createDataValues(parsedFileInfo)
  // 2.3 join header and values into one string
  const dataToSave = joinHeaderWithData(csvHeader, csvData)

  // 3. save data into csv
  const filePathDestination = process.argv[3]

  fs.writeFileSync(filePathDestination, dataToSave, {encoding:'utf-8'})
   
}

main()