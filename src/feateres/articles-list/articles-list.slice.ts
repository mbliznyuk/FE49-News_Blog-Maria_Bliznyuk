import { createSlice } from "@reduxjs/toolkit";
import { ArticleCardModel } from "./types";

const articlesListSlice = createSlice({
  name: "ArticlesList",
  initialState: {
    articles: [] as ArticleCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getArticles(state) {
      state.isLoading = true;
    },
    getArticlesSuccess(
      state,
      action: { payload: { articles: ArticleCardModel[] } }
    ) {
      state.isLoading = false;
      state.articles = action.payload.articles;
    },
    getArticlesFailure(state, error: { payload: unknown }) {
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
  actions: { getArticles, getArticlesSuccess, getArticlesFailure },
  reducer: articlesReducer,
} = articlesListSlice;
