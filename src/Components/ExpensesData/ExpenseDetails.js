import React, { useState } from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const [amount, setAmount] = useState(props.amount);
  const clickHandler1 = () => {
    setAmount('$100');
    console.log(amount);
  };

  return (
    <div className="expense-item__description">
      <h3>
        Spent on purchasing {title} in {props.location}
      </h3>
      <div className="expense-item__price"> {amount}</div>
      <button onClick={clickHandler}>Edit Title</button>
      <button onClick={clickHandler1}>Update Expense</button>
    </div>
  );
};
export default ExpenseDetails;
