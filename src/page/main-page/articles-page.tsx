import { useEffect } from "react";
import { ArticlesList } from "../../feateres/articles-list/articles-list";
import { Header } from "../../feateres/header/header";
import { useAppDispatch, useAppSelector } from "../../hook";
import { MainTemplate } from "../../ui/templates/main-template";
import { Title } from "../../ui/title/title";
import { getArticles } from "../../feateres/articles-list/articles-list.slice";
import CircularColor from "../../ui/progreass/progress";

export const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles, isLoading } = useAppSelector(({ articles }) => articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (isLoading) {
    return CircularColor();
  }

  if (articles.length === 0) {
    return <div>No posts</div>;
  }

  return (
    <MainTemplate
      header={<Header></Header>}
      title={<Title>Blog</Title>}
      body={<ArticlesList articles={articles} />}
    />
  );
};
