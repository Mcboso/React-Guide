import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    { id: "1", title: "a", amount: 10, date: new Date(2019, 1, 2) },
    { id: "2", title: "b", amount: 20, date: new Date(2020, 3, 4) },
    { id: "3", title: "c", amount: 30, date: new Date(2021, 5, 6) },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prev) => [expense, ...prev]);
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
