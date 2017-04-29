/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getMostActiveUsers(db){
    return db.collection('tweets').find({}).toArray();//TODO: fix the query q4
}

module.exports = {
    getMostActiveUsers:getMostActiveUsers

};