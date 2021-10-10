import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expensesList.map((item) => (
        <React.Fragment key={item.id}>
          <ExpenseItem item={item}></ExpenseItem>
        </React.Fragment>
      ))}
    </Card>
  );
};

export default Expenses;
