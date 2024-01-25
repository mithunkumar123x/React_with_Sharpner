import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {

  let title = '';
  let amount = '';
  let date = '';
   
  // const [enteredTitle , setEnteredTitle ] = useState('');
  // const [enteredAmount , setEnteredAmount] = useState('');
  // const [enteredDate , setEnteredDate ] = useState('');  

  const [userInput , setUserInput] = useState( {
    enteredTitle : '',
    enteredAmount : '',
    enteredDate : ''
  });



  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
       console.log(event.target.value);
  }

  const amountChangeHandler = (event) => {
  //  // setEnteredAmount(event.target.value);
  //  setUserInput({
  //   ...userInput,
  //   enteredAmount: event.target.value,
  // });
  setUserInput((prevState) => {
    return { ...prevState, enteredAmount: event.target.value };
  });
    console.log(event.target.value);
  }

  const dateChangeHandler = (event) => {
   // setEnteredDate(event.target.value);
  //  setUserInput({
  //   ...userInput,
  //   enteredDate: event.target.value,
  // });
  setUserInput((prevState) => {
    return { ...prevState, enteredDate: event.target.value };
  });
    console.log(event.target.value);
  }

  const locationChangeHandler = (event) => {
    console.log(event.target.value);
  }

  const submitHandler = (event) => {
     event.preventDefault();

     const expenseData = {
      title : userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
     };

     console.log(expenseData);
    
     setUserInput({
      enteredTitle: '',
      enteredAmount : '',
      enteredDate : ''
     });
  };

    return(
        < form  onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                   <label>Expense  title : </label>
                   <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                   <label>Expense Amount : </label>
                   <input type="text" min="0.01" step= "0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                   <label>Date :   </label>
                   <input type="text" min="2019-01-01" step= "2024-01-24" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense_control">
                   <label>LocalExpenditure :  </label>
                   <input type="text" onChange={locationChangeHandler} />
                </div>
            </div>
           
            <div className = 'new-expense_actions' >
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
};

export default ExpenseForm;
