const  Sequelize = require('sequelize');
const db = require('../db/database');
const User = require('./user-model');


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


Expense.afterCreate((expense,options)=>{
    const userId = expense.dataValues.userId;
    User.findByPk(userId).then((user)=>{
        const newTotalValues = +user.dataValues.totalExpense + +expense.dataValues.amount;
        user.update({totalExpense:newTotalValues})
    });
})
module.exports = Expense