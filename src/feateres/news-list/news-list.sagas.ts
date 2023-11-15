import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllNewsResponse,
  AllNewsResponseResult,
  NewsCardModel,
} from "../../api/types";
import { newsApi } from "./api";
import { getNews, getNewsFailure, getNewsSuccess } from "./news-list.slice";
import { PostGetRequestParameters } from "../articles-list/api";

export function* getNewsSaga() {
  yield takeLatest(getNews, function* getNewsHandler({ payload }) {
    const response: AllNewsResponse = yield* call(newsApi.getAllNews, {
      period: payload.period,
      sortBy: payload.sortBy,
    } as PostGetRequestParameters);

    if (response) {
      const mergedNews = mergeNews(response.results);
      yield put(getNewsSuccess({ news: mergedNews }));
    } else {
      yield put(getNewsFailure({ error: "Error while requesting news" }));
    }
  });
}

function mergeNews(articlesFromApi: AllNewsResponseResult[]): NewsCardModel[] {
  return articlesFromApi.map((element) => {
    return {
      id: element.id,
      title: element.title,
      image_url: element.image_url,
      summary: element.summary,
      published_at: element.published_at,
      text: `During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.`,
    };
  });
}
