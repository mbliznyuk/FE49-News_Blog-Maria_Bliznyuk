import { useEffect } from "react";
import { getArticles } from "../../feateres/articles-list/articles-list.slice";
import { Header } from "../../feateres/header/header";
import { getNews } from "../../feateres/news-list/news-list.slice";
import { PostsPageBody } from "../../feateres/posts-page-body/posts-page-body";
import { useAppDispatch, useAppSelector } from "../../hook";
import { MainTemplate } from "../../ui/templates/main-template";
import { Title } from "../../ui/title/title";

export const PostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const articlesSelector = useAppSelector(({ articles }) => articles);
  const newsSelector = useAppSelector(({ news }) => news);
  const sortMenuSelector = useAppSelector(({ sortMenu }) => sortMenu);
  const periodSelector = useAppSelector(({ filterButton }) => filterButton);

  useEffect(() => {
    dispatch(
      getArticles({
        period: periodSelector.activFilterButton,
        sortBy: sortMenuSelector.activeSortOption,
      })
    );
  }, [dispatch, periodSelector, sortMenuSelector]);

  useEffect(() => {
    dispatch(
      getNews({
        period: periodSelector.activFilterButton,
        sortBy: sortMenuSelector.activeSortOption,
      })
    );
  }, [dispatch, periodSelector, sortMenuSelector]);

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
