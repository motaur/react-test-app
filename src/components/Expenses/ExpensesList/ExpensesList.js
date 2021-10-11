import ExpenseItem from "../../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const Expenses = (props) => {
  return (
    <>
      {props.list.length === 0 ? (
        <h3>No items to show</h3>
      ) : (
        props.list.map((item) => (
          <ExpenseItem item={item} key={item.id}></ExpenseItem>
        ))
      )}
    </>
  );
};

export default Expenses;
