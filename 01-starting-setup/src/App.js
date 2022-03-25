import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 111.22,
      date: new Date(2022, 2, 25),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 222.22,
      date: new Date(2022, 2, 25),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 333.22,
      date: new Date(2022, 2, 25),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 444.22,
      date: new Date(2022, 2, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expense.map((i) => {
        return <ExpenseItem
          id={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />;
      })}
    </div>
  );
}

export default App;
