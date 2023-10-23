import Header from "./Header/Header";
import InvestInput from "./InvestInput/InvestInput";
import { useState } from "react";
import Result from "./Result/Result";

function App() {
    const [isValid, setIsValid] = useState(false);
    const [input, setInput] = useState({
        "current-savings": "",
        "yearly-contribution": "",
        "expected-return": "",
        "duration": "",
    });

    const submitHandler = (userInput) => {
        console.log(userInput);
        setInput(userInput);
        setIsValid(true);
    };

    const resetHandler = () => {
        setIsValid(false);
    };

    return (
        <div>
            <Header/>
            <InvestInput onSubmit={submitHandler} onReset={resetHandler}/>
            <Result valid={isValid} input={input}/>
        </div>
    );
}

export default App;
