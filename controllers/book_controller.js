// Import Express and setup the router
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require('cheerio');

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
    console.log(req.body);
    console.log(req.params);
    book.update(req.body,req.params,function(data) {
        if (data.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/books/:id",(req,res) => {
    console.log(req.params);
    book.delete(req.params, result => {
        res.status(200).end();
    });
});

router.get("/api/search/:title", (req,res) => {

    let queryUrl = "https://www.indiebound.org/search/book?keys="+req.params.title;
    axios.get(queryUrl)
    .then(results => {
        let $ = cheerio.load(results.data);
        let books = $('.ababook-search-result');
        let storeBooks = [];
        books.each(function() {

            var bookObj = {
                coverImg: $(this).find('.ababook-search-result-cover-image > a > img').attr('src'),
                url: "https://www.indiebound.org" + $(this).find('.ababook-search-result-cover-image > a ').attr('href'),
                title: $(this).find('.ababook-search-result-info > h2 > a').text(),
                authors: $(this).find('.ababook-search-result-info > h3').text()
            }

            bookObj.format = $(this).find('.ababook-search-result-info > h2').text().replace(bookObj.title+" ", '').replace('(','').replace(')', '');

            if (bookObj.format === "Hardcover" || bookObj.format === "Paperback") {
                storeBooks.push(bookObj);
            }
        });

        res.json(storeBooks);

    })
    .catch(err => console.log(err));

});

module.exports = router;