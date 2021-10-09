import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem item={props.expensesList[0]}></ExpenseItem>
      <ExpenseItem item={props.expensesList[1]}></ExpenseItem>
      <ExpenseItem item={props.expensesList[2]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
