import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const expensesMockData = [
  {
    id: "e1",
    date: new Date(2021, 2, 28),
    title: "Insurance",
    amount: 294.27,
  },
  {
    id: "e2",
    date: new Date(2021, 4, 29),
    title: "TV",
    amount: 300,
  },
  {
    id: "e3",
    date: new Date(2000, 2, 5),
    title: "Car",
    amount: 1,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesMockData);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;
