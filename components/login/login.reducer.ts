import { createSlice } from '@reduxjs/toolkit';

const DM_PASSCODE = 'oota';

export const slice = createSlice({
  name: 'login',
  initialState: {
    userType: null,
  },
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = slice.actions;

export default slice.reducer;