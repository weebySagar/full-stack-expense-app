const Expense = require('../models/expense-model');
const User = require('../models/user-model');
const Sequelize = require('sequelize');

exports.getLeaderboard=async(req,res)=>{
try {

        const userExpense = await User.findAll({
            attributes:['id','name',[Sequelize.fn('sum',Sequelize.col('expenses.amount')),'totalExpense']],
            include:[
                {
                    model:Expense,
                    attributes:[],
                }
            ],
            group:['user.id'],
            order:[[Sequelize.literal('totalExpense DESC')]]
        })
       

        
    
    res.status(200).send(userExpense)
} catch (error) {
    res.status(500).send('Internal server error')
}
}