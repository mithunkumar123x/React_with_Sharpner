import React , {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from "./ExpensesChart";


import ExpenseFilter from "./ExpenseFilter";



const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState("2023");



  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear; 
    });

   

  return (
    <div>
    <Card className="expenses">

      <ExpenseFilter 
      selected = {filteredYear} 
      onChangeFilter = {filterChangeHandler} 
      />
      <ExpenseChart expenses = {filteredExpense} />
      <ExpensesList items = {filteredExpense} />

   </Card>   
 </div>
  );
}

export default Expenses;