/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getTwitterUsersLinkTheMost(db) {
    return db.collection('tweets').find({}).toArray();//TODO: fix the query q2
}
module.exports = {
    getTwitterUsersLinkTheMost:getTwitterUsersLinkTheMost
};