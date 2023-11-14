import classes from "./Checkout.module.css";
import { useRef, useState } from "react"; // 한 글자씩 오류 체크 -> state, 제출 시 오류 체크 -> ref

const Checkout = (props) => {
  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalInputRef = useRef("");
  const cityInputRef = useRef("");

  const [formInputsValidity, setInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  })

  const isEmpty = (value) => value.trim() === "";
  const isFiveChar = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    setInputsValidity({
      name: !isEmpty(enteredName),
      street: !isEmpty(enteredStreet),
      postal: isFiveChar(enteredPostal),
      city: !isEmpty(enteredCity),
    });

    const formIsValid = formInputsValidity.name && formInputsValidity.street && formInputsValidity.postal && formInputsValidity.city

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal
    });

  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>wrong input</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>wrong input</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>wrong input</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>wrong input</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
