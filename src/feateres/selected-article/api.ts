import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { SelectedPostResponse } from "../../api/types";

export const selectedArticleApi = {
  getSelectedArticle: (articleId: string): Promise<SelectedPostResponse> => {
    return fetch(baseUrl + `articles/${articleId}`, {
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
