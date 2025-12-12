const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'A@yush03',         
    database: 'samarthan',
    port: 3306
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

module.exports = db;
