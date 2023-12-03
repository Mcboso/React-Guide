import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: { //reducer에서 조건문 쓸 필요 없음
    increment(state) {
      state.counter++; // 실제 state 조작하는 것처럼 보이지만, 내부에서 새로운 state 리턴해줌
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  },
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
// {type: 액션마다 다른 고유 식별자} 형식의 action 객체 생성
// 고유 식별자 생성, 오타 고민할 필요 없음!!