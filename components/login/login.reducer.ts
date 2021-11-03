import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './constants';

const DM_PASSCODE = 'oota';

type SliceState = { userType: UserType }

const initialState: SliceState = { userType: 'NONE' };

export const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = slice.actions;

export default slice.reducer;