import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
function ExpenseItem(props) {
  const [amount,setAmount] = useState(props.amount);
  const handleClick = (evnt)=>{
    setAmount(100);
  }
  return (
    <Card className="expense-item" id={props.id}>
     <ExpenseDate date = {props.date}></ExpenseDate>
     <ExpenseDetails amount={amount}  location={props.location}   title={props.title} />
     <button onClick={handleClick}>expense=100</button>
    </Card>
  );
}

export default ExpenseItem;