import { createSlice } from "@reduxjs/toolkit";
import { TabId } from "./tab";

export const ARTICLES = "ARTICLES";
export const NEWS = "NEWS";

const TabsSlice = createSlice({
  name: "TabsSlice",
  initialState: {
    activeTab: ARTICLES as TabId,
  },
  reducers: {
    setActiveTab(state, action: { payload: TabId }) {
      state.activeTab = action.payload;
    },
  },
});

export const {
  actions: { setActiveTab },
  reducer: TabsSliceReducer,
} = TabsSlice;
