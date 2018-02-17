var orm = require("../config/orm.js");

var fuzbuz = {
    all: function(cb) {
      orm.all("fuzers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("fuzers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("fuzers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("fuzers", condition, function(res) {
        cb(res);
      });
    }
  };


  module.exports = fuzbuz;
