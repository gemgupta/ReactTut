import "./ExpenseItem.css";
function ExpenseItem(props) {
    
  return (
    <div>
      <div className="expense-item">
        <h3>{props.date}</h3>
        <div className="expense-item__description">
          <h3>Spent on purchasing {props.title} in {props.location}</h3>
         
          <div className="expense-item__price"> {props.amount}</div>
        </div>
      </div>
    
      </div>
    
  );
}
export default ExpenseItem;
