/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getMostHappyAndGrumpyUsers(db){
    return db.collection('tweets').find({}).toArray(); //TODO: fix the query q5
}

module.exports = {
    getMostHappyAndGrumpyUsers:getMostHappyAndGrumpyUsers
};