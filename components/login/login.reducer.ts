import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './constants';
import Cookies from 'js-cookie';

const DM_PASSCODE = 'oota';

type SliceState = { userType: UserType }

const initialState: SliceState = { userType: 'NONE' };

export const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      const userTypeCookie = Cookies.get('userType');
      if (userTypeCookie !== action.payload) {
        Cookies.set('userType', action.payload, { expires: 1 });
      }
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = slice.actions;

export default slice.reducer;