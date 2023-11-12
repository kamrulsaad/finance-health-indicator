import { Expense } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { convertToIsoDate } from '../../../shared/utils';

const addExpense = async (payload: Expense): Promise<Expense> => {
  const { date } = payload;

  payload.date = convertToIsoDate(date);

  const result = await prisma.expense.create({
    data: payload,
  });

  return result;
};

const getExpenses = async (): Promise<Expense[]> => {
  const result = await prisma.expense.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return result;
};

const deleteExpense = async (id: number): Promise<Expense> => {
  const result = await prisma.expense.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ExpenseService = {
  addExpense,
  getExpenses,
  deleteExpense,
};
