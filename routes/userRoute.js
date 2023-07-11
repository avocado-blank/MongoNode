const express = require("express");
// const { create } = require("../controller/bookController");
const router = express.Router();
const baseUserRoute = "/user";

router.post(`${baseUserRoute}/create`, create);

module.exports = router;
