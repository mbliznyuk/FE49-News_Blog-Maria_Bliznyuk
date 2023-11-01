import { createSlice } from "@reduxjs/toolkit";
import { ArticleCardModel } from "../../api/types";

export type SelectedArticlePayload = {
  articleId: string;
};
const selectedArticelSlice = createSlice({
  name: "SelectedArticle",
  initialState: {
    selectedArticle: {} as ArticleCardModel,
    isLoading: true,
    error: null as Error | null,
  },
  reducers: {
    getSelectedArticle(state, action: { payload: SelectedArticlePayload }) {
      state.isLoading = true;
    },
    getSelectedArticleSuccess(
      state,
      action: { payload: { selectedArticle: ArticleCardModel } }
    ) {
      state.isLoading = false;
      state.selectedArticle = action.payload.selectedArticle;
    },
    getSelectedArticleFailure(state, error: { payload: unknown }) {
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
  actions: {
    getSelectedArticle,
    getSelectedArticleSuccess,
    getSelectedArticleFailure,
  },
  reducer: selectedArticleReducer,
} = selectedArticelSlice;
