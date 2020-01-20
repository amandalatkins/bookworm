const db = require('./connection.js');

module.exports = {
    selectAll: (tableName,callback) => {
        db.query("SELECT * FROM ??",[tableName],(err, res) => {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: (tableName,newData,callback) => {
        db.query("INSERT INTO ?? SET ?",[tableName,newData], (err, res) => {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: (tableName,newData,condition,callback) => {
        db.query("UPDATE ?? SET ? WHERE ?",[tableName,newData,condition], (err,res) => {
            if (err) throw err;
            callback(res);
        });
    },
    deleteOne: (tableName,condition) => {
        db.query("DELETE FROM ?? WHERE ?",[tableName,condition],(err,res) => {
            if (err) throw err;
            callback(res);
        });
    }
}