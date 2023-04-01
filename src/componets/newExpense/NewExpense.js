import React,{useState} from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseForm from "../newExpense/ExpenseForm.js";
import Filter from "../Filter.js";
import Card from '../UI/Card';
import ExpenseChart from '../Expenses/ExpenseChart.js'
import "./NewExpense";
function NewExpense(props){
    const [expenseList,filterExpenseList] = useState(props.expenses);
    const [year,changeYear] = useState(2023);
    const addExpense = (expense)=>{
        expense.date = new Date(expense.date);
        expense.id = Math.random().toString();
        expense.location = "hamlet";
        filterExpenseList([...props.expenses,expense])
        props.addExpense(expense);
      }
    const filter = (y)=>{
        if(year!=y){
            changeYear(y); 
            if(y=="All")filterExpenseList([...props.expenses]);
            else {
              const expenseList = props.expenses.filter(exp=>new Date(exp.date).getFullYear()==y)
              filterExpenseList(expenseList)
            } 
            
        }
    }
    const renderExpense = expenseList.map(exp=><ExpenseItem {...exp} key={exp.id}></ExpenseItem>)
    return (<Card  id={props.id}>
      <div className='new-expense'>
      <ExpenseForm addExpense={addExpense}></ExpenseForm>
      </div>
      <Filter filter={filter}/>
      <ExpenseChart expenses={expenseList} />
      {renderExpense.length===0 ? <h3>No expense available</h3> : renderExpense}
      {renderExpense.length===1 && <h3>Only single Expense here. Please add more...</h3>}
      </Card>)
}
export default NewExpense;