import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { articlesReducer } from "./feateres/articles-list/articles-list.slice";
import { selectedArticleReducer } from "./feateres/selected-article/selected-article.slice";
import { themeSwitcherReducer } from "./feateres/theme-switcher/theme-switcher.slice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    selectedArticle: selectedArticleReducer,
    themeSwitcher: themeSwitcherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
