const { init } = require('express/lib/application');
const { type } = require('express/lib/response');
const mySql = require('mysql');

function initializeDB(){

    const db = mySql.createConnection({
        host      : 'localhost',
        user      : 'root',
        password  : 'dbPass',
        database  : 'dbName'
    });

    return db;

}

module.exports.initializeDB = initializeDB;
