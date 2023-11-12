import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllNewsResponse } from "../../api/types";
import { convertPeriodToMinimumIsoDate } from "../articles-list/api";
import { FilterButtonId } from "../date-filter-button/date-filter-button";

export const newsApi = {
  getAllNews: (period: FilterButtonId): Promise<AllNewsResponse> => {
    const minimalDate = convertPeriodToMinimumIsoDate(period);
    return fetch(baseUrl + "blogs?limit=12&published_at_gte=" + minimalDate, {
      method: "GET",
      headers: {
        ...jsonContentTypeHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("SERVER ERROR");
      }
      return response.json();
    });
  },
};
