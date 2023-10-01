const  Sequelize = require('sequelize');
const db = require('../db/database');


const Expense = db.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    date:{
        type:Sequelize.DATEONLY,
        allowNull:false,
        validate:{notEmpty:true}
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false,
        validate:{notEmpty:true}
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty:true}
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty:true}
    },
    paymentMethod:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{notEmpty:true}
    }
});

module.exports = Expense