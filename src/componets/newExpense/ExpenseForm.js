import React, { useState } from "react";
import "./ExpenseForm.css"
function ExpenseForm(props){
    const handleClick = (event)=>{

    }
    const [formData, changeFormData] = useState({})
    const handleChange= (e)=>{
        changeFormData((st)=>{return {...st,[e.target.name]:e.target.value}})
        console.log(formData);
    }
    return (<div className="new-expense">
        <form>
            <div>
                <div className="new-expense__control">
                <label htmlFor="title">Title</label> <br></br>
                <input onChange={handleChange} type="text" name="title" id="title"/>
                </div>
                
                <div className="new-expense__control">
                <label htmlFor="amount">Amount</label><br></br>
                <input onChange={handleChange} type="number" name="amount" id="amount"/>
                </div>
                
                <div className="new-expense__control">
                <label htmlFor="date">Date</label><br></br>
                <input onChange={handleChange} type="date" name="date" id="date"/>
                </div>
                

                
                <button onClick={handleClick}>Submit</button>

            </div>
        </form>
    </div>)
}

export default  ExpenseForm;