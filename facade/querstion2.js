/**
 *
 * Created by Athinodoros on 4/29/2017.
 */



function getTwitterUsersLinkTheMost(db) {
    return db.tweets.aggregate( [     {$match: {text: { $regex: new RegExp(/(@)\w+/) } } },     {$group:{_id:"$user",count:{$sum: 1}}},     {$sort: {count : -1}},     {$limit: 10} ], {allowDiskUse: true}).toArray();
}



module.exports = {
    getTwitterUsersLinkTheMost:getTwitterUsersLinkTheMost
};