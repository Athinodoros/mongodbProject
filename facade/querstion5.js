/**
 *
 * Created by Athinodoros on 4/29/2017.
 */

function getMostGrumpyUsers(db){
	return db.collection('tweets').aggregate([{ $match: {polarity:0 } },{ $group: { _id: '$user', count: {$sum: 1}}},{$sort: {count: -1} } , { $limit: 5 }]).toArray();




function getMostHappyUsers(db){
	return db.collection('tweets').aggregate([{ $match: {polarity:4 } },{ $group: { _id: '$user', count: {$sum: 1}}},{$sort: {count: -1} } , { $limit: 5 }]).toArray();

}

module.exports = {
    getMostHappyUsers:getMostHappyUsers,
    getMostGrumpyUsers:getMostGrumpyUsers
};