import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../api/types";
import { FilterButtonId } from "../date-filter-button/date-filter-button";
import { SortOptionId } from "../sort-menu/sort-menu";
import { DEFAULT_LIMIT } from "../articles-list/api";

const newsListSlice = createSlice({
  name: "NewsList",
  initialState: {
    newsTotalPages: 1,
    news: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getNews(
      state,
      action: { payload: { period: FilterButtonId; sortBy: SortOptionId } }
    ) {
      state.isLoading = true;
    },
    getNewsSuccess(
      state,
      action: { payload: { news: PostCardModel[]; count: number } }
    ) {
      state.isLoading = false;
      state.news = action.payload.news;
      state.newsTotalPages = Math.ceil(action.payload.count / DEFAULT_LIMIT);
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
