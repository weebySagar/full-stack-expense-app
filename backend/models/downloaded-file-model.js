const Sequelize = require('sequelize');

const db = require('../db/database');

const DownloadedFile = db.define('downloadedFile',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    fileUrl:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty:true}
    },
   
})

module.exports = DownloadedFile