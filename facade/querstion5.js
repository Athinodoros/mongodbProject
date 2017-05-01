/**
 *
 * Created by Athinodoros on 4/29/2017.
 */

function getMostGrumpyUsers(db){
	return db.collection('tweets').aggregate(
			[
				{$group: {_id: "$user", score: {$sum: "$polarity"}, count: {$sum: 1}}},
				{$project: {"_id": 1, "count": 1, score: 1, avg: {
				    $cond: { if: { $eq: [ "$score", 0 ] }, then: 0, else: {$divide: ["$count", "$score"]} } }}},
				{$sort: {"avg": 1, "count": -1}},
				{ "$limit" : 5 }
				],
				{allowDiskUse: true});
}


function getMostHappyUsers(db){
	return db.collection('tweets').aggregate(
			[
				{$group: {_id: "$user", score: {$sum: "$polarity"}, count: {$sum: 1}}},
				{$project: {"_id": 1, "count": 1, score: 1, avg: {
				    $cond: { if: { $eq: [ "$score", 0 ] }, then: 0, else: {$divide: ["$count", "$score"]} } }}},
				{$sort: {"avg": -1, "count": -1}},
				{ "$limit" : 5 }
				],
				{allowDiskUse: true});
}

module.exports = {
    getMostHappyUsers:getMostHappyUsers,
    getMostGrumpyUsers:getMostGrumpyUsers
};