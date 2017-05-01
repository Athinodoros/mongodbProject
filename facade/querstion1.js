/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getAllTweets(db){
    return db.collection('tweets').distinct("user").length.toArray();
}

module.exports = {
    getAllTweets:getAllTweets
};