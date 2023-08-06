import React from "react";
import "./ExpenseFilter.css";

const expenseFilter = () => {
  return (
    <div>
      <label>Choose a year </label>
      <select name="Year" id="Year">
        <option value="Filter">Filter</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};
export default expenseFilter;
