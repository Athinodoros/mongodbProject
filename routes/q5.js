var express = require('express');
var router = express.Router();


var tweetMapper = require('./../facade/querstion5');

var db = require("./../facade/connector").connect("mongodb://localhost:27017/mydb");
/* GET home page. */
router.get('/', function (req, res, next) {

    db.then(function (db) {
        tweetMapper.getMostHappyAndGrumpyUsers(db).then(function (data) {
            console.log(data);
            res.render('MostHappyAndGrumpyUsers', {
                title: 'Five most grumpy and the most happy users',
                results: JSON.stringify(data)
            });
        })


    })
})

//api plain call

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
