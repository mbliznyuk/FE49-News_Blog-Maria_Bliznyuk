import { call, put, takeLatest } from "typed-redux-saga";
import { PostCardModel, SelectedPostResponse } from "../../api/types";

import {
  getSelectedArticle,
  getSelectedArticleFailure,
  getSelectedArticleSuccess,
} from "./selected-article.slice";
import { selectedArticleApi } from "./api";

export function* getSelectedArticleSaga() {
  yield takeLatest(
    getSelectedArticle,
    function* getSelectedArticleHandler({ payload }) {
      const response: SelectedPostResponse = yield* call(
        selectedArticleApi.getSelectedArticle,
        payload.articleId
      );

      if (response) {
        const mergedArticle = mergeArticle(response);
        yield put(
          getSelectedArticleSuccess({ selectedArticle: mergedArticle })
        );
      } else {
        yield put(
          getSelectedArticleFailure({
            error: "Error while requesting articles",
          })
        );
      }
    }
  );
}

function mergeArticle(articlesFromApi: SelectedPostResponse): PostCardModel {
  return {
    id: articlesFromApi.id,
    title: articlesFromApi.title,
    image_url: articlesFromApi.image_url,
    summary: articlesFromApi.summary,
    published_at: articlesFromApi.published_at,
    text: `During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.`,
  };
}
