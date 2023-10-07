const Expense = require('../models/expense-model');
const User = require('../models/user-model');
const Sequelize = require('sequelize');

exports.getLeaderboard=async(req,res)=>{
try {
    
        const userExpense = await Expense.findAll({
            attributes:[
                [Sequelize.fn('SUM',Sequelize.col('amount')),'totalExpense'],
                
            ],
            group:['userId'],
            order:[[Sequelize.literal('totalExpense DESC')]],
            include:[
                {
                    model:User,
                    attributes:['id','name']
                }
            ]
        })

        
    
    res.status(200).send(userExpense)
} catch (error) {
    res.status(500).send('Internal server error')
}
}