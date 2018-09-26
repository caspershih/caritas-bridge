var express = require("express");

var charityController = require("./charityController");

var router = express.Router();

// Get all charities (or optionally a specific charity with an id)
router.get("/saved", charityController.find);
// Create a new article using data passed in req.body
router.post("/saved", charityController.save);
// Delete a specific article using the id in req.params.id
router.delete("/saved", charityController.destroy);

module.exports = router;