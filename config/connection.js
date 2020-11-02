// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Herbie101!",
    database: "burger_db"
});

// DONT FORGET TO REMOVE PASSWORD AFTER FINALIZING 

// Make connection.
connection.connect(function(err) {
    if (err) {
    console.error("error connecting: " + err.stack);
    return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
