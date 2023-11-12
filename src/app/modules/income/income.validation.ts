import { z } from 'zod';

const add = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(3)
      .max(255),
    amount: z
      .number({
        required_error: 'Amount is required',
      })
      .positive(),
    category: z
      .string({
        required_error: 'Category is required',
      })
      .min(3)
      .max(255),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .min(3)
      .max(255),
    date: z
      .string({
        required_error: 'Date is required',
      })
      .min(3)
      .max(255),
  }),
});

export const IncomeValidation = {
  add,
};
