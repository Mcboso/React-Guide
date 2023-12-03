import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsValiable: false, notification: null},
  reducers: {
    toggle(state) {
      state.cartIsValiable = !state.cartIsValiable; // 실제 state 직접 변경하는 건 아님 (새로운 state 리턴) 
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export default uiSlice;
export const uiActions = uiSlice.actions;