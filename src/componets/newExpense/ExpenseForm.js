import React, { useState } from "react";

function ExpenseForm(props){
    const handleClick = (event)=>{

    }
    // const [formData, changeFormData] = useState({})
    const handleChange= (e)=>{
        // changeFormData({[e.target.name]:e.target.value})
        console.log(e.target.value);
    }
    return (<div>
        <form>
            <div>
                <div>
                <label htmlFor="title">Title</label> <br></br>
                <input onChange={handleChange} type="text" name="title" id="title"/>
                </div>
                
                <div>
                <label htmlFor="amount">Amount</label><br></br>
                <input onChange={handleChange} type="number" name="amount" id="amount"/>
                </div>
                
                <div>
                <label htmlFor="date">Date</label><br></br>
                <input onChange={handleChange} type="date" name="date" id="date"/>
                </div>
                

                
                <button onClick={handleClick}>Submit</button>

            </div>
        </form>
    </div>)
}

export default  ExpenseForm;