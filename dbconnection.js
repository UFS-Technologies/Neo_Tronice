var mysql = require("mysql2");
var connection = mysql.createPool({

     host:"DESKTOP-IK6ME8M",
    user: "Bilal",
    password: "root",
    database: "sunfocuz_db_v1",
  
    
});
connection.on("connect", function() {
   console.log("Connected to the database");
});
module.exports = connection;

