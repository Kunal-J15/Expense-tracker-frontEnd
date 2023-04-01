import React, { useState } from "react";
import "./ExpenseForm.css"
function ExpenseForm(props){
    const [cliked,togleClicked] = useState(0);
    const handleSubmit = (e)=>{
        e.preventDefault();
        togleClick();
        console.log(formData);
        props.addExpense(formData);
        changeFormData({title:'',amount:'',date:''});
    }
    const [formData, changeFormData] = useState({title:'',amount:'',date:''})
    const handleChange= (e)=>{
        changeFormData((st)=>{return {...st,[e.target.name]:e.target.value}})
        console.log(formData);
    }

    const togleClick = ()=>{
        togleClicked(st=>!st);
    }
    return (<div className="new-expense">
            {cliked ? <form onSubmit={handleSubmit}>
            <div>
                <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input  type="text" name="title" id="title" value={formData.title} onChange={handleChange}/>
                </div>
                
                <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input onChange={handleChange} type="number" name="amount" id="amount" value={formData.amount}/>
                </div>
                
                <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input onChange={handleChange} type="date" name="date" id="date" value={formData.date}/>
                </div> 
                <br></br>
                <button onClick={togleClick} type="button">Cancel</button>
                <button >Submit</button>

            </div>
        </form>:<button onClick={togleClick}>Add expense</button>}
    </div>)
}

export default  ExpenseForm;