//Dependencies********************

var express = require("express");
var bodyParser = require("body-parser");

//********************************

var app = express();
var PORT = process.env.PORT || 8080;


//Body-Parser*****************************

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"))

//**************************************
var routes = require("./routes/html-routes.js");

require("./routes/html-routes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  