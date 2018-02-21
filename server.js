//Dependencies********************

var express = require("express");
var bodyParser = require("body-parser");

//********************************

var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing
var db = require("./models");

//Body-Parser*****************************

app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"))

//**************************************

//handlebars below*******
var exphbs = require("express-handlebars");
//************************ 

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/profile-api-routes")(app);


db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("App now listening on PORT:" + PORT);
  });
});