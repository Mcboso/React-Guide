// import { createStore } from "redux"; 
import { configureStore } from "@reduxjs/toolkit"; // 여러개의 reducer를 하나의 reducer로
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // reducer: counterSlice.reducer
  reducer: { // slice 여러개일 때 mapping하는 방식
    counter: counterReducer,
    auth: authReducer,
  }
});

export default store;



