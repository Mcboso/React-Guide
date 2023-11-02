import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Store/auth-context";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
  //component 밖에서 함수 정의
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // a state로 인해 b state가 결정되는 경우 (enteredEmail로 인해 emailisValid가 결정됨)에 useReducer 사용 고려
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // object distructuring 별칭 할당 (emailState의 isValid property를 emailIsValid라는 별칭으로 선언)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity...");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500); //500ms 이후에 함수(첫번째 인자) 실행하라는 뜻
    return () => {
      console.log("Clean up...");
      clearTimeout(identifier);
    }; // 최초 제외하고 side effect 함수 실행되기 직전에 실행됨 => 이전의 타이머 삭제
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    }
    else {
      passwordInputRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* 재사용하기 위해서 context 대신 prop을 사용   */}
        <Input
          ref={emailInputRef}
          type="email"
          id="E-Mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        {/* <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
