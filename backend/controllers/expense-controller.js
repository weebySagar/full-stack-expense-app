const Expense = require('../models/expense-model');
const User = require('../models/user-model');

exports.addExpense=async(req,res)=>{
    try {
        const userId = req.user.id;
        const expenseData = {...req.body,userId}
        const expense =await Expense.create(expenseData);

        // User.update({totalExpense:})
    //    const updatedTotalExpense = await Expense.afterCreate(async(expense,options)=>{
    //         const userId = expense.dataValues.userId;
    //        const user =await User.findByPk(userId);
    //        const newTotalExpense = user.dataValues.totalExpense + expense.dataValues.amount;
    //        return user.update({totalExpense:newTotalExpense},options);
    //     })
    //     console.log(updatedTotalExpense);
        if(expense){

            res.status(201).send('Expense added successfully')
        }else{
            res.status(400).send('Expense cannot added')
        }
    } catch (error) {
        res.status(400).send(error.errors[0].message)
    }
}

exports.getAllExpenses = async(req,res)=>{
    try {
        const response =await Expense.findAll({where:{userId:req.user.id}});
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.errors[0].message)
    }
}

exports.deleteExpense = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const response  = await Expense.destroy({where:{id}});
        if(response ==1){
            res.status(200).send('Deleted Successfully')

        }else{
            res.status(404).send('Expense not found')
        }
       
    } catch (error) {
        res.status(500).send(error)

    }
}