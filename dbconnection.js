var mysql = require("mysql2");
var connection = mysql.createPool({

     host:"DESKTOP-IK6ME8M",
    user: "Bilal",
    password: "root",
    database: "neo_tronice",
  
    
});
connection.on("connect", function() {
   console.log("Connected to the database");
});
module.exports = connection;

