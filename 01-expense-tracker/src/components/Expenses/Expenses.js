import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Expenses.js: " + selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* setState는 비동기적으로 일어나므로 state 즉각적으로 표시해주려면 selected와 같은 prop 추가해야함 */}
                <ExpenseItem expense={props.items[0]} />
                <ExpenseItem expense={props.items[1]} />
                <ExpenseItem expense={props.items[2]} />
            </Card>
        </div>
    );
};

export default Expenses;
