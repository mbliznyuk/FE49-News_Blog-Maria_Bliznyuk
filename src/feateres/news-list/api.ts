import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllNewsResponse } from "../../api/types";
import {
  PostGetRequestParameters,
  convertPeriodToMinimumIsoDate,
  getCurrentOffset,
  getFieldName,
} from "../articles-list/api";

export const newsApi = {
  getAllNews: (
    parameters: PostGetRequestParameters
  ): Promise<AllNewsResponse> => {
    const minimalDate = convertPeriodToMinimumIsoDate(parameters.period);
    const fieldForSort = getFieldName(parameters.sortBy);

    console.log(
      `blogs?limit=${parameters.limit || 12}&offset=${
        parameters.offset || "" + getCurrentOffset()
      }&published_at_gte=${minimalDate}&ordering=${fieldForSort}`
    );

    return fetch(
      `${baseUrl}blogs?limit=${parameters.limit || 12}&offset=${
        parameters.offset || "" + getCurrentOffset()
      }&published_at_gte=${minimalDate}&ordering=${fieldForSort}`,
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
