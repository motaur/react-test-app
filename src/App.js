import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const App = () => {
  const expensesMockData = [
    {
      id: "e1",
      date: new Date(2021, 2, 28),
      title: "Insurance",
      price: 294.27,
    },
    {
      id: "e2",
      date: new Date(2021, 4, 29),
      title: "TV",
      price: 300,
    },
    {
      id: "e3",
      date: new Date(2000, 2, 5),
      title: "Car",
      price: 1,
    },
  ];

  const [expenses, setExpenses] = useState(expensesMockData);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    let expList = expenses;
    expList.push(expense);
    setExpenses(expList);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;
