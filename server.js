//Dependencies********************

var express = require("express");
var bodyParser = require("body-parser");

//********************************

var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing
var db = require("./models");

//Body-Parser*****************************

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"))

//**************************************

//handlebars below*******
var exphbs = require("express-handlebars");
//************************ */

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);


db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function() {
  console.log("App now listening on PORT:" + PORT);
});
});

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "bootcamp",
//   database: "fuzbuz"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM fuzers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { fuzers });
//   });
// });

  




// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  