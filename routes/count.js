var express = require('express');
var router = express.Router();

/* GET '/count' router */
router.get('/', function(req, res, next) {
    var arrar = rew.query.array;

    console.log(array);
    res.json({'array': array});

    next();
});

module.exports = router;
