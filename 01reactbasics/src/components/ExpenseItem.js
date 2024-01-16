import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2024, 1, 16);
    const expenseTitle = 'Petrol';
    const expenseAmount = 100;
    const LocationOfExpenditure = ["Resturant","Fuel" ,"Cinema hall" ]; 

    return (
        <div className="expense-item">
            <div>
                <h1>Expense Items</h1>
            </div>
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item_description">
                <h2>Food</h2>
                <div className="expense-item-price">Rs 10</div>
                <div>Location: {LocationOfExpenditure[0]}</div> 
            </div>
            <div className="expense-item_description">
                <h2>Petrol</h2>
                <div className="expense-item-price">Rs 100</div>
                <div>Location: {LocationOfExpenditure[1]}</div> 
            </div>
            <div className="expense-item_description">
                <h2>Movies</h2>
                <div className="expense-item-price">Rs 200</div>
                <div>Location: {LocationOfExpenditure[2]}</div> 
            </div>
        </div>
    );
}

export default ExpenseItem;
