import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value.length);
    //     setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{ //이전 상태 기반으로 할 때는 setState에 함수 전달
    //     return {...prevState, enteredTitle: event.target.value };
    // });
    // };
    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
    // };
    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    // };

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setEnteredTitle(value);
        } else if (identifier === "amount") {
            setEnteredAmount(value);
        } else if (identifier === "date") {
            setEnteredDate(value);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={(event) => {
                            inputChangeHandler("title", event.target.value);
                        }}
                    />
                    {/* inputChangeHandler에 event 바로 전달 할 수 없으므로 */}
                    {/* value={enteredTitle}가 있어야 양방향 바인딩 가능 */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={(event) => {
                            inputChangeHandler("amount", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2000-01-01"
                        max="2024"
                        onChange={(event) => {
                            inputChangeHandler("date", event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
