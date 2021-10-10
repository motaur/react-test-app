import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expensesList.map((item) => (
        <React.Fragment key={item.id}>
          <ExpenseItem item={item}></ExpenseItem>
        </React.Fragment>
      ))}
    </Card>
  );
};

export default Expenses;
