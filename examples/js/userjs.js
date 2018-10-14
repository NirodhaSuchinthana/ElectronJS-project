
var mysql = require('mysql');

document.getElementById("btn").addEventListener("click",() =>{
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
console.log("Success");
//listen for app to be ready

});

//queries
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var address = document.getElementById("address").value;
var contact = document.getElementById("contact").value;
var designation = document.getElementById("designation").value;
var salary = document.getElementById("salary").value;
var note = document.getElementById("note").value;

document.getElementById("note").value="";
document.getElementById("username").value="";
document.getElementById("password").value="";
document.getElementById("firstName").value="";
document.getElementById("lastName").value="";
document.getElementById("address").value="";
document.getElementById("contact").value="";
document.getElementById("designation").value="";
document.getElementById("salary").value="";

$queryString = "INSERT INTO users (username,password,first_name,last_name,address,contact,designation,salary,note) VALUES ('"+username+"','"+password+"','"+firstName+"','"+lastName+"','"+address+"','"+contact+"','"+designation+"','"+salary+"','"+note+"')";

// var values = [ username,password,first_name];
console.log("Number : ");
connection.query($queryString, (err) =>{
    if (err) throw err;
    console.log("Number of records inserted: ");
    alert("Done!!")
  });
//connection is closed
connection.end(()=>{
  console.log("Connection succesfully closed");
});



},false);