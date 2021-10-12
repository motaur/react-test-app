import ExpenseItem from "../../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0)
    return <h2 className="expenses-list__fallback">No items to show</h2>;
  return (
    <ul className="expenses-list">
      {props.list.map((item) => (
        <ExpenseItem item={item} key={item.id}></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
