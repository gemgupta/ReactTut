import ExpenseItem from "./Components/ExpensesData/ExpenseItem";
import "./Components/ExpensesData/Expense.css";
import Card from "./Components/UI/card";
import ExpenseFilter from "./Components/ExpensesData/ExpenseFilter";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
let expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
    location: "New York",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
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
const App = () => {
  
  const [expenses1, setExpense] = useState(expenses);

  const getDataHandler = (newExpenseData) => {
    setExpense((prevExpense) => {
      return [newExpenseData, ...prevExpense];
    });
  };

  
    const [filteredYear, setFilteredYear] = useState('2021');
  
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = expenses1.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  
  return (
    <div>
      <NewExpense onGetData={getDataHandler} />
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear}
          onChangeFilter={filterChangeHandler}/>
        {filteredExpenses.map((item) => ( 
          <ExpenseItem
          key={item.id}
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
