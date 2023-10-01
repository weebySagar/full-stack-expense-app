const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense-controller');

router.post('/addExpense',expenseController.addExpense);

router.get('/getAllExpenses',expenseController.getAllExpenses)

router.delete('/:id',expenseController.deleteExpense)

module.exports = router