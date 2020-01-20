// Import Express and setup the router
const express = require("express");
const router = express.Router();

// Import the model (book.js) to use its database functions.
const book = require("../models/book.js");

router.get("/",(req,res) => {
    book.all(data => {
        console.log(data);
        res.render('index',{books: data});
    });
});

router.post("/api/books",(req,res) => {
    book.create(req.body, data => {
        res.json({id: data.insertId});
    });
});

router.put("/api/books/:id",(req,res) => {
    book.update(req.body,res.params,data => {
        if (data.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/books/:id",(req,res) => {
    book.delete(req.params, () => {
        res.status(200).end();
    });
});

module.exports = router;