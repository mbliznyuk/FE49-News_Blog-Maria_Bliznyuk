import { all } from "redux-saga/effects";
import { getArticlesSaga } from "./feateres/articles-list/articles-list.sagas";
import { getSelectedArticleSaga } from "./feateres/selected-article/selected-article.sagas";
import { themeSwitcherSaga } from "./feateres/theme-switcher/theme-switcher.sagas";

export function* rootSaga() {
  yield all([getArticlesSaga(), getSelectedArticleSaga(), themeSwitcherSaga()]);
}
