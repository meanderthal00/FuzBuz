// requiring path to see where files are located for routing

var path = require("path");
var express = require("express");

//creating endpoints for dissplay

module.exports = function (app) {
    app.get("/", function (req, res) {
        
        res.render("index");
    });


    app.get("/profile", function (req, res) {

        res.render("create");

    });

    app.get("/doodle", function (req, res) {

        res.render("doodle");

    });

    app.use(express.static(path.join(__dirname, '/public')));
};