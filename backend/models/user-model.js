const Sequelize = require('sequelize');

const db = require('../db/database');

const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty:true}
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{isEmail:true}
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    premiumUser:{
        type:Sequelize.BOOLEAN,
        allowNull:true,
        defaultValue:false
    }
})

module.exports = User