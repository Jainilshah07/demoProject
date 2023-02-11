let csvToJson = require('convert-csv-to-json');
const fs = require('fs');



let json = csvToJson.getJsonFromCsv("MW-Bonds-on-CM-11-Feb-2023.csv");
for(let i=0; i<json.length;i++){
    fs.appendFileSync("data.json", json[i])
}