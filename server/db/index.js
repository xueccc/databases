var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

module.exports = dbConnection;


