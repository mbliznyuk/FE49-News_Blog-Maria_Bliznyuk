import { baseUrl, jsonContentTypeHeaders } from './constants';
import { getTokens, setTokens } from './tokens';

export const request: typeof fetch = (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  return fetch(input, init).then((response) => {
    const refresh = getTokens()?.refresh;
    if (response.status === 401) {
      return fetch(baseUrl + 'auth/jwt/refresh/', {
        method: 'POST',
        headers: {
          ...jsonContentTypeHeaders,
        },
        body: JSON.stringify({ refresh: refresh }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Server_ERROR');
          }
          return response.json();
        })
        .then((result) => {
          setTokens({ access: result.access, refresh: refresh! });
        })
        .then(() => {
          return fetch(input, init);
        });
    }
    return response;
  });
};
