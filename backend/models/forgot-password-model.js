const Sequelize = require('sequelize');

const db = require('../db/database');

const FPG = db.define('forgotPasswordRequest',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate:{notEmpty:true}
    },
    isActive:{
        type:Sequelize.BOOLEAN,
        allowNull:false,

    }
})

module.exports = FPG