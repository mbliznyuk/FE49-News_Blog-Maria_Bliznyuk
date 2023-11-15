import { createSlice } from "@reduxjs/toolkit";
import { PostCardModel } from "../../../api/types";

const recommendedNewsSlice = createSlice({
  name: "recommendedNewslesList",
  initialState: {
    recommendedNews: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getRecommendedNews(state) {
      state.isLoading = true;
      console.log("slice recommended news");
    },
    getRecommendedNewsSuccess(
      state,
      action: { payload: { recommendedNews: PostCardModel[] } }
    ) {
      state.isLoading = false;
      state.recommendedNews = action.payload.recommendedNews;
    },
    getRecommendedNewsFailure(state, error: { payload: unknown }) {
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
    getRecommendedNews,
    getRecommendedNewsSuccess,
    getRecommendedNewsFailure,
  },
  reducer: recommendedNewsReducer,
} = recommendedNewsSlice;
