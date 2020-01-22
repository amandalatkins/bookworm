# BookWorm
Are you a book lover? Is your To-Read pile unweildy? BookWorm is here to help! This app allows you to store book titles and links to more information so you can get organized and get reading. Once you've read a book, just click "I Read It!", and it will move to your "Done" list where you can watch your finished books pile up! It doesn't end there-- If you loved the book you can always click "Read Again" to move it back to your To-Read Pile; if you hated it, click "Delete" as your first step to forgetting it forever!

## Screenshots
![No Finished Books](/public/assets/img/screenshot1.jpg)
![With Finished Books](/public/assets/img/screenshot2.jpg)

## Try it Out!
[Click here to try the demo!](https://floating-reef-93891.herokuapp.com/)

# Installation

## Prerequisites
* [NodeJS](https://nodejs.org/)
* [MySQL](https://dev.mysql.com/downloads/mysql/)

## Installing

Run the following commands in your preferred CLI to install the Node package and all dependencies:

```bash
git clone https://github.com/amandalatkins/bookworm.git
cd bookworm
npm i
```

Create a new file called `.env` that will store your MySQL server information:

```bash
touch .env
```

Format the contents of `.env` as follows, substituting your MySQL server information where applicable:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASS=password
DB_NAME=bookworm
```

Import the database schema and optional demo data:

```bash
#login to mysql
mysql -u username -p

#import the required schema
source db/schema.sql

#import the optional demo data
source db/seeds.sql
```

Start the application by using the following command:

```bash
npm start
```

# About BookWorm

## Code Snippets

The following code snippet shows the custom Object Relational Mapper (ORM) built for BookWorm:

```javascript
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
        db.query("UPDATE ?? SET ? WHERE ?",[tableName,newData,condition], function(err,res) {
            if (err) throw err;
            callback(res);
        });
    },
    deleteOne: (tableName,condition,callback) => {
        db.query("DELETE FROM ?? WHERE ?",[tableName,condition],(err,res) => {
            if (err) throw err;
            callback(res);
        });
    }
}
```

And the Book model built using the custom ORM:

```javascript
const orm = require('../config/orm.js');

module.exports = {
    all: cb => orm.selectAll("books",res => cb(res)),
    create: (data, cb) => orm.insertOne("books",data,res => cb(res)),
    update: (data,condition,cb) => orm.updateOne("books",data,condition,res => cb(res)),
    delete: (condition, cb) => orm.deleteOne("books",condition,res => cb(res))
};
```

## Learning Points:
* The practice of creating my own ORM helped me understand how ORM packages work in their simplest form, as well as helped me learn best practices for implementing them.
* Great practice working with a Model-View-Controller design pattern and architecting my application with those principles in mind.

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/)
* [MySQL](https://dev.mysql.com/downloads/mysql/
* Node Packages:
    * [MySQL](https://www.npmjs.com/package/mysql)
    * [DotEnv](https://www.npmjs.com/package/dotenv)
    * [Express](https://www.npmjs.com/package/express)
    * [Express Handlebars](https://www.npmjs.com/package/express-handle-bars)

## Authors
Amanda Atkins
* [Portfolio](https://digitalrainstorm.com/)
* [GitHub](https://github.com/amandalatkins)
* [LinkedIn](https://www.linkedin.com/in/amandalatkins)

## License
This project is licensed under the ISC License.