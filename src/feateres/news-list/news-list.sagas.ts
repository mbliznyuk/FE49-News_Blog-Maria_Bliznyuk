import { call, put, takeLatest } from "typed-redux-saga";
import {
  AllNewsResponse,
  AllNewsResponseResult,
  PostCardModel,
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
      yield put(getNewsSuccess({ news: mergedNews, count: response.count }));
    } else {
      yield put(getNewsFailure({ error: "Error while requesting news" }));
    }
  });
}

function mergeNews(articlesFromApi: AllNewsResponseResult[]): PostCardModel[] {
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
