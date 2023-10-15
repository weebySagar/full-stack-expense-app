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
});

Expense.afterDestroy(async (expense, options) => {
    try {
      const user = await User.findByPk(expense.userId);
      if (user) {
        const newTotalExpense = user.totalExpense - expense.amount;
        await user.update({ totalExpense: newTotalExpense }, options);
      }
    } catch (error) {
      console.error('Error updating totalExpense after deleting expense:', error);
    }
  });

// Expense.beforeDestroy
module.exports = Expense