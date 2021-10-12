import React, { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={list} />
      <ExpensesList list={list} />
    </Card>
  );
};

export default Expenses;
