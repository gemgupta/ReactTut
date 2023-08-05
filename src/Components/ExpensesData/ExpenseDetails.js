import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
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
