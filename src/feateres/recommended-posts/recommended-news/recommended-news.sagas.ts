import { call, put, takeLatest } from "typed-redux-saga";

import { PostGetRequestParameters } from "../../articles-list/api";

import {
  AllArticlesResponse,
  AllArticlesResponseResult,
  PostCardModel,
} from "../../../api/types";
import { newsApi } from "../../news-list/api";
import {
  getRecommendedNews,
  getRecommendedNewsFailure,
  getRecommendedNewsSuccess,
} from "./recommended-news.slice";
import { YEAR } from "../../date-filter-button/date-filter-button.slice";

export function* getRecommendedNewsSaga() {
  yield takeLatest(getRecommendedNews, function* getRecommendedNewssHandler() {
    const response: AllArticlesResponse = yield* call(newsApi.getAllNews, {
      period: YEAR,
      limit: 3,
      offset: getRandomOffset(),
    } as PostGetRequestParameters);

    if (response) {
      const mergedNews = mergeNews(response.results);
      yield put(getRecommendedNewsSuccess({ recommendedNews: mergedNews }));
    } else {
      yield put(
        getRecommendedNewsFailure({
          error: "Error while requesting news",
        })
      );
    }
  });
}

function mergeNews(
  articlesFromApi: AllArticlesResponseResult[]
): PostCardModel[] {
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

function getRandomOffset() {
  return Math.floor(Math.random() * 50);
}
