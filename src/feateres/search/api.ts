import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllArticlesResponse } from "../../api/types";

export const searchsApi = {
  search: (search: string): Promise<AllArticlesResponse> => {
    return fetch(baseUrl + `articles/?title_contains=${search}`, {
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
