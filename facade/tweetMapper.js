/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getAllTweets(db){
    return db.collection('tweets').find({}).toArray();
}
function getAllTweetsCount(db){
    return db.collection('tweets').aggregate([{ $group : { _id : "$id", }, $group : {_id : 0,count: { $sum: 1 }}}]).toArray();

}
module.exports = {
    getAllTweetsCount:getAllTweetsCount,
    getAllTweets:getAllTweets
};