import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllArticlesResponse,
  AllArticlesResponseResult,
  PostCardModel,
} from "../../api/types";
import {
  getArticles,
  getArticlesFailure,
  getArticlesSuccess,
} from "./articles-list.slice";
import { PostGetRequestParameters, articlesApi } from "./api";

export function* getArticlesSaga() {
  yield takeLatest(getArticles, function* getArticlesHandler({ payload }) {
    const response: AllArticlesResponse = yield* call(
      articlesApi.getAllArticles,
      {
        period: payload.period,
        sortBy: payload.sortBy,
      } as PostGetRequestParameters
    );
    try {
      const mergedArticles = mergeArticles(response.results);
      yield put(
        getArticlesSuccess({ articles: mergedArticles, count: response.count })
      );
    } catch (error) {
      console.error("error");
      yield put(
        getArticlesFailure({ error: "Error while requesting articles" })
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
      text: "Thales Alenia Space has been awarded an Italian Space Agency (ASI) contract to continue the development of its Multi-Purpose Habitat, which the agency hopes will be the first permanent outpost on the Moon. In September 2020, ASI and NASA signed a joint statement of intent to cooperate to advance the goals of the Artemis programme. An ASI press release at the time explained that the cooperation would include but not be limited to: “the provision of crew habitation capabilities on the surface of the Moon and associated technologies to enable short-duration stays for crews on the Moon.” It would, however, take another two years before a solid plan to execute this planned cooperation would emerge.",
    };
  });
}
