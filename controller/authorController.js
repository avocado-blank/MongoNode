const AuthorModel = require("../model/author_schema");

const create = async (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    const newAuthor = new AuthorModel({ name });
    const saveAuthor = await newAuthor.save();
    res.status(201).json({
        error: false,
        message: "Author Created Successfully",
        data: saveAuthor,
    });
};

module.exports = { create };
