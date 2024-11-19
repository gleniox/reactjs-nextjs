import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const ExpenseRow = ({ expense }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.expense, expense)}>
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
