import React, { useState } from "react";
import NewExpense from "./componets/newExpense/NewExpense"
function App() {
  const [expenses,updateExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"city",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:"hamlet" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"vilage",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"town",
    },
  ]);
  const addExpense = (expense)=>{
    updateExpenses(st=>[...st,expense]);
  }
   
  return (
    <div>
      <NewExpense expenses={expenses} addExpense={addExpense} />
    </div>
  );
}

export default App;
