import React from 'react';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: '  Chopstick',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      localExpenditure:"Pune"
    },
    { id: 'e2', 
    title: 'New TV',
     amount: 799.49,
      date: new Date(2021, 2, 12),
      localExpenditure:"Delhi" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      localExpenditure:"Mumbai"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      localExpenditure:"Banglore"
    },
    {
      id: 'e5',
      title: 'glass',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      localExpenditure:"Pune"
    },
    { id: 'e6', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    localExpenditure:"Delhi" },
    {
      id: 'e7',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      localExpenditure:"Mumbai"
    },
    {
      id: 'e8',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      localExpenditure:"Banglore"
    },
  ];

  return React.createElement(
    'div' ,
    {} ,
    React.createElement('h2', {} ,  "Expenses :" ),
    React.createElement(Expenses,{items: expenses})
  );
  // return (

 
  //   <div>
  //     <h2>Expenses :</h2>
  //     <Expenses items = {expenses} />
  //   </div>
  //   )
  }

export default App;