import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    date: new Date(2023, 2, 22),
    title: "Car Insurance",
    amount: 355.5,
    location: "Park Street",
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 5, 12),
    title: "Books",
    amount: 56.2,
    location: "Book Market",
  },
  {
    id: Math.random().toString(),
    date: new Date(2021, 3, 25),
    title: "Desk",
    amount: 425.5,
    location: "Karol Bagh",
  },
  {
    id: Math.random().toString(),
    date: new Date(2021, 4, 21),
    title: "I Pod",
    amount: 388.5,
    location: "Boring Road",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;