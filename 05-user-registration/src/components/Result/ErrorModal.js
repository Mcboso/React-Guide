import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../AddUser/Button";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles["modal"]}>
            <header className={styles["header"]}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles["content"]}>{props.message}</div>
            <footer className={styles["action"]}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onClick={props.onClose}
                />,
                document.getElementById("modal-root")
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
