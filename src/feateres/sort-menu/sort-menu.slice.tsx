import { createSlice } from "@reduxjs/toolkit";
import { SortOptionId } from "./sort-menu";

const SortMenuSlice = createSlice({
  name: "SortMenuSlice",
  initialState: {
    activeSortOption: "TITLE" as SortOptionId,
  },
  reducers: {
    setActiveSortOption(state, action: { payload: SortOptionId }) {
      state.activeSortOption = action.payload;
    },
  },
});

export const {
  actions: { setActiveSortOption },
  reducer: SortMenuReducer,
} = SortMenuSlice;
