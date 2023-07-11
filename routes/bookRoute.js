const express = require("express");
const { create } = require("../controller/bookController");
const router = express.Router();
const bookBaseRoute = "/book";

router.post(`${bookBaseRoute}/create`, create);

module.exports = router;
