var express = require('express');
var countNums = require("../count");

var router = express.Router();
/* GET '/count' router */
router.get('/', function(req, res, next) {
    var array = req.query.array;
    var count = countNums(array);

    res.json(count);

    next();
});

module.exports = router;
