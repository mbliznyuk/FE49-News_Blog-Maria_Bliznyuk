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

export const articlesApi = {
  getAllArticles: (
    period: FilterButtonId,
    sortBy: SortOptionId
  ): Promise<AllArticlesResponse> => {
    const minimalDate = convertPeriodToMinimumIsoDate(period);
    const fieldForSort = getFieldName(sortBy);
    return fetch(
      `${baseUrl}articles?limit=12&published_at_gte=${minimalDate}&ordering=${fieldForSort}`,
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

const getAmountOfDays = (period: FilterButtonId): number => {
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
      return 7;
  }
};

const getFieldName = (sortBy: SortOptionId): string => {
  switch (sortBy) {
    case "TITLE":
      return "title";
    case "PUBLISHED_AT":
      return "published_at";
    default:
      return "title";
  }
};

export function convertPeriodToMinimumIsoDate(period: FilterButtonId): string {
  return moment().subtract(getAmountOfDays(period), "d").toISOString();
}
