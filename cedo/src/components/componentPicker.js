import navValues from "../helpers/navValues";
import Expense from "./expense";
import ExpensesList from "./expensesList";

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <ExpensesList />;
    case navValues.expense:
      return <Expense />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;
