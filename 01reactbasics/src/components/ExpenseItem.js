import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item" >
            <div>
                <h1>Expense Items</h1>
            </div>
            <div className="expense-item_description">
                <h2>Food </h2>
                <div className="expense-item-price">Rs 10</div>
            </div>
            <div className="expense-item_description">
                <h2>Petrol</h2>
                <div className="expense-item-price">Rs 100</div>
            </div>
            <div className="expense-item_description">
                <h2>Movies</h2>
                <div className="expense-item-price">Rs 200</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
