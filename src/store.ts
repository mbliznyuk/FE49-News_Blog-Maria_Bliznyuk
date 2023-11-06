import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { articlesReducer } from "./feateres/articles-list/articles-list.slice";
import { selectedArticleReducer } from "./feateres/selected-article/selected-article.slice";
import { themeSwitcherReducer } from "./feateres/theme-switcher/theme-switcher.slice";
import { searchReducer } from "./feateres/search/search.slice";
import { searchResultReducer } from "./feateres/articles-search-result-body/articles-search-result.slice";
import { newsReducer } from "./feateres/news-list/news-list.slice";
import { TabsSliceReducer } from "./feateres/tabs/tab.slice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    news: newsReducer,
    selectedArticle: selectedArticleReducer,
    themeSwitcher: themeSwitcherReducer,
    search: searchReducer,
    searchedArticles: searchResultReducer,
    tabs: TabsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
