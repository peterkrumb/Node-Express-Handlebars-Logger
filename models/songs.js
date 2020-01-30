var orm = require('../config/orm.js');

var songs = {
    all: function(cb) {
        orm.all("songs", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("songs", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("songs", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = songs;