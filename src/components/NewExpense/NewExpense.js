import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onCancelHandler = () => {
    setShowForm(false);
  };

  const onShow = () => {
    setShowForm(true);
  };

  if (showForm)
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      </div>
    );
  else
    return (
      <div className="new-expense">
        <button onClick={onShow}>Add New Item</button>
      </div>
    );
};

export default NewExpense;
