import { useState } from "react";
import Banner from "./banner";
import ExpensesList from "./expensesList";
import Expense from "./expense";

const App = () => {
  const [selectedExpense, setSelectedExpense] = useState();

  return (
    <>
      <Banner currentYear="2024" />
      {selectedExpense ? (
        <Expense expense={selectedExpense} />
      ) : (
        <ExpensesList selectedExpense={setSelectedExpense} />
      )}
    </>
  );
};

export default App;
