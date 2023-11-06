const LIKED_ARTICLE_KEY = "liked_articles_ids";

export function setFavorites(payload: number[]): void {
  localStorage.setItem(LIKED_ARTICLE_KEY, JSON.stringify(payload));
}

export function getFavorites(): number[] {
  const value = localStorage.getItem(LIKED_ARTICLE_KEY);
  if (value) {
    return JSON.parse(value);
  }
  return [];
}

export function toggle(id: number): void {
  const array = getFavorites();
  const index = array.indexOf(id);
  if (index === -1) {
    array.push(id);
  } else {
    array.splice(index, 1);
  }
  setFavorites(array);
}

export function isFavorided(id: number): boolean {
  return getFavorites().includes(id);
}
