import { AuthorisationPayload, AuthorisationResponse } from "../../api/types";

export const api = {
  authorise: (payload: AuthorisationPayload) => {
    if (payload.email.includes("maria")) {
      return new Promise<AuthorisationResponse>((resolve) =>
        setTimeout(
          () => resolve({ success: true, login: "Maria Bliznyuk" }),
          1000
        )
      );
    } else {
      return new Promise<AuthorisationResponse>((resolve) =>
        setTimeout(
          () => resolve({ success: false, login: payload.email }),
          1000
        )
      );
    }
  },
};
