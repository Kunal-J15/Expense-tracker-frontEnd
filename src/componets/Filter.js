import React, { useState } from "react";

function Filter(props) {


    const handleClick = (e)=>{
        props.filter(e.target.value);
    }
    return (    <div className='expenses-filter'>
    <div className='expenses-filter__control'>
    <label>Filter by year</label>
                <select name="year" id="" onClick={handleClick}>
                <option value="All">All</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
    </div>)
}

export default Filter;