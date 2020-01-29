var orm = require('../config/orm.js');

var songs = {
    all: function(cb) {
        orm.all("song", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("song", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("song", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = songs;