import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: {
    isFavorite: false,
  },
  reducers: {
    setIsFavorite(state, action: { payload: boolean }) {
      state.isFavorite = action.payload;
    },
  },
});

export const {
  actions: { setIsFavorite },
  reducer: favoriteReducer,
} = favoritesSlice;
