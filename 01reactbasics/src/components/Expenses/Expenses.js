import React , {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

import ExpenseFilter from "./ExpenseFilter";



const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState("2023");



  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear; 
    });

    let expenseContent = <p>No expenses found. </p>

    if(filteredExpense.length > 0) {
      expenseContent = filteredExpense.map((expense) => (
        <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount} 
        date = {expense.date} 
        />
      ))
    }

  return (
    <div>
    <Card className="expenses">

      <ExpenseFilter 
      selected = {filteredYear} 
      onChangeFilter = {filterChangeHandler} 
      />
      {expenseContent}
      
   </Card>   
 </div>
  );
}

export default Expenses;