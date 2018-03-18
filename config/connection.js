var mysql = require("mysql");
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

var connection;

//JAWSDB for Heroku deployment
if (process.env.NODE_ENV === "production") {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nikeo369*",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
