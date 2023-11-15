import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { SelectedArticleResponse } from "../../api/types";

export const selectedNewsApi = {
  getSelectedNews: (newsId: string): Promise<SelectedArticleResponse> => {
    return fetch(baseUrl + `blogs/${newsId}`, {
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
