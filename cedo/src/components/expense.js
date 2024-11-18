import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";

const Expense = ({ expense }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">{expense.expenseType}</div>
        <div className="row">{expense.date}</div>
        <div className="row">{currencyFormatter.format(expense.price)}</div>
      </div>
    </div>
  );
};

export default Expense;
