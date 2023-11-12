import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { IncomeService } from './income.service';
import { Income } from '@prisma/client';

const addIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await IncomeService.addIncome(req.body);

  sendResponse<Income>(res, {
    statusCode: httpStatus.OK,
    message: 'Income added successfully',
    data: result,
    success: true,
  });
});

const getIncomes = catchAsync(async (req: Request, res: Response) => {
  const result = await IncomeService.getIncomes();

  sendResponse<Income[]>(res, {
    statusCode: httpStatus.OK,
    message: 'Incomes fetched successfully',
    data: result,
    success: true,
  });
});

const deleteIncome = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await IncomeService.deleteIncome(Number(id));

  sendResponse<Income>(res, {
    statusCode: httpStatus.OK,
    message: 'Income deleted successfully',
    data: result,
    success: true,
  });
});

export const IncomeController = {
  addIncome,
  getIncomes,
  deleteIncome,
};
