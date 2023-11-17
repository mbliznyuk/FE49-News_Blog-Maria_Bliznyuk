import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../api/types";
import { FilterButtonId } from "../date-filter-button/date-filter-button";
import { SortOptionId } from "../sort-menu/sort-menu";

const favoriteArticlesListSlice = createSlice({
  name: "FavoroteArticlesList",
  initialState: {
    favoriteArticles: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getFavoriteArticles(state) {
      state.isLoading = true;
    },
    getFsvoriteArticlesSuccess(
      state,
      action: { payload: { favoriteArticles: PostCardModel[] } }
    ) {
      state.isLoading = false;
      state.favoriteArticles = action.payload.favoriteArticles;
    },
    getFAvoriteArticlesFailure(state, error: { payload: unknown }) {
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
    getFavoriteArticles,
    getFsvoriteArticlesSuccess,
    getFAvoriteArticlesFailure,
  },
  reducer: favoriteArticlesReducer,
} = favoriteArticlesListSlice;
