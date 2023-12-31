import { Navigate, useParams } from "react-router-dom";
import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { SelectedArticle } from "../../feateres/selected-article/selected-article";

import { useEffect } from "react";
import { getRecommendedArticles } from "../../feateres/recommended-posts/recommended-articles/recommended-articles.slice";
import { getSelectedArticle } from "../../feateres/selected-article/selected-article.slice";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";

export const SelectedArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const dispatch = useAppDispatch();
  const { selectedArticle, isLoading } = useAppSelector(
    ({ selectedArticle }) => selectedArticle
  );
  const { recommendedArticles } = useAppSelector(
    ({ recommendedArticles }) => recommendedArticles
  );

  useEffect(() => {
    dispatch(getSelectedArticle({ articleId: articleId! }));
    dispatch(getRecommendedArticles());
  }, [dispatch, articleId]);

  if (!Number.isFinite(Number(articleId))) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return CircularColor();
  }

  if (!selectedArticle || Object.keys(selectedArticle).length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink></BackLink>}
      title={<Title>{selectedArticle.title}</Title>}
      body={
        <SelectedArticle
          article={selectedArticle}
          recommendedArticles={recommendedArticles}
          isLoading={false}
        ></SelectedArticle>
      }
    />
  );
};
