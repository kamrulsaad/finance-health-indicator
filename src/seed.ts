import prisma from './shared/prisma';

async function run() {
  try {
    await prisma.expense.createMany({
      data: [
        {
          title: 'Loan Repayment',
          amount: 2000,
          type: 'expense',
          date: '2023-11-01',
          category: 'loan',
          description: 'Repayment of a business loan',
        },
        {
          title: 'Accounts Payable Settlement',
          amount: 3500,
          type: 'expense',
          date: '2023-11-02',
          category: 'accounts payable',
          description: 'Settlement of outstanding accounts payable',
        },
        {
          title: 'Drawings Withdrawal',
          amount: 1000,
          type: 'expense',
          date: '2023-11-03',
          category: 'drawings',
          description: 'Withdrawal of funds for personal use',
        },
        {
          title: 'Equipment Purchase',
          amount: 6000,
          type: 'expense',
          date: '2023-11-04',
          category: 'expenses',
          description: 'Expense incurred for purchasing new equipment',
        },
        {
          title: 'Notes Payable Interest',
          amount: 800,
          type: 'expense',
          date: '2023-11-05',
          category: 'notes payable',
          description: 'Payment of interest on notes payable',
        },
        {
          title: 'Supplies Expense',
          amount: 300,
          type: 'expense',
          date: '2023-11-06',
          category: 'expenses',
          description: 'Expense related to office supplies',
        },
        {
          title: 'Rent Payment',
          amount: 1200,
          type: 'expense',
          date: '2023-11-07',
          category: 'expenses',
          description: 'Payment for office space rent',
        },
      ],
    });
    console.log('Seed successfull');
  } catch (error) {
    console.log(error);
  }
}

run();
