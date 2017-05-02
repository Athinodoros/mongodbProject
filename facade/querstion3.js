/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getMostMentionedUsers(db){
    return db.collection('tweets').find({}).toArray(); //TODO: fix the query q3
}





module.exports = {
    getMostMentionedUsers:getMostMentionedUsers
};