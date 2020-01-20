const orm = require('../config/orm.js');

module.exports = {
    all: cb => orm.selectAll("books",res => cb(res)),
    create: (data, cb) => orm.insertOne("books",data,res => cb(res)),
    update: (data,condition,cb) => orm.updateOne("books",data,condition,res => cb(res)),
    delete: (condition, cb) => orm.deleteOne("books",condition,res => cb(res))
};