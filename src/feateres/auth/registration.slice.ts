import { createSlice } from "@reduxjs/toolkit";

export type RegistrationPayload = {
  name: string;
  password: string;
  email: string;
};

export type RegistrationResponse = {
  id: number;
  email: string;
  success: boolean;
  name: string;
};

const registrationSlice = createSlice({
  name: "registrationSlice",
  initialState: {
    isInProgress: false,
    isCompleted: false,
    registrationResponse: null as RegistrationResponse | null,
  },
  reducers: {
    register(state, action: { payload: RegistrationPayload }) {
      state.isInProgress = true;
    },
    registerSuccess(state, action: { payload: RegistrationResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.registrationResponse = action.payload;
    },
    registerFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { register, registerSuccess, registerFailure },
  reducer: registrationReducer,
} = registrationSlice;
