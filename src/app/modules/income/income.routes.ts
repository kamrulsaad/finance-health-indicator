import express from 'express';
import { IncomeController } from './income.controller';
import validateRequest from '../../middlewares/validateRequest';
import { IncomeValidation } from './income.validation';
const router = express.Router();

router.get('/', IncomeController.getIncomes);

router.post(
  '/',
  validateRequest(IncomeValidation.add),
  IncomeController.addIncome
);

router.delete('/:id', IncomeController.deleteIncome);

export const IncomeRoutes = router;
