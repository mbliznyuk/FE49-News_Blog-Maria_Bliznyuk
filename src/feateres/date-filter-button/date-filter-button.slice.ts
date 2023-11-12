import { createSlice } from "@reduxjs/toolkit";
import { FilterButtonId } from "./date-filter-button";

export const DAY = "DAY";
export const WEEK = "WEEK";
export const MONATH = "MONATH";
export const YEAR = "YEAR";

const FilterButtonSlice = createSlice({
  name: "FilterButtonSlice",
  initialState: {
    activFilterButton: WEEK as FilterButtonId,
  },
  reducers: {
    setActiveFilterButton(state, action: { payload: FilterButtonId }) {
      state.activFilterButton = action.payload;
    },
  },
});

export const {
  actions: { setActiveFilterButton },
  reducer: FilterButtonSliceReducer,
} = FilterButtonSlice;
