import { useEffect } from "react";
import { getArticles } from "../../feateres/articles-list/articles-list.slice";
import { Header } from "../../feateres/header/header";
import { getNews } from "../../feateres/news-list/news-list.slice";
import { PostsPageBody } from "../../feateres/posts-page-body/posts-page-body";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { MainTemplate } from "../../ui/templates/main-template";
import { Title } from "../../ui/title/title";

export const PostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const articlesSelector = useAppSelector(({ articles }) => articles);
  const newsSelector = useAppSelector(({ news }) => news);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (articlesSelector.isLoading || newsSelector.isLoading) {
    return CircularColor();
  }

  return (
    <MainTemplate
      header={<Header></Header>}
      title={<Title>Blog</Title>}
      body={
        <PostsPageBody
          articles={articlesSelector.articles}
          news={newsSelector.news}
        />
      }
    />
  );
};
