import React, { useState } from "react";
import "./AddForm.css";
const AddForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const addFormHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const addFormHandler1 = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const [enteredDate, setenteredDate] = useState("");
  const addFormHandler2 = (event) => {
    setenteredDate(event.target.value);
    console.log(enteredDate);
  };
  const [enteredLocation, setenteredLocation] = useState("");
  const addFormHandler3 = (event) => {
    setenteredLocation(event.target.value);
    console.log(enteredLocation);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={addFormHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={addFormHandler1}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={addFormHandler2}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input type="text" onChange={addFormHandler3} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default AddForm;
