var express = require('express');
var router = express.Router();


var tweetMapper = require('./../facade/querstion1');

var db = require("./../facade/connector").connect("mongodb://localhost:27017/mydb");
/* GET home page. */
router.get('/', function (req, res, next) {

    db.then(function (db) {
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data);
            res.render('countAllUsers', {title: 'Count of distinct users', results: JSON.stringify(data)});
        })


    })
});



//api

router.get('/api', function (req, res, next) {

    db.then(function (db,err) {
        console.log(err)
            console.log("starting query");
        tweetMapper.getAllTweetsCount(db).then(function (data) {
            console.log(data);
            res.json( data );
        })
    }).catch(function (err) {
        throw err;
    })
});

module.exports = router;
