import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/login/login.reducer';

export default configureStore({
  reducer: {
    login: loginReducer
  }
})