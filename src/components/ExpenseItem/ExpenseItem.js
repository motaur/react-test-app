import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);
  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__amount">{props.item.amount} $</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
    </Card>
  );
};

export default ExpenseItem;
