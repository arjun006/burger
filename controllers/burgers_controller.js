var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;


  burger.updateOne({
    devoured: true
  }, condition, function(res) {
   res.redirect('/');
  });
});


module.exports = router;
