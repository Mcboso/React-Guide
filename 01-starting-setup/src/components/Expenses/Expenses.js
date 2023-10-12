import "./Expenses.css";
import Card from "../UI/Card";  
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem expense = {props.items[0]} />
            <ExpenseItem expense = {props.items[1]} />
            <ExpenseItem expense = {props.items[2]} />
        </Card>
    )
}

export default Expenses;