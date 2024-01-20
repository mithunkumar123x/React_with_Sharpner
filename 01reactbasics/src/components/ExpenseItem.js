import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card' ;


function ExpenseItem(props) {


    const LocationOfExpenditure = ["Resturant","Fuel" ,"Cinema hall" ]; 

    return ( 
        <Card className="expense-item">
      {LocationOfExpenditure.map((location, index) => (
        <div key={index} className="expense-item_description">
          <ExpenseDate date={props.date} />
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
          <div>Location: {location}</div>
        </div>
      ))}
    </Card>
  );
}

export default ExpenseItem;