import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../../api/types";

const recommendedArticlesListSlice = createSlice({
  name: "RecommendedArticlesList",
  initialState: {
    recommendedArticles: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getRecommendedArticles(state) {
      state.isLoading = true;
    },
    getRecommendedArticlesSuccess(
      state,
      action: { payload: { recommendedArticles: PostCardModel[] } }
    ) {
      state.isLoading = false;
      state.recommendedArticles = action.payload.recommendedArticles;
    },
    getRecommendedArticlesFailure(state, error: { payload: unknown }) {
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
    getRecommendedArticles,
    getRecommendedArticlesSuccess,
    getRecommendedArticlesFailure,
  },
  reducer: recommendedArticlesReducer,
} = recommendedArticlesListSlice;
