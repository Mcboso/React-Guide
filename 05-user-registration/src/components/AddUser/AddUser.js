import styles from "./AddUser.module.css";
import Button from "./Button";
import { useState, useRef } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [userInput, setUserInput] = useState({
        name: "",
        age: "",
    });

    const inputChangeHandler = (id, value) => {
        setUserInput((prev) => {
            return {
                ...prev,
                [id]: value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAdd(userInput);
        setUserInput({
            name: "",
            age: "",    
        });
        nameInputRef.currentValue ='';
        ageInputRef.currentValue ='';
    };

    return (
        <Card className={styles["input"]}>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={(event) => {
                        inputChangeHandler("name", event.target.value);
                    }}
                    value={userInput.name}
                    ref={nameInputRef}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    type="number"
                    id="age"
                    onChange={(event) => {
                        inputChangeHandler("age", event.target.value);
                    }}
                    value={userInput.age}
                    ref={ageInputRef}
                />
                <Button onClick={submitHandler}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
