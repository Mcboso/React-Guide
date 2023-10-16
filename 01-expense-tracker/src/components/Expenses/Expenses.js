import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log("Expenses.js: " + selectedYear);
        // console.log(props.items.filter((expense)=>expense.date.getFullYear().toString() === filteredYear));
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {/* setState는 비동기적으로 일어나므로 state 즉각적으로 표시해주려면 selected와 같은 prop 추가해야함 */}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found</p>
                ) : (
                    filteredExpenses.map((expenseInfo) => (
                        <ExpenseItem
                            key={expenseInfo.id}
                            expense={expenseInfo}
                        />
                    ))
                )} */}
                {/* 삼항연산자 대신 && 이용해서 조건부 내용 출력*/}
                {/* {filteredExpenses.length === 0 && expensesContent}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expenseInfo) => (
                        <ExpenseItem
                            key={expenseInfo.id}
                            expense={expenseInfo}
                        />
                    ))} */}
                     <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesList item={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
