import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../api/types";
import { FilterButtonId } from "../date-filter-button/date-filter-button";

const newsListSlice = createSlice({
  name: "NewsList",
  initialState: {
    news: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getNews(state, action: { payload: { period: FilterButtonId } }) {
      state.isLoading = true;
    },
    getNewsSuccess(state, action: { payload: { news: PostCardModel[] } }) {
      state.isLoading = false;
      state.news = action.payload.news;
    },
    getNewsFailure(state, error: { payload: unknown }) {
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
  actions: { getNews, getNewsSuccess, getNewsFailure },
  reducer: newsReducer,
} = newsListSlice;
