import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
    if(props.data.length === 0) {
        return;
    }
    return (
        <Card className={styles["users"]} >
            <ul>
                {props.data.map((user) => (
                    <li key={user.key}>
                        {user.input.name} ({user.input.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
