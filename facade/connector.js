/**
 * Created by Athinodoros on 4/29/2017.
 */

var MongoClient = require('mongodb').MongoClient;

function connect(connectionString) {

  return  MongoClient.connect(connectionString);


}

module.exports = {
    connect: connect
}