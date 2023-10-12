import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        { id: "1", title: "a", amount: 10, date: new Date(2008, 1, 2) },
        { id: "2", title: "b", amount: 20, date: new Date(2012, 3, 4) },
        { id: "3", title: "c", amount: 30, date: new Date(2016, 5, 6) },
    ];
    return (
        <div>
            <h2>Let's get started!!</h2>
            <Expenses items={expenses} />
        </div>
        
    );
}

export default App;
