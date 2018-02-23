// requiring path to see where files are located for routing

var path = require("path");
var express = require("express");

//creating endpoints for dissplay

module.exports = function (app) {
    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/test.html"));
        res.render("index");
    });


    app.get("/profile", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/profiletest.html"));
        res.render("create");
    });

    app.use(express.static(path.join(__dirname, '/public')));
};