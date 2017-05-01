/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getMostActiveUsers(db){
    return db.collection('tweets').aggregate(
    		[
    			{ "$group": {"_id":"$user", "tweets":{ "$sum":1 } }},
    			{ "$sort": {"tweets": -1}},
    			{ "$limit" : 10 }
    			]).toArray();
}

module.exports = {
    getMostActiveUsers:getMostActiveUsers

};