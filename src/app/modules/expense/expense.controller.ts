import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { Expense } from '@prisma/client';
import { ExpenseService } from './expense.service';

const addExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await ExpenseService.addExpense(req.body);

  sendResponse<Expense>(res, {
    statusCode: httpStatus.OK,
    message: 'Expense added successfully',
    data: result,
    success: true,
  });
});

const getExpenses = catchAsync(async (req: Request, res: Response) => {
  const result = await ExpenseService.getExpenses();

  sendResponse<Expense[]>(res, {
    statusCode: httpStatus.OK,
    message: 'Expenses fetched successfully',
    data: result,
    success: true,
  });
});

const deleteExpense = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ExpenseService.deleteExpense(Number(id));

  sendResponse<Expense>(res, {
    statusCode: httpStatus.OK,
    message: 'Expense deleted successfully',
    data: result,
    success: true,
  });
});

export const ExpenseController = {
  addExpense,
  getExpenses,
  deleteExpense,
};
