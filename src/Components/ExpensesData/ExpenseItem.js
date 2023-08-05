import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem=(props)=> {
  const ClickHandler= ()=>{
    console.log('clicked!!!')
  }
  return (
   
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={ClickHandler}>Delete Expenses</button>
    </Card>
    
  );
}
export default ExpenseItem;
