var express = require('express');
var countNums = require("../count");

var router = express.Router();
/* GET '/count' router */
router.get('/', function(req, res, next) {
    if (req.query.array) {
        var array = req.query.array;
    } else {
        var err = new Error('wrong query. we only accept the key array');
        next(err);
    }

    var count = countNums(array);

    res.json(count);

    next();
});

module.exports = router;
