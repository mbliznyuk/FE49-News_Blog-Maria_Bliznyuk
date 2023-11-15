import { Navigate, useParams } from "react-router-dom";
import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { SelectedArticle } from "../../feateres/selected-article/selected-article";

import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getSelectedArticle } from "../../feateres/selected-article/selected-article.slice";
import CircularColor from "../../ui/progreass/progress";
import { getRecommendedArticles } from "../../feateres/recommended-posts/recommended-articles/recommended-articles.slice";
import { getRecommendedNews } from "../../feateres/recommended-posts/recommended-news/recommended-news.slice";
import { getSelectedNews } from "../../feateres/selected-news/selected-news.slice";
import { SelectedNews } from "../../feateres/selected-news/selected-news";

export const SelectedNewsPage: React.FC = () => {
  const { newsId } = useParams();
  const dispatch = useAppDispatch();
  const { selectedNews, isLoading } = useAppSelector(
    ({ selectedNews }) => selectedNews
  );
  const { recommendedNews } = useAppSelector(
    ({ recommendedNews }) => recommendedNews
  );

  useEffect(() => {
    dispatch(getSelectedNews({ newsId: newsId! }));
    dispatch(getRecommendedNews());
  }, [dispatch, newsId]);

  if (!Number.isFinite(Number(newsId))) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return CircularColor();
  }

  if (!selectedNews || Object.keys(selectedNews).length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink></BackLink>}
      title={<Title>{selectedNews.title}</Title>}
      body={
        <SelectedNews
          news={selectedNews}
          recommendedNews={recommendedNews}
          isLoading={false}
        ></SelectedNews>
      }
    />
  );
};
