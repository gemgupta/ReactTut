import React, { useState } from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!");
   
  // };
  // const [amount, setAmount] = useState(props.amount);
  // const clickHandler1 = () => {
  //   setAmount('$100');
   
  // };

  return (
    <div className="expense-item__description">
      <h3>
        Spent on purchasing {props.title} in {props.location}
      </h3>
      <div className="expense-item__price"> {props.amount}</div>
   
    </div>
  );
};
export default ExpenseDetails;
