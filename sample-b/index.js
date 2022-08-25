const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_maya_user",
  user: "maya",
  password: "123",
  database: "maya_sample_db_b"
}

let con = null

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world from sample b')
})

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

// this line has error, create it manually in the database
app.get('/create-table', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    const sql = `
    CREATE TABLE IF NOT EXISTS test_table (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL
    )  ENGINE=INNODB;
  `;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send("numbers table created");
    });
  });
})

app.get('/addname', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    const sql = "INSERT INTO test_table (first_name, last_name) VALUES ('first','last')"
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(`inserted into table`)
    });
  })
})

app.listen(4000)

console.log("sample b listening on port 4005")

