import { useState } from "react";
import styles from "./InvestInput.module.css";

const InvestInput = (props) => {
    const [userInput, setUserInput] = useState({
        "current-savings": "",
        "yearly-contribution": "",
        "expected-return": "",
        "duration": "",
    });

    // event.target.id를 쓰는 방법 (뇌피셜)
    // const inputChangeHandler = (event) => {
    //     setUserInput((prev) => {
    //         return {
    //             ...prev,
    //             [event.target.id]: event.target.value,
    //         };
    //     });
    // };

    // 익명 함수 거치는 방법 (권장)
    const inputChangeHandler = (id, value) => {
        console.log(id, value);
        setUserInput((prev) => {
            return {
                ...prev,
                [id]: +value,
            };
        });
    };
    

    const calculateButtonHandler = (event) => {
        event.preventDefault();
        props.onSubmit(userInput);
    };

    const resetButtonHandler = () => {
        setUserInput({
            "current-savings": "",
            "yearly-contribution": "",
            "expected-return": "",
            "duration": "",
        });
        props.onReset();
    };

    return (
        <div>
            <form className={styles["form"]} onSubmit={calculateButtonHandler}>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="current-savings">
                            Current Savings ($)
                        </label>
                        <input
                            type="number"
                            id="current-savings"
                            onChange={(event) => {inputChangeHandler('current-savings', event.target.value);}}
                            value={userInput["current-savings"]}
                        />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">
                            Yearly Savings ($)
                        </label>
                        <input
                            type="number"
                            id="yearly-contribution"
                            onChange={(event) => {inputChangeHandler('yearly-contribution', event.target.value);}}
                            value={userInput["yearly-contribution"]}
                        />
                    </p>
                </div>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input
                            type="number"
                            id="expected-return"
                            onChange={(event) => {inputChangeHandler('expected-return', event.target.value);}}
                            value={userInput["expected-return"]}
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">
                            Investment Duration (years)
                        </label>
                        <input
                            type="number"
                            id="duration"
                            onChange={(event) => {inputChangeHandler('duration', event.target.value);}}
                            value={userInput["duration"]}
                        />
                    </p>
                </div>
                <p className={styles["actions"]}>
                    <button type="reset" className={styles["buttonAlt"]} onClick={resetButtonHandler}>
                        Reset
                    </button>
                    <button type="submit" className={styles["button"]}>
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );
};

export default InvestInput;
