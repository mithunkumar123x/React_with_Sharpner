import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card' ;


function ExpenseItem(props){

// function clickHandler() {}

      const clickHandler =() => {
        console.log('clicked!!!');
      };

      const removeHandler =() => {
        console.log('delete!!')
      }
   
    return ( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
          <div className = "expense-item-location">{props.LocationOfExpenditure} </div>
        
        </div>
      <button onClick ={clickHandler} >Change Title</button>
      <button onClick = {removeHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;