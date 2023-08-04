import "./ExpenseItem.css";
function ExpenseItem() {
    const expenseDate= new Date(2023,7,5);
    const expenseDesription= "Food";
    const expensePrice= 'Rs 10';
    const locationOfExpen= 'Delhi';
  return (
    <div>
      <div className="expense-item">
        <h3>{expenseDate.toISOString()}</h3>
        <div className="expense-item__description">
          <h3>{expenseDesription}</h3>
          <h3>{locationOfExpen}</h3>
          <div className="expense-item__price"> {expensePrice}</div>
        </div>
      </div>
    
      </div>
    
  );
}
export default ExpenseItem;
