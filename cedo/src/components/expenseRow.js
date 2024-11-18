import currencyFormatter from "../helpers/currencyFormatter";

const ExpenseRow = ({ expense, selectedExpense }) => {
  return (
    <tr onClick={() => selectedExpense(expense)}>
      <td>{expense.expenseType}</td>
      <td>{expense.date}</td>
      {expense.price && (
        <td className={`${expense.price >= 50 ? "text-primary" : ""}`}>
          {currencyFormatter.format(expense.price)}
        </td>
      )}
    </tr>
  );
};

export default ExpenseRow;
