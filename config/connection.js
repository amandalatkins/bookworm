const mysql = require("mysql");

if (process.env._ && process.env._.indexOf("heroku")) {
    var connectionDetails = {
        host: "us-cdbr-iron-east-05.cleardb.net",
        port: ,
        user: "b99175fad98522",
        password: "571db4b3",
        database: "heroku_2cbe3492304daf9"     
    }
} else {
    require("dotenv").config();
    var connectionDetails = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "bookworm"
    }
}



const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "bookworm"
});

db.connect(err => {
    if (err) throw err;
    console.log("connected as id "+db.threadId);
});

module.exports = db;