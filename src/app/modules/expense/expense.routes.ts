import express from 'express';
import { ExpenseController } from './expense.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ExpenseValidation } from './expense.validation';
const router = express.Router();

router.get('/', ExpenseController.getExpenses);

router.post(
  '/',
  validateRequest(ExpenseValidation.add),
  ExpenseController.addExpense
);

router.delete('/:id', ExpenseController.deleteExpense);

export const ExpenseRoutes = router;
