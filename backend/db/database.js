const {Sequelize} = require('sequelize');
require('dotenv').config();

const db = new  Sequelize(
    process.env.SQL_DATABASE_NAME,
    process.env.SQL_USERNAME,
    process.env.SQL_PASSWORD,
    {
        dialect:'mysql',
        host:process.env.SQL_HOST,
        port:process.env.SQL_PORT,
        ssl:false
    });

module.exports = db;