import { call, put, takeLatest } from "typed-redux-saga";
import { PostCardModel, SelectedArticleResponse } from "../../api/types";
import { selectedNewsApi } from "./api";
import {
  getSelectedNews,
  getSelectedNewsFailure,
  getSelectedNewsSuccess,
} from "./selected-news.slice";

export function* getSelectedNewsSaga() {
  yield takeLatest(
    getSelectedNews,
    function* getSelectedArticleHandler({ payload }) {
      const response: SelectedArticleResponse = yield* call(
        selectedNewsApi.getSelectedNews,
        payload.newsId
      );

      if (response) {
        const mergedNews = mergeNews(response);
        yield put(getSelectedNewsSuccess({ selectedNews: mergedNews }));
      } else {
        yield put(
          getSelectedNewsFailure({
            error: "Error while requesting news",
          })
        );
      }
    }
  );
}

function mergeNews(newsFromApi: SelectedArticleResponse): PostCardModel {
  return {
    id: newsFromApi.id,
    title: newsFromApi.title,
    image_url: newsFromApi.image_url,
    summary: newsFromApi.summary,
    published_at: newsFromApi.published_at,
    text: `During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.`,
  };
}
