import React from "react";

import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpenseList = props => {

    // let expenseContent = <p>No expenses Found.</p>

    if(props.items.length === 0) {
      return <h2 className='expenses-List_fallback'>Found no expenses.</h2>
    }
    else if (props.items.length === 1) {
        return <h2 className='expenses-List_fallback'>Only single Expense here. Please add more...</h2>
      }
    return <ul className="expenses-List">
     { props.items.map((expense) => (
        <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount} 
        date = {expense.date} 
        />
      )) }
    </ul>
};

export default ExpenseList;