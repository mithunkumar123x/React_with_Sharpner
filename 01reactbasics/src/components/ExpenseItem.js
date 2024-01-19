import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem(props) {
   const month = props.date.toLocaleString('en-US',{month : 'long'});
   const day = props.date.toLocaleString( 'en-US', { day: '2-digit' });
   const year = props.date.getFullYear();

    const LocationOfExpenditure = ["Resturant","Fuel" ,"Cinema hall" ]; 

    return ( 
        <div className="expense-item">
           
        
           <div><ExpenseDate date ={props.date} /> </div>
            <div className="expense-item_description">
              

                <h2>{props.title}</h2>
                <div className="expense-item-price" >${props.amount}</div>
                <div>Location: { LocationOfExpenditure[0] } </div> 
              
            </div>

            <div className="expense-item_description">
                <h2>{props.title[1]}</h2>
                <div className="expense-item-price">{props.amount[1]}</div>
                <div>Location: {LocationOfExpenditure[1]}</div> 
                <ExpenseDate date ={props.date} />
            </div>

            <div className="expense-item_description " >
                <h2>{props.title[2]}</h2>
                <div className="expense-item-price">{props.amount[2]}</div>
                <div>Location: {LocationOfExpenditure[2]}</div> 
                <ExpenseDate date ={props.date} />
            </div>
        </div>
    );
}

export default ExpenseItem;