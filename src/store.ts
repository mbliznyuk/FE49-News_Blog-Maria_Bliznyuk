import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { articlesReducer } from "./feateres/articles-list/articles-list.slice";
import { searchResultReducer } from "./feateres/articles-search-result-body/articles-search-result.slice";
import { authorisationReducer } from "./feateres/auth/authorisation.slice";
import { FilterButtonSliceReducer } from "./feateres/date-filter-button/date-filter-button.slice";
import { favoriteArticlesReducer } from "./feateres/favorite-articles-body/favorite-articles.slice";
import { burgerOpenreducer } from "./feateres/header/is-burger-open.slice";
import { newsReducer } from "./feateres/news-list/news-list.slice";
import { recommendedArticlesReducer } from "./feateres/recommended-posts/recommended-articles/recommended-articles.slice";
import { recommendedNewsReducer } from "./feateres/recommended-posts/recommended-news/recommended-news.slice";
import { searchReducer } from "./feateres/search/search.slice";
import { selectedArticleReducer } from "./feateres/selected-article/selected-article.slice";
import { selectedNewsReducer } from "./feateres/selected-news/selected-news.slice";
import { SortMenuReducer } from "./feateres/sort-menu/sort-menu.slice";
import { TabsSliceReducer } from "./feateres/tabs/tab.slice";
import { themeSwitcherReducer } from "./feateres/theme-switcher/theme-switcher.slice";
import { rootSaga } from "./sagas";

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
    fdvoriteArticles: favoriteArticlesReducer,
    sortMenu: SortMenuReducer,
    burgerMenu: burgerOpenreducer,
    authorisation: authorisationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
