var express = require('express');
var router = express.Router();


var tweetMapper = require('./../facade/tweetMapper');

var db = require("./../facade/connector").connect("mongodb://localhost:27017/mydb");
/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("dasdasdasd")
    db.then(function (db) {
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data);
            res.render('index', {title: 'Express', results: JSON.stringify(data)});
        })


    })
});


router.get('/allcount', function (req, res, next) {

    db.then(function (db, err) {
        console.log(err)
        console.log("starting query");
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data);
            res.json(data[0].count);
        })
    }).catch(function (err) {
        console.log("eeeerrrorrrrr: " + err);
        res.text(err)
    })
});
router.get('/allcount2', function (req, res, next) {

    db.then(function (db, err) {
        console.log(err)
        console.log("starting query");
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data.length);
            res.json(data.count);
        })
    }).catch(function (err) {
        console.log("eeeerrrorrrrr: " + err);
        res.text(err)
    })
});

module.exports = router;
