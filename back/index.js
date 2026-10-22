const exrepess = require("express");
const moongoose = require("mongoose");

const app = exrepess();

app.get("/", (req, res) => {
    res.send("Hello World");
});


