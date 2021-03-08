const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  port: 3306,
  user: 'bf711484352d37',
  password: '8fe7d9fe',
  database: 'heroku_51b5acce9e83132'
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for ORM to use.
module.exports = connection;
