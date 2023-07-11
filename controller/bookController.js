const BookModel = require("../model/book_schema");

const create = async (req, res) => {
    console.log(req.body);
    const { title, releaseYear, author, authorID } = req.body;

    const newBook = new BookModel({
        title,
        releaseYear,
        author,
        authorID,
    });
    const saveBook = await newBook.save();
    res.status(201).json({
        error: false,
        message: "Book Created Successfully",
        data: saveBook,
    });
};

module.exports = { create };
