export type Tokens = {
  access: string;
  refresh: string;
};

export type AllPostsResponseResult = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};
