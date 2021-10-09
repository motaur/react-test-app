import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      date: new Date(2021, 2, 28),
      title: "Insurance",
      price: 294.27,
    },
    {
      date: new Date(2021, 4, 29),
      title: "TV",
      price: 300,
    },
    {
      date: new Date(2000, 2, 5),
      title: "Car",
      price: 1,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;
