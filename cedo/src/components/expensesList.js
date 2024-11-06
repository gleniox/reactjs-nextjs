import React, { useState } from "react";
import ExpenseRow from "./expenseRow";

const expensesArray = [
  {
    id: 1,
    expenseType: "Dinner",
    date: "31/10/2024",
    price: 49.4,
  },
  {
    id: 2,
    expenseType: "Parking",
    date: "31/10/2024",
    price: 25,
  },
];

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(expensesArray);
  const addExpense = () => {
    setExpenses([
      ...expenses,
      {
        id: 3,
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
      <button className="btn btn-primary" onClick={addExpense}>Add</button>
    </>
  );
};

export default ExpensesList;
