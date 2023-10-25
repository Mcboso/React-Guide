import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../AddUser/Button";

const ErrorModal = (props) => {
    return (
        <div className={styles["backdrop"]} onClick={props.onClose}>
            <Card className={styles["modal"]}>
                <header className={styles["header"]}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles["content"]}>
                    {props.message}
                </div>
                <footer className={styles["action"]}>
                    <Button onClick={props.onClose}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
