const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./model/user_schema");
const mainRoute = require("./routes/route");

const app = express();

mongoose
    .connect(
        "mongodb://root:blank@127.0.0.1:27017/mongo?authSource=admin"
    )
    .then((result) => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });
app.use(express.json());
app.use(mainRoute);
// console.log(mainRoute);
app.listen("5000", () =>
    console.log("server is running on port 5000")
);
