import React from "react";
import { useState } from "react";
import "./NewExpense.css";
import AddForm from "./AddForm";
const NewExpense = (props) => {
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onGetData(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
         {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
       {isEditing && (
      <AddForm onSaveData={saveDataHandler} 
      onCancel={stopEditingHandler}
      />
      )}
    </div>
  );
};
export default NewExpense;
