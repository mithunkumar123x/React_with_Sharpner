import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card' ;


function ExpenseItem(props){


    const LocationOfExpenditure = ["Resturant","Fuel" ,"Cinema hall" ]; 
     console.log(props);
    return ( 
        <Card className="expense-item">

     
          
        <div className="expense-item_description">
       
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
          <div className = ""> </div>
          <ExpenseDate date={props.date} />
        </div>
      
    </Card>
  );
}

export default ExpenseItem;