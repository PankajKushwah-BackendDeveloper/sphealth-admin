// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/updateuser';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store;
