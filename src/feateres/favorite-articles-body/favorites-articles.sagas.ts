import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllArticlesResponse,
  AllArticlesResponseResult,
  PostCardModel,
} from "../../api/types";
import { favoriteArticlesApi } from "./api";
import {
  getFAvoriteArticlesFailure,
  getFavoriteArticles,
  getFsvoriteArticlesSuccess,
} from "./favorite-articles.slice";

export function* getFavoriteArticlesSaga() {
  yield takeLatest(getFavoriteArticles, function* getFavoriteArticlesHandler() {
    const response: AllArticlesResponse = yield* call(
      favoriteArticlesApi.getFavoriteArticles
    );
    try {
      const mergedArticles = mergeArticles(response.results);
      yield put(
        getFsvoriteArticlesSuccess({ favoriteArticles: mergedArticles })
      );
    } catch (error) {
      console.error("error");
      yield put(
        getFAvoriteArticlesFailure({
          error: "Error while requesting favorite articles",
        })
      );
    }
  });
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
