
// Calculates the total income for a given month
export const sumIncome = month => month.income.reduce((a, b) => a.amount || a + b.amount, 0);

// Calculates the total expenses for a given month or day
export const sumExpenses = monthOrDay => monthOrDay.expenses.reduce((a, b) => a.cost || a + b.cost, 0);

// Calculates the daily allowance each day of the month
export const dailyAllowance = month => Math.round((sumIncome(month) - sumExpenses(month)) / month.days.length * 100) / 100;

// Utility
const totalExpensesReducer = (a, b) => (a.expenses === undefined ? a : sumExpenses(a)) + sumExpenses(b);

// Calculates the total expenses accrued in a given month
export const totalExpenses = month => month.days.reduce(totalExpensesReducer, 0);

// Calculates the net allowance until a given day in a month
export const netAllowance = (month, day) => {
  const allowance = dailyAllowance(month);
  return month.days.map(day => day).splice(0, day).reduce((a, b) => a + allowance - sumExpenses(b), 0);
};

