const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");

router.get('/', async function (req, res) {
    try {
    
    const books = await Book.find({})

    const context = {
        books,
    }

    res.render('books/allBooks', context);

    } catch (error) {
        return console.log(error);
    }
});

// Route to NEW BOOK
router.get("/new-book", async function (req, res) {
    res.render("newBook");
});

module.exports = router;
