import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';
import Card from '../UI/Card'





function ExpenseItem(props){

// function clickHandler() {}

const [amount , setAmount] = useState(props.amount);

const [title, setTitle] = useState(props.title);
console.log('ExpenseItem evaluated by React');

     const changeAmountHandler = () => {
      setAmount(100);
      console.log('change amount!');
     }

      const clickHandler =() => {
        setTitle('Updated!')
        console.log(title);
      };

      const removeHandler =() => {
        console.log('delete!!')
      }
   
    return (  
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className="expense-item_description">
          <h2>{title}</h2>
          <div className="expense-item-price">${amount}</div>
          <div className = "expense-item-location">{props.LocationOfExpenditure} </div>
        
        </div>

      <button onClick={changeAmountHandler}>Change Amount</button>  
      <button onClick ={clickHandler} >Change Title</button>
      <button onClick = {removeHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;