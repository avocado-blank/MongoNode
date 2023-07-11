const express = require("express");
const authorRoute = require("./authorRoute");
const bookRoute = require("./bookRoute");

const router = express.Router();

router.use("/api", authorRoute);
router.use("/api", bookRoute);

module.exports = router;
