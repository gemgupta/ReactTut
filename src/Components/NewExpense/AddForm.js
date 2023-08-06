import React, { useState } from "react";
import "./AddForm.css";
const AddForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    enteredLocation: "",
  });
  //   const [enteredTitle, setEnteredTitle] = useState("");
  const addFormHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  //   const [enteredAmount, setEnteredAmount] = useState("");
  const addFormHandler1 = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(enteredAmount);
    setUserInput((prevState) => {
        return { ...prevState, enteredAmount: event.target.value };
      });
    
  };
  //   const [enteredDate, setenteredDate] = useState("");
  const addFormHandler2 = (event) => {
    // setenteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // console.log(enteredDate);
    setUserInput((prevState) => {
        return { ...prevState, enteredDate: event.target.value };
      });
  };
  //   const [enteredLocation, setenteredLocation] = useState("");
  const addFormHandler3 = (event) => {
    // setenteredLocation(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredLocation: event.target.value,
    // });
    // console.log(enteredLocation);
    setUserInput((prevState) => {
        return { ...prevState, enteredLocation: event.target.value };
      });
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
