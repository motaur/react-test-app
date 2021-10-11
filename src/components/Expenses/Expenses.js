import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const filterExpenses = (year, expensesList) => {
    return expensesList.filter((item) => {
      return item.date.getFullYear() === parseInt(year);
    });
  };
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let list = filterExpenses(filteredYear, props.expensesList);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {list.map((item) => (
        <ExpenseItem item={item} key={item.id}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
