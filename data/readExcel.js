require('dotenv').config();  // Make it first line
var XLSX = require('XLSX');
var async = require('async');
var workbook = XLSX.readFile(__dirname+'/stopstalk.xlsx');
var workSheetName = workbook.SheetNames[0];
var workSheet = workbook.Sheets[workSheetName];
const fs = require('fs');
const stopStalkModel = require('../backend/models/stopStalkModel');
const mongoose = require('mongoose');
const dbconnect = require('../backend/lib/connectLib');

dbconnect.connect();

//console.log(workSheet);
var jsonArray = XLSX.utils.sheet_to_json(workSheet, {});

// Write Code to push all these users into mongodb
// fs.writeFile('stopsalk.json', jsonArray);

// fs.writeFile(__dirname+'/stopsalk.json', JSON.stringify(jsonArray), 'utf8', function(){
//     console.log("Written");
// });
// console.log(jsonArray);

// Useful when we want to do something in a loop, one after another

mongoose.connection.on('connected', function(){
    async.eachSeries(jsonArray, function(curUser, next){
        console.log(curUser);
        // CRUD  - C
        var newUser = new stopStalkModel(curUser);
        newUser.save(function(err, user){
            if(err){
                console.log(err);
            }
            next(); // Once this is called, only then we move to next iteration
        })
    }, function(err){
        console.log("All Users Processed Now");
        dbconnect.disconnect();
    });
})




// console.clear();


// var jsonArrayRollNumberListMasterDB = ['vishvamporwal', 'heart_blue'];
// var jsonArrayRollNumberListGoogleDB = ['vishvamporwal', 'pranat_sharma1']

// let a = new Set(jsonArrayRollNumberListMasterDB);
// let b = new Set(jsonArrayRollNumberListGoogleDB);


// let a_minus_b = new Set([...a].filter(x => !b.has(x)));
// let b_minus_a = new Set([...b].filter(x => !a.has(x)));
// let a_intersect_b = new Set([...a].filter(x => b.has(x))); 

// console.log([...a_minus_b]) // {1}
// console.log([...b_minus_a]) // {5}
// console.log([...a_intersect_b]) // {2,3,4}=