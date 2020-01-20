const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "bookworm"
});

db.connect(err => {
    if (err) throw err;
    console.log("connected as id "+connection.threadId);
});

module.exports = db;