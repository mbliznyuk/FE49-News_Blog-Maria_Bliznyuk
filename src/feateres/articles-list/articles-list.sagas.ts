import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllArticlesResponse,
  AllArticlesResponseResult,
} from "../../api/types";
import {
  getArticles,
  getArticlesFailure,
  getArticlesSuccess,
} from "./articles-list.slice";
import { articlesApi } from "./api";
import { ArticleCardModel } from "./types";

export function* getArticlesSaga() {
  yield takeLatest(getArticles, function* getArticlesHandler() {
    const response: AllArticlesResponse = yield* call(
      articlesApi.getAllArticles
    );

    if (response) {
      const mergedArticles = mergeArticles(response.results);
      yield put(getArticlesSuccess({ articles: mergedArticles }));
    } else {
      yield put(
        getArticlesFailure({ error: "Error while requesting articles" })
      );
    }
  });
}

function mergeArticles(
  articlesFromApi: AllArticlesResponseResult[]
): ArticleCardModel[] {
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
