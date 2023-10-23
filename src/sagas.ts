import { all } from "redux-saga/effects";
import { getArticlesSaga } from "./feateres/articles-list/articles-list.sagas";

export function* rootSaga() {
  yield all([getArticlesSaga()]);
}
