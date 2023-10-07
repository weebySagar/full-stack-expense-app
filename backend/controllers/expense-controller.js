const Expense = require('../models/expense-model');
const User = require('../models/user-model');
const sequelize = require('../db/database');

exports.addExpense=async(req,res)=>{
    const t = await sequelize.transaction()
    try {
        const userId = req.user.id;
        const expenseData = {...req.body,userId}
        const expense =await Expense.create(expenseData,{transaction:t});

        if(expense){
            await t.commit()
            res.status(201).send('Expense added successfully')
        }else{
            await t.rollback();
            res.status(400).send('Expense cannot added')
        }
    } catch (error) {
        await t.rollback()
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
    const t = await sequelize.transaction()
    try {
        const {id} = req.params;
        const expense = await Expense.findByPk(id)
        const user = await User.findByPk(req.user.id);
        
        const newTotalExpense = user.dataValues.totalExpense - expense.dataValues.amount;
        const response  = await Expense.destroy({where:{id:id},transaction:t});
        await User.update({totalExpense:newTotalExpense},{where:{id:req.user.id},transaction:t})
        

        
        if(response ==1){
            await t.commit();
            res.status(200).send('Deleted Successfully')

        }else{
            await t.rollback();
            res.status(404).send('Expense not found')
        }
       
    } catch (error) {
        await t.rollback();
        res.status(500).send(error)

    }
}