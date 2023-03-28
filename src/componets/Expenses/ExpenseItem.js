import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
function ExpenseItem(props) {
  const handleClick = (evnt)=>{
     const expense = document.getElementById(props.id);
     expense.remove();
  }
  return (
    <Card className="expense-item" id={props.id}>
     <ExpenseDate date = {props.date}></ExpenseDate>
     <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
     <button onClick={handleClick}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;