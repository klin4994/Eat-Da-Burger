const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '10.0.0.111',
  port: 3306,
  user: 'root',
  password: 'Mypassword',
  database: 'burger_db'
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
