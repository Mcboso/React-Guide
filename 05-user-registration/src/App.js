import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/Result/UserList";
import ErrorModal from "./components/Result/ErrorModal";

let key = 0;

function App() {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState();

    const addUserHandler = (input) => {
        if (input.name.trim().length === 0 || input.age.trim().length === "") {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
        } else if (+input.age <= 0) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
        } else {
            setUserList((prev) => {
                return [...prev, {input, key: key++}];
                // const updatedUserList = [...prev];
                // updatedUserList.unshift({
                //     ...input,
                //     key: key++,
                // });
                // return updatedUserList;
            });
        }
    };

    console.log(userList);

    const resetError = () => {
        setError(null);
        // null => falsy
    };

    return (
        <div>
            <AddUser onAdd={addUserHandler} />
            <UserList data={userList} />
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onClose={resetError}
                />
            )}
            {/* {(blankError || ageError) && (
                <ErrorModal blank={blankError} lowAge={ageError} onClose={resetError}/>
            )} */}
        </div>
    );
}

export default App;
