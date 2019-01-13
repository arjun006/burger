
var mysql = require("mysql");
var express = require('express');
var app = express();
var port = app.set('port', process.env.PORT || 8080);
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "junard#6",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected port: " + port);
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;