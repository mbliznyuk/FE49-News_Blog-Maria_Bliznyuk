import { useEffect } from "react";
import { getArticles } from "../../feateres/articles-list/articles-list.slice";
import { Header } from "../../feateres/header/header";
import { getNews } from "../../feateres/news-list/news-list.slice";
import { PostsPageBody } from "../../feateres/posts-page-body/posts-page-body";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { MainTemplate } from "../../ui/templates/main-template";
import { Title } from "../../ui/title/title";
import { WEEK } from "../../feateres/date-filter-button/date-filter-button.slice";
import { Stack, CircularProgress } from "@mui/material";

export const PostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const articlesSelector = useAppSelector(({ articles }) => articles);
  const newsSelector = useAppSelector(({ news }) => news);
  useEffect(() => {
    dispatch(
      getArticles({
        period: WEEK,
        sortBy: "PUBLISHED_AT",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews({ period: WEEK }));
  }, [dispatch]);

  return (
    <MainTemplate
      header={<Header></Header>}
      title={<Title>Blog</Title>}
      body={
        <PostsPageBody
          articles={articlesSelector.articles}
          news={newsSelector.news}
          isLoading={articlesSelector.isLoading || newsSelector.isLoading}
        />
      }
    />
  );
};
