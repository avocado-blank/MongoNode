const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./model/user_schema");
const mainRoute = require("./routes/route");

const app = express();

mongoose
    .connect("mongodb://hhz:hhz@127.0.0.1:27017/mongo")
    .then((result) => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });
app.use(express.json());
app.use(mainRoute);
// console.log(mainRoute);
app.listen("4004", () =>
    console.log("server is running on port 4004")
);
