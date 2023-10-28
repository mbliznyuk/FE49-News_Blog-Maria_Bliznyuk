const LIKED_ARTICLE_KEY = "liked_articles_ids";

export function setLikes(payload: number[]): void {
  localStorage.setItem(LIKED_ARTICLE_KEY, JSON.stringify(payload));
}

export function getLikes(): number[] {
  const value = localStorage.getItem(LIKED_ARTICLE_KEY);
  if (value) {
    return JSON.parse(value);
  }
  return [];
}

export function toggle(id: number): void {
  const array = getLikes();
  const index = array.indexOf(id);
  if (index === -1) {
    array.push(index);
  } else {
    array.splice(index, 1);
  }
  setLikes(array);
}

export function isLiked(id: number): boolean {
  return getLikes().includes(id);
}
