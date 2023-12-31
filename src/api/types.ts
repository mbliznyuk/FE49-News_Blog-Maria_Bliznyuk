export type AllArticlesResponse = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AllArticlesResponseResult[];
};

export type AllNewsResponse = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AllArticlesResponseResult[];
};

export type AllNewsResponseResult = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
};
export type AllArticlesResponseResult = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
};

export type PostCardModel = {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
  text: string;
};

export type SelectedPostResponse = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
};

export type AuthorisationPayload = {
  email: string;
  password: string;
};

export type AuthorisationResponse = {
  success: boolean;
  name: string;
};
