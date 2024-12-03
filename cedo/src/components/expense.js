import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import { navigationContext } from "./app";
import Remarks from "./remarks";

const Expense = () => {
  const { param: expense } = useContext(navigationContext);
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">{expense.expenseType}</div>
        <div className="row">{expense.date}</div>
        <div className="row">{currencyFormatter.format(expense.price)}</div>
        <Remarks expense={expense} />
      </div>
    </div>
  );
};

export default Expense;
