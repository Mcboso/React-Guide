import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if(props.item.length === 0) {
        return (<h2 className="expenses-list__fallback">Found no expenses.</h2>);
    }

    const  expensesContent = props.item.map((expenseInfo) => (
            <ExpenseItem key={expenseInfo.id} expense={expenseInfo} />
        ));

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
};

export default ExpensesList;
