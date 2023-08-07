import React from "react";
import "./ExpenseFilter.css";

const expenseFilter = (props) => {
  const dropdownHandeler=(event)=>{
    props.onChangeFilter(event.target.value);
  }
  return (
    <div>
      <label>Choose a year </label>
      <select id="Year" value={props.selected} onChange={dropdownHandeler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};
export default expenseFilter;
