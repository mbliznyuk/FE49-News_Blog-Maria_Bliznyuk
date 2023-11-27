import { createSlice } from "@reduxjs/toolkit";
import { AllArticlesResponse } from "../../api/types";

const initialState = {
  searchedArticles: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  } as AllArticlesResponse,
  isInProgress: false,
  isCompleted: false,
  articlesTotalPages: 1,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  reducers: {
    search(state, action: { payload: string }) {
      state.isInProgress = true;
    },
    searchSuccess(state, action: { payload: AllArticlesResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.searchedArticles = action.payload;
    },
    searchFailure(state) {
      state.isInProgress = false;
    },
    reset(state) {
      state.searchedArticles = initialState.searchedArticles;
    },
  },
});

export const { search, searchSuccess, searchFailure, reset } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
