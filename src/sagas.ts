import { all } from "redux-saga/effects";
import { getArticlesSaga } from "./feateres/articles-list/articles-list.sagas";
import { getSearchedArticleSaga } from "./feateres/articles-search-result-body/articles-search-result.sagas";
import { getNewsSaga } from "./feateres/news-list/news-list.sagas";
import { searchSaga } from "./feateres/search/search.sagas";
import { getSelectedArticleSaga } from "./feateres/selected-article/selected-article.sagas";
import { themeSwitcherSaga } from "./feateres/theme-switcher/theme-switcher.sagas";
import { getRecommendedArticlesSaga } from "./feateres/recommended-posts/recommended-articles/recommended-articles.sagas";
import { getSelectedNewsSaga } from "./feateres/selected-news/selected-news.sagas";
import { getRecommendedNewsSaga } from "./feateres/recommended-posts/recommended-news/recommended-news.sagas";
import { getFavoriteArticlesSaga } from "./feateres/favorite-articles-body/favorites-articles.sagas";
import { authorisationSaga } from "./feateres/auth/authorisation.sagas";

export function* rootSaga() {
  yield all([
    getArticlesSaga(),
    getRecommendedArticlesSaga(),
    getNewsSaga(),
    getRecommendedNewsSaga(),
    getSelectedArticleSaga(),
    themeSwitcherSaga(),
    searchSaga(),
    getSearchedArticleSaga(),
    getSelectedNewsSaga(),
    getFavoriteArticlesSaga(),
    authorisationSaga(),
  ]);
}
