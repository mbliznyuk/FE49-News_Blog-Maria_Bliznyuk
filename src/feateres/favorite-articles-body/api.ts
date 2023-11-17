import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";
import { convertPeriodToMinimumIsoDate } from "../articles-list/api";

export const favoriteArticlesApi = {
  getFavoriteArticles: (): Promise<AllArticlesResponse> => {
    return fetch(
      `${baseUrl}articles/?limit=1000&published_at_gte=${convertPeriodToMinimumIsoDate()}`,
      {
        method: "GET",
        headers: {
          ...jsonContentTypeHeaders,
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error("SERVER ERROR");
      }
      return response.json();
    });
  },
};
