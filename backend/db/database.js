const {Sequelize} = require('sequelize');

const db = new  Sequelize('expense-app','root','admin',{dialect:'mysql',host:'127.0.0.1',port:'5000',ssl:false});

module.exports = db;