import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: "PopUp",
  initialState: {
    message: "",
    isPopUpShown: false,
  },
  reducers: {
    showPopUp(state, action: { payload: { message: string } }) {
      state.message = action.payload.message;
      state.isPopUpShown = true;
    },

    clearPopUp(state) {
      state.isPopUpShown = false;
    },
  },
});

export const {
  actions: { showPopUp, clearPopUp },
  reducer: popUpReducer,
} = popUpSlice;
