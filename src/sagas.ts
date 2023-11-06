import { all } from "redux-saga/effects";
import { getArticlesSaga } from "./feateres/articles-list/articles-list.sagas";
import { getSearchedArticleSaga } from "./feateres/articles-search-result-body/articles-search-result.sagas";
import { getNewsSaga } from "./feateres/news-list/news-list.sagas";
import { searchSaga } from "./feateres/search/search.sagas";
import { getSelectedArticleSaga } from "./feateres/selected-article/selected-article.sagas";
import { themeSwitcherSaga } from "./feateres/theme-switcher/theme-switcher.sagas";

export function* rootSaga() {
  yield all([
    getArticlesSaga(),
    getNewsSaga(),
    getSelectedArticleSaga(),
    themeSwitcherSaga(),
    searchSaga(),
    getSearchedArticleSaga(),
  ]);
}
