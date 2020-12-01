const is2020 = (a, b) => {
	return a + b === 2020;
};

const sortExpenses = (input) => {
	const expenses = input.split("\n");

	let total;

	expenses.forEach((expense) => {
		expenses.forEach((nextExpense) => {
			expenses.forEach((nexterExpense) => {
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

export { is2020, sortExpenses };
