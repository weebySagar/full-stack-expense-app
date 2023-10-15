const express = require('express');
const router = express.Router();

const {authenticate,isPremium} = require('../auth/authenticate')

const expenseController = require('../controllers/expense-controller');

router.post('/addExpense',authenticate,expenseController.addExpense);

router.get('/getAllExpenses',authenticate,expenseController.getAllExpenses)

router.delete('/:id',authenticate,expenseController.deleteExpense);

router.get('/weeklydata',isPremium,expenseController.getWeeklyExpenseData);

router.get('/monthlydata',isPremium,expenseController.getMonthlyExpenseData);

module.exports = router