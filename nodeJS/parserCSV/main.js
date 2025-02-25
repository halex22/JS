const fs = require('fs');

function readCsvFromFile(filePath){
    const csv = fs.readFileSync(filePath, 'utf8');
    return csv;
}

function splitCsvInRows(csv){
    const splittedCsv = csv.split(/\r?\n/);
    return splittedCsv;
}

function splitRows(arrayOfString){
    const splittedRowsArray = [];
    for (const row of arrayOfString) {
        const splittedRow = row.split(',')
        splittedRowsArray.push(splittedRow)
    }
    return splittedRowsArray;
}

function getKeysFromFirsLine(arrayOfSplittedLines){
    const keys = arrayOfSplittedLines[0];
    return keys;
}

function getValues(arrayOfSplittedLines){
    const values = arrayOfSplittedLines.slice(1)
    return values;
}

function createEntry(keys, valueArray){
    const entry = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = valueArray[i]

        entry[key] = value
    }

    return entry;
}

function createArrayOfEntries(keys, values){

    const arrayOfEntries = [];

    for (let i = 0; i < values.length; i++) {
        const valueArray = values[i];
        
        const entry = createEntry(keys, valueArray);

        arrayOfEntries.push(entry);
    }

    return arrayOfEntries;
}

function convertArrayToJson(array){
    const json = JSON.stringify(array);
    return json;
}

function fromCsvToJson(csv){

    const arrayOfStringRows = splitCsvInRows(csv);

    const arrayOfSplittedRows = splitRows(arrayOfStringRows);

    const keys = getKeysFromFirsLine(arrayOfSplittedRows);
    const values = getValues(arrayOfSplittedRows);

    const arrayFromEntries = createArrayOfEntries(keys, values);

    const json = convertArrayToJson(arrayFromEntries)

    
    return json
}

function writeJsonToFile(filePath, content){
    fs.writeFileSync(filePath, content)
}

const getOriginPath = () => process.argv[2]
const getDestinationPath = () => process.argv[3]


function main(){

    const originPath = getOriginPath()
    const csvData = readCsvFromFile(originPath);

    const json = fromCsvToJson(csvData);

    console.log(json);

    const destinationPath = getDestinationPath()
    writeJsonToFile(destinationPath, json);

}

main()