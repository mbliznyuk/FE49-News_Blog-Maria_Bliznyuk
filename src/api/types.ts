export type AllArticlesResponse = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AllArticlesResponseResult[];
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

export type ArticleCardModel = {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
  text: string;
};

export type SelectedArticleResponse = {
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
