// requiring path to see where files are located for routing

var path = require("path");

//creating endpoints for dissplay

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"));
    });

    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/profiletest.html"));
    });
};