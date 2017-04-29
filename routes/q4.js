var express = require('express');
var router = express.Router();


var tweetMapper = require('./../facade/querstion4');

var db = require("./../facade/connector").connect("mongodb://localhost:27017/mydb");
/* GET home page. */
router.get('/', function (req, res, next) {

    db.then(function (db) {
        tweetMapper.getMostActiveUsers(db).then(function (data) {
            console.log(data);
            res.render('MostActiveUsers', {title: 'Most active Twitter users', results: JSON.stringify(data)});
        })


    })
});


//api

router.get('/api', function (req, res, next) {

    db.then(function (db, err) {
        console.log(err)
        console.log("starting query");
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data);
            res.json(data);
        })
    }).catch(function (err) {
        throw err;
    })
});

module.exports = router;
