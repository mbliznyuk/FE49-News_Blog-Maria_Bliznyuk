import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../api/types";

export type SelectedNewsPayload = {
  newsId: string;
};
const selectedNewsSlice = createSlice({
  name: "SelectedNews",
  initialState: {
    selectedNews: {} as PostCardModel,
    isLoading: true,
    error: null as Error | null,
  },
  reducers: {
    getSelectedNews(state, action: { payload: SelectedNewsPayload }) {
      state.isLoading = true;
    },
    getSelectedNewsSuccess(
      state,
      action: { payload: { selectedNews: PostCardModel } }
    ) {
      state.isLoading = false;
      state.selectedNews = action.payload.selectedNews;
    },
    getSelectedNewsFailure(state, error: { payload: unknown }) {
      state.isLoading = false;
      if (
        typeof error.payload === "object" &&
        error.payload &&
        "message" in error.payload &&
        typeof error.payload.message === "string"
      ) {
        state.error = { name: "Error", message: error.payload.message };
      }
      state.error = { name: "Error", message: String(error) };
    },
  },
});

export const {
  actions: { getSelectedNews, getSelectedNewsSuccess, getSelectedNewsFailure },
  reducer: selectedNewsReducer,
} = selectedNewsSlice;
