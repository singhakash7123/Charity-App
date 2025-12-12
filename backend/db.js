const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '192.168.1.15',
    user: 'root',
    password: 'a@yush03',         
    database: 'samarthan'
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

module.exports = db;
