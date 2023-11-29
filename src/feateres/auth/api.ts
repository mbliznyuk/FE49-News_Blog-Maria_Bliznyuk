import { AuthorisationPayload, AuthorisationResponse } from "../../api/types";
import {
  RegistrationPayload,
  RegistrationResponse,
} from "./registration.slice";

export const api = {
  authorise: (payload: AuthorisationPayload) => {
    if (payload.email.includes("maria")) {
      return new Promise<AuthorisationResponse>((resolve) =>
        setTimeout(
          () => resolve({ success: true, name: "Maria Bliznyuk" }),
          1000
        )
      );
    } else {
      return new Promise<AuthorisationResponse>((resolve) =>
        setTimeout(() => resolve({ success: false, name: payload.email }), 1000)
      );
    }
  },

  register: (payload: RegistrationPayload) => {
    if (payload.email.includes("maria")) {
      return new Promise<RegistrationResponse>((resolve) =>
        setTimeout(
          () =>
            resolve({
              success: true,
              id: 5,
              name: payload.name,
              email: payload.email,
            }),
          1000
        )
      );
    } else {
      return new Promise<RegistrationResponse>((resolve) =>
        setTimeout(
          () =>
            resolve({
              success: false,
              id: 5,
              name: payload.name,
              email: payload.email,
            }),
          1000
        )
      );
    }
  },
};
