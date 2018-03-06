var express = require('express');
var countNums = require("../count");

var router = express.Router();
/* GET '/count' router */
router.get('/', function(req, res, next) {
    if (req.query.array) {
        var array = req.query.array;

        var count = countNums(array);
        res.json(count);

        next();
    } else {
        var err = new Error('wrong query. we only accept the key array');
        err.status = 400
        next(err);
    }
});

module.exports = router;
