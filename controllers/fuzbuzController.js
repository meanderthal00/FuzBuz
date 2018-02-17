var express = require("express");

var router = express.Router();

var fuzbuz = require("../models/fuzbuz.js");


router.get("/", function(req, res) {
    fuzbuz.all(function(data) {
      var hbsObject = {
        fuzers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });





// Export routes for server.js to use.
module.exports = router;