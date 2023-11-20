export function setLogin(login: string) {
  localStorage.setItem("login", JSON.stringify(login));
}

export function getLogin(): string | null {
  const value = localStorage.getItem("login");
  if (value) {
    return JSON.parse(value);
  }
  return null;
}
