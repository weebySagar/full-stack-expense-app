const Expense = require("../models/expense-model");
const User = require("../models/user-model");
const sequelize = require("../db/database");
const { Op } = require("sequelize");

exports.addExpense = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const userId = req.user.id;
        const expenseData = { ...req.body, userId };
        const expense = await Expense.create(expenseData, { transaction: t });

        if (expense) {
            await t.commit();
            res.status(201).send("Expense added successfully");
        } else {
            await t.rollback();
            res.status(400).send("Expense cannot added");
        }
    } catch (error) {
        await t.rollback();
        res.status(400).send(error.errors[0].message);
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;
        const offset = (page - 1) * limit;
        const expenseCount = await Expense.count({where:{userId:req.user.id}});
        const totalPages = Math.ceil(expenseCount/limit)
        const response = await Expense.findAll({where: { userId: req.user.id },order:[['date','DESC']],limit:limit,offset:offset });
        if(response){

            res.status(200).send({expenses:response,totalPages});
        }
        else{
            res.status(400).send('No Expenses')
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};

exports.deleteExpense = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const { id } = req.params;
        const expense = await Expense.findByPk(id);
        const user = await User.findByPk(req.user.id);

        const newTotalExpense =
            user.dataValues.totalExpense - expense.dataValues.amount;
        const response = await Expense.destroy({
            where: { id: id },
            transaction: t,
        });
        await User.update(
            { totalExpense: newTotalExpense },
            { where: { id: req.user.id }, transaction: t }
        );

        if (response == 1) {
            await t.commit();
            res.status(200).send("Deleted Successfully");
        } else {
            await t.rollback();
            res.status(404).send("Expense not found");
        }
    } catch (error) {
        await t.rollback();
        res.status(500).send(error);
    }
};

exports.getWeeklyExpenseData = async (req, res,type) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;
        const offset = (page - 1) * limit;
        const startOfWeek = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() - (new Date().getDay() - 1)
        );
        const endOfWeek = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + (7 - new Date().getDay())
        );
        const expenseCount = await Expense.count({where:{
            date: {
                [Op.between]:[startOfWeek,endOfWeek]
            },
            userId:req.user.id}});
            const totalPages = Math.ceil(expenseCount/limit)

        const expensesThisWeek = await Expense.findAll({
            where: {
                date: {
                    [Op.between]: [startOfWeek, endOfWeek],
                },
                userId: req.user.id,

            },
            order: [["date"]],
            limit:limit,
            offset:offset
        });

        
        const totalExpenseThisWeek = await Expense.findAll({
             attributes: [[sequelize.fn('SUM', sequelize.col('amount')), 'totalExpense']],
            where: {
                date: {
                    [Op.between]: [startOfWeek, endOfWeek],
                },
                userId: req.user.id,
            }
        });
        if(typeof type != "string"){
            res.status(200).send({expensesThisWeek,totalExpenseThisWeek,totalPages});
       }
       else{
           return ({expensesThisWeek,totalExpenseThisWeek});

       }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};

exports.getMonthlyExpenseData = async (req, res,type) => {
    const user = req.user;
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const offset = (page - 1) * limit;
    const month = new Date().getMonth() + 1 > 12 ? 1 : new Date().getMonth() + 1;
    
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    try {
        const expenseCount = await Expense.count({where:{
            date: {
                [Op.between]:[firstDayOfMonth,lastDayOfMonth]
            },
            userId:req.user.id}});
            const totalPages = Math.ceil(expenseCount/limit)

        const expensesThisMonth = await Expense.findAll({
            where: {
                userId: user.id,
                $and: sequelize.where(
                    sequelize.fn("month", sequelize.col("date")),
                    month
                ),
            },
            order: [["date"]],
            limit:limit,
            offset:offset
        });
        const totalExpenseThisMonth =await Expense.findAll({
            attributes:[ [sequelize.fn('sum',sequelize.col('amount')),'totalExpense']],

            where: {
                userId: user.id,
                $and: sequelize.where(
                    sequelize.fn("month", sequelize.col("date")),
                    month
                ),
                date:{
                    [Op.between]:[firstDayOfMonth,lastDayOfMonth]

                }
            },
            // order: [["date"]],
            // limit:limit,
            // offset:offset
        });
        if(typeof type != "string"){
             res.status(200).send({expensesThisMonth,totalExpenseThisMonth,totalPages});
        }
        else{
            return ({expensesThisMonth,totalExpenseThisMonth});

        }
        // if (expensesThisMonth.length > 0) {
        // } else {
        //     res.status(200).send("No expense found");
        // }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};
