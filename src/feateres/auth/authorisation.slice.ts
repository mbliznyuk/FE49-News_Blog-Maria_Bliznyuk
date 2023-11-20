import { createSlice } from "@reduxjs/toolkit";
import { AuthorisationPayload } from "../../api/types";

const authorisationSlice = createSlice({
  name: "authorisationSlice",
  initialState: {
    isInProgress: false,
    isCompleted: false,
    isFailed: false,
  },
  reducers: {
    authorise(state, action: { payload: AuthorisationPayload }) {
      state.isInProgress = true;
    },
    authoriseSuccess(state) {
      state.isInProgress = false;
      state.isCompleted = true;
    },
    authoriseFailure(state) {
      state.isInProgress = false;
      state.isFailed = true;
    },
    postAuthoriseSuccess(state) {
      state.isCompleted = false;
    },
  },
});

export const {
  actions: {
    authorise,
    authoriseSuccess,
    authoriseFailure,
    postAuthoriseSuccess,
  },
  reducer: authorisationReducer,
} = authorisationSlice;
