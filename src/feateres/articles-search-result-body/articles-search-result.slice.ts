import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../api/types";
import { DEFAULT_LIMIT } from "../articles-list/api";

export type SearchedTitle = {
  searchedTitle: string;
};

const SearchResultSlice = createSlice({
  name: "SearchResult",
  initialState: {
    searchedArticlesTotalPages: 1,
    searchedArticles: [] as PostCardModel[],
    isLoading: true,
    error: null as Error | null,
  },
  reducers: {
    getSearchedArticles(state, action: { payload: SearchedTitle }) {
      state.isLoading = true;
    },
    getSearchedArticlesSuccess(
      state,
      action: { payload: { searchedArticles: PostCardModel[]; count: number } }
    ) {
      state.isLoading = false;
      state.searchedArticles = action.payload.searchedArticles;
      state.searchedArticlesTotalPages = Math.ceil(
        action.payload.count / DEFAULT_LIMIT
      );
    },
    getSearchedArticlesFailure(state, error: { payload: unknown }) {
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
    getSearchedArticles,
    getSearchedArticlesSuccess,
    getSearchedArticlesFailure,
  },
  reducer: searchResultReducer,
} = SearchResultSlice;
