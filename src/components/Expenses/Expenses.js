import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [list, setList] = useState(props.expensesList);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    let filteredList = props.expensesList.filter((item) => {
      return item.date.getFullYear() === parseInt(selectedYear);
    });
    setList(filteredList);
  };

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
