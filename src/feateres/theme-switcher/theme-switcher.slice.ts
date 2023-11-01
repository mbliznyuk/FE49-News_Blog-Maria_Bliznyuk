import { createSlice } from "@reduxjs/toolkit";

const themeSwitcherSlice = createSlice({
  name: "themeSwitcherSlice",
  initialState: {
    isDark: false,
  },
  reducers: {
    setIsDark(state, action: { payload: boolean }) {
      state.isDark = action.payload;
    },
  },
});

export const {
  actions: { setIsDark },
  reducer: themeSwitcherReducer,
} = themeSwitcherSlice;
