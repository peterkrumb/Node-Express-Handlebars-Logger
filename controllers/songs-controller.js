var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var songs = require("../models/songs.js");

router.get("/", function(req, res) {
    songs.all(function(data) {
        var hbsObject = {
            songs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/songs", function(req, res) {
    songs.create([
        "choice", "listened"
    ], [
        req.body.choice, false
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/songs/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    songs.update({
        listened: req.body.listened
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//<--Export routes for server.js to use-->
module.exports = router;