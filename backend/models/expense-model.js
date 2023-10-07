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
    console.log('Hook triggered for expense ID:', expense.id);
    try {
      const user = await User.findByPk(expense.userId);
      console.log('Found user:', user);
      if (user) {
        const newTotalExpense = user.totalExpense - expense.amount;
        console.log('New totalExpense:', newTotalExpense);
        await user.update({ totalExpense: newTotalExpense }, options);
        console.log('User updated successfully');
      }
    } catch (error) {
      console.error('Error updating totalExpense after deleting expense:', error);
    }
  });

// Expense.beforeDestroy
module.exports = Expense