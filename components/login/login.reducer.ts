import { createSlice } from '@reduxjs/toolkit';
import { UserType, userTypecast } from './constants';
import Cookies from 'js-cookie';

const DM_PASSCODE = 'oota';

type SliceState = { userType: UserType, initialized: boolean }

const initialState: SliceState = { userType: 'NONE', initialized: false };

export const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    initLoginReducer: (state, action) => {
      const userTypeCookie = Cookies.get('userType');
      if (userTypeCookie !== state.userType) {
        state.userType = userTypecast(userTypeCookie);
      }
      state.initialized = true;
    },
    setUserType: (state, action) => {
      const userTypeCookie = Cookies.get('userType');
      if (userTypeCookie !== action.payload) {
        Cookies.set('userType', action.payload, { expires: 1 });
      }
      state.userType = action.payload;
    },
  },
});

export const { initLoginReducer, setUserType } = slice.actions;

export default slice.reducer;