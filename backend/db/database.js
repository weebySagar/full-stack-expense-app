const {Sequelize} = require('sequelize');

const db = new  Sequelize('expense-app','root','root',{dialect:'mysql',host:'127.0.0.1',port:'3306',ssl:false});

module.exports = db;