import { Income } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { convertToIsoDate } from '../../../shared/utils';

const addIncome = async (payload: Income): Promise<Income> => {
  const { date } = payload;

  payload.date = convertToIsoDate(date);

  const result = await prisma.income.create({
    data: payload,
  });

  return result;
};

const getIncomes = async (): Promise<Income[]> => {
  const result = await prisma.income.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return result;
};

const deleteIncome = async (id: number): Promise<Income> => {
  const result = await prisma.income.delete({
    where: {
      id,
    },
  });
  return result;
};

export const IncomeService = {
  addIncome,
  getIncomes,
  deleteIncome,
};
