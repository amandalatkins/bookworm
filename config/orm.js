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
            callback();
        });
    },
    updateOne: (tableName,colName,where,callback) => {
        db.query("UPDATE ?? SET ? WHERE ?",[tableName,colName,where], (err,res) => {
            if (err) throw err;
            callback();
        });
    },
    deleteOne: (tableName,where) => {
        db.query("DELETE FROM ?? WHERE ?",[tableName,where],(err,res) => {
            if (err) throw err;
            callback();
        });
    }
}