var db = require("../models");

module.exports = function(app) {
  app.get("/api/profile", function(req, res) {
    var query = {};
    if (req.query.profile_id){
      query.profileId = req.query.profile_id;
    }
    db.Profile.findAll({
      where: query,
      include: [db.post]
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

//   app.get("/api/authors/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

  app.post("/api/profile", function(req, res) {
    db.Profile.create(req.body).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

};
