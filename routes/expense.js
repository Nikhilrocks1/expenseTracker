const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/user/add-expense', expenseController.addExpense);

router.get('/user/get-expenses', expenseController.getExpense);

router.delete('/user/delete-expense/:id', expenseController.deleteExpense);


module.exports = router;