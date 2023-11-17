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
import { FilterButtonSliceReducer } from "./feateres/date-filter-button/date-filter-button.slice";
import { favoriteReducer } from "./feateres/post-card/favorites.slice";
import { SortMenuReducer } from "./feateres/sort-menu/sort-menu.slice";
import { recommendedArticlesReducer } from "./feateres/recommended-posts/recommended-articles/recommended-articles.slice";
import { recommendedNewsReducer } from "./feateres/recommended-posts/recommended-news/recommended-news.slice";
import { selectedNewsReducer } from "./feateres/selected-news/selected-news.slice";
import { burgerOpenreducer } from "./feateres/header/is-burger-open.slice";
import { favoriteArticlesReducer } from "./feateres/favorite-articles-body/favorite-articles.slice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    recommendedArticles: recommendedArticlesReducer,
    news: newsReducer,
    recommendedNews: recommendedNewsReducer,
    selectedArticle: selectedArticleReducer,
    selectedNews: selectedNewsReducer,
    themeSwitcher: themeSwitcherReducer,
    search: searchReducer,
    searchedArticles: searchResultReducer,
    tabs: TabsSliceReducer,
    filterButton: FilterButtonSliceReducer,
    favorite: favoriteReducer,
    fdvoriteArticles: favoriteArticlesReducer,
    sortMenu: SortMenuReducer,
    burgerMenu: burgerOpenreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
