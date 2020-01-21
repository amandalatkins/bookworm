const mysql = require("mysql");

if (process.env._ && process.env._.indexOf("heroku")) {
    var connectionDetails = {
        host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "wp5vxm4g9ys0nwf6",
        password: "kkarftwz4hfl7oro",
        database: "on3qd1e5yxfkuj2p"     
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

const db = mysql.createConnection(connectionDetails);

db.connect(err => {
    if (err) throw err;
    console.log("connected as id "+db.threadId);
});

module.exports = db;