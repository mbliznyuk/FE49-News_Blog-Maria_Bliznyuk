import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { SelectedPostResponse } from "../../api/types";

export const selectedNewsApi = {
  getSelectedNews: (newsId: string): Promise<SelectedPostResponse> => {
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
