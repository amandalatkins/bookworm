const orm = require('../config/orm.js');

module.exports = {
    all: cb => orm.selectAll("books",res => cb(res)),
    create: (data,cb) => orm.insertOne("books",data,cb),
    update: (data,condition,cb) => orm.insertOne("books",data,condition,cb),
    delete: (condition) => orm.deleteOne("books",condition,cb)
};