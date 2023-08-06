import ExpenseItem from "./Components/ExpensesData/ExpenseItem";
import "./Components/ExpensesData/Expense.css";
import Card from "./Components/UI/card";
import ExpenseFilter from "./Components/ExpensesData/ExpenseFilter";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
      location: "New York",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
      location: "Dubai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
      location: "Menchester",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
      location: "Bangkok",
    },
  ];
  const [expenses1, setExpense] = useState(expenses);

  const getDataHandler = (newExpenseData) => {
    console.log(newExpenseData);
    setExpense((prevExpense) => {
      return [newExpenseData, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onGetData={getDataHandler} />
      <Card className="expenses">
        <ExpenseFilter/>
        {expenses1.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        ))}
      </Card>
    </div>
  );
};

export default App;
