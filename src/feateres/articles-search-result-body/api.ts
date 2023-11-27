import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";
import { getCurrentOffset } from "../articles-list/api";

export const searchedArticlesApi = {
  getSearchedArticle: (articleTitle: string): Promise<AllArticlesResponse> => {
    return fetch(
      baseUrl +
        `articles/?limit=5&offset=${
          "" + getCurrentOffset()
        }&search=${articleTitle}`,
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
