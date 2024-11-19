import loadingStatus from "@/helpers/loadingStatus";
import useExpenses from "../hooks/useExpenses";
import ExpenseRow from "./expenseRow";
import LoadingIndicator from "./loadingIndicator";

const ExpensesList = () => {
  const [expenses, setExpenses, loadingState] = useExpenses();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  const addExpense = () => {
    setExpenses([
      ...expenses,
      {
        id: 4,
        expenseType: "Ice Cream",
        date: "05/11/2024",
        price: 15.5,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">Current Expenses</h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addExpense}>
        Add
      </button>
    </>
  );
};

export default ExpensesList;
