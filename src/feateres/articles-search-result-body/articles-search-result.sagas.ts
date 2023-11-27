import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllArticlesResponse,
  AllArticlesResponseResult,
  PostCardModel,
} from "../../api/types";
import { searchedArticlesApi } from "./api";
import {
  getSearchedArticles,
  getSearchedArticlesFailure,
  getSearchedArticlesSuccess,
} from "./articles-search-result.slice";

export function* getSearchedArticleSaga() {
  yield takeLatest(
    getSearchedArticles,
    function* getSearchedArticleHandler({ payload }) {
      const response: AllArticlesResponse = yield* call(
        searchedArticlesApi.getSearchedArticle,
        payload.searchedTitle
      );

      if (response) {
        const mergedArticles = mergeArticles(response.results);
        yield put(
          getSearchedArticlesSuccess({
            searchedArticles: mergedArticles,
            count: response.count,
          })
        );
      } else {
        yield put(
          getSearchedArticlesFailure({
            error: "Error while searched articles",
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
