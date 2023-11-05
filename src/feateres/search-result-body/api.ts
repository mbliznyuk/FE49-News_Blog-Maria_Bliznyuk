import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";

export const searchedArticlesApi = {
  getSearchedArticle: (articleTitle: string): Promise<AllArticlesResponse> => {
    return fetch(baseUrl + `articles/?search=${articleTitle}`, {
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
