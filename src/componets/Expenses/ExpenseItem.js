import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [amount,setAmount] = useState(props.amount);
  const [title,setTitle] = useState(props.title);
  const handleClick = (evnt)=>{
    setAmount(100);
  }
  const handleTitle = (evnt)=>{
    setTitle("Updated");
  }
  return (
    <Card className="expense-item" id={props.id}>
     <ExpenseDate date = {props.date}></ExpenseDate>
     <ExpenseDetails amount={amount}  location={props.location}   title={title} />
     <button onClick={handleClick}>expense=100</button>
     <button onClick={handleTitle}>title</button>
    </Card>
  );
}

export default ExpenseItem;