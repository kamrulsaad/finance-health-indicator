import express from 'express';
import { IncomeRoutes } from '../modules/income/income.routes';
import { ExpenseRoutes } from '../modules/expense/expense.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/income',
    routes: IncomeRoutes,
  },
  {
    path: '/expense',
    routes: ExpenseRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
