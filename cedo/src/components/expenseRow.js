import currencyFormatter from "../helpers/currencyFormatter"

const ExpenseRow = ({ expense }) => {
  return (
    <tr>
      <td>{expense.expenseType}</td>
      <td>{expense.date}</td>
      <td>{currencyFormatter.format(expense.price)}</td>
    </tr>
  );
};

export default ExpenseRow;
