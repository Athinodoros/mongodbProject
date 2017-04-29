var express = require('express');
var router = express.Router();



var db = require("./../facade/connector").connect("mongodb://localhost:27017/mydb");
/* GET home page. */
router.get('/', function (req, res, next) {

            res.render('index', {title: 'Hi there welcome to the MongoDB assignment! '});

});



module.exports = router;
