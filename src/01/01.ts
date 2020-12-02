import { puzzleInputToArray } from "../utils";

const sortExpensesTwice = (input: string) => {
  const expenses = puzzleInputToArray(input);

  let total: number;

  expenses.forEach((expense: string) => {
    expenses.forEach((nextExpense: string) => {
      const firstExpense = parseInt(expense);
      const secondExpense = parseInt(nextExpense);

      if (firstExpense + secondExpense === 2020) {
        total = firstExpense * secondExpense;
      }
    });
  });
  return total;
};

const sortExpensesThrice = (input: string) => {
  const expenses = input.split("\n");

  let total: number;

  expenses.forEach((expense: string) => {
    expenses.forEach((nextExpense: string) => {
      expenses.forEach((nexterExpense: string) => {
        const firstExpense = parseInt(expense);
        const secondExpense = parseInt(nextExpense);
        const thirdExpense = parseInt(nexterExpense);

        if (firstExpense + secondExpense + thirdExpense === 2020) {
          total = firstExpense * secondExpense * thirdExpense;
        }
      });
    });
  });

  return total;
};

export { sortExpensesTwice, sortExpensesThrice };
