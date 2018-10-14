const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let secondWindow;

document.getElementById("btn1").addEventListener("click",() =>{
    var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null, // or the original password : 'apaswword'
    database : 'project'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }

    //listen for app to be ready

});
},false);





