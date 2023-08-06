import React from "react";
import './NewExpense.css';
import AddForm from "./AddForm";
const NewExpense =(props)=>{
    const saveDataHandler=(enteredExpenseData)=>{
const expenseData ={
    ...enteredExpenseData, id: Math.random().toString()
}
props.onGetData(expenseData)
    }
return (
    <div className="new-expense">
       <AddForm onSaveData={saveDataHandler}/>
    </div>
);
}
export default NewExpense;