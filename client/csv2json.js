#!/usr/bin/env node
const CVSToJSON = require("csvtojson");
const FileSystem = require("fs");


//CVSToJSON().fromFile("./source.csv").then(source => {
    CVSToJSON().fromFile("/Users/andrewforrest/Github/data-generator-csv-master/data-generator/client/cypress/downloads/generatedBy_react-csv.csv").then(source => {
    
    console.log(source);
    /*source.push({
        "sku":"56789",
        "title": "Fortnite",
        "hardware": "Nintendo Switch",
        "price": "00.00"
    });*/
    //const csv = JSONToCSV(source, {fields: ["sku", "title", "hardware", "price"] });
    //FileSystem.writeFileSync("./destination.csv", csv);

    //FileSystem.writeFileSync("./destination.json", source);
   

  console.log(typeof source)
  /* FileSystem.writeFile("./destination.json", JSON.stringify(source)), err => {
       if (err){
           console.error(err)
       }
   }*/
   

   FileSystem.writeFile('/Users/andrewforrest/Github/data-generator-csv-master/data-generator/client/cypress/fixtures/fileTest.json', JSON.stringify(source[0]), (error) => {
    if (error) throw error;
    
});

//const json = CVSToJSON().fromFile("/Users/andrewforrest/Downloads/generatedBy_react-csv.csv");
//FileSystem.writeFileSync("./destination.", csv);
    });