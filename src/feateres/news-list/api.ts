import { baseUrl, jsonContentTypeHeaders } from "../../api/constants";
import { AllNewsResponse } from "../../api/types";

export const newsApi = {
  getAllNews: (): Promise<AllNewsResponse> => {
    return fetch(baseUrl + "blogs/?limit=12", {
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
