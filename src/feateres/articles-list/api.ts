import moment from "moment";
import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";
import { FilterButtonId } from "../date-filter-button/date-filter-button";
import {
  DAY,
  MONATH,
  WEEK,
  YEAR,
} from "../date-filter-button/date-filter-button.slice";
import { SortOptionId } from "../sort-menu/sort-menu";
import { getPageNumberFromUrlQuery } from "../pagination/pagination";

export interface PostGetRequestParameters {
  period?: FilterButtonId;
  sortBy?: SortOptionId;
  limit?: number;
  offset?: number;
}

export const DEFAULT_LIMIT = 12;

export function getCurrentOffset(): number {
  return (getPageNumberFromUrlQuery() - 1) * DEFAULT_LIMIT;
}

export const articlesApi = {
  getAllArticles: (
    parameters: PostGetRequestParameters
  ): Promise<AllArticlesResponse> => {
    const minimalDate = convertPeriodToMinimumIsoDate(parameters.period);
    const fieldForSort = getFieldName(parameters.sortBy);

    return fetch(
      `${baseUrl}articles?limit=${parameters.limit || DEFAULT_LIMIT}&offset=${
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

const getAmountOfDays = (period?: FilterButtonId): number => {
  switch (period) {
    case DAY:
      return 1;
    case WEEK:
      return 7;
    case MONATH:
      return 30;
    case YEAR:
      return 365;
    default:
      return 365 * 5;
  }
};

export const getFieldName = (sortBy?: SortOptionId): string => {
  switch (sortBy) {
    case "TITLE":
      return "title";
    case "PUBLISHED_AT":
      return "published_at";
    default:
      return "title";
  }
};

export function convertPeriodToMinimumIsoDate(period?: FilterButtonId): string {
  return moment().subtract(getAmountOfDays(period), "d").toISOString();
}
