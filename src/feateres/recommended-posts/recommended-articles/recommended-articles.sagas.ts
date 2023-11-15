import { call, put, takeLatest } from "typed-redux-saga";

import { PostGetRequestParameters, articlesApi } from "../../articles-list/api";

import {
  getRecommendedArticles,
  getRecommendedArticlesFailure,
  getRecommendedArticlesSuccess,
} from "./recommended-articles.slice";
import {
  AllArticlesResponse,
  AllArticlesResponseResult,
  PostCardModel,
} from "../../../api/types";
import { YEAR } from "../../date-filter-button/date-filter-button.slice";

export function* getRecommendedArticlesSaga() {
  yield takeLatest(
    getRecommendedArticles,
    function* getRecommendedArticlesHandler() {
      console.log("recommended article");
      const response: AllArticlesResponse = yield* call(
        articlesApi.getAllArticles,
        {
          period: YEAR,
          limit: 3,
          offset: getRandomOffset(),
        } as PostGetRequestParameters
      );

      if (response) {
        console.log("respons ercommended posts");
        console.log(response);
        const mergedArticles = mergeArticles(response.results);
        yield put(
          getRecommendedArticlesSuccess({ recommendedArticles: mergedArticles })
        );
      } else {
        yield put(
          getRecommendedArticlesFailure({
            error: "Error while requesting articles",
          })
        );
      }
    }
  );
}

function mergeArticles(
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
  return Math.floor(Math.random() * 60);
}
