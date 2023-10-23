import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";

export const articlesApi = {
  getAllArticles: (): Promise<AllArticlesResponse> => {
    return fetch(baseUrl + "articles/?limit=12", {
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
