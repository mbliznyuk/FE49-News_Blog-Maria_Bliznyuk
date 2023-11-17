import { createSlice } from "@reduxjs/toolkit";

const isBurgerOpenSlice = createSlice({
  name: "isBurgerOpen",
  initialState: {
    isBurgerOpen: false,
  },
  reducers: {
    open(state) {
      state.isBurgerOpen = true;
    },
    close(state) {
      state.isBurgerOpen = false;
    },
    toggle(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
  },
});

export const {
  actions: { open, close, toggle },
  reducer: burgerOpenreducer,
} = isBurgerOpenSlice;
