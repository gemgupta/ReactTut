import React from "react";
import "./AddForm.css";
const AddForm = () => {
    const addFormHandler =(event)=>{
console.log(event.target.value)
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={addFormHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={addFormHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" onChange={addFormHandler} />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input type="text" onChange={addFormHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default AddForm;
