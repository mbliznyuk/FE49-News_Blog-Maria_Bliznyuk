import { Navigate, useParams } from "react-router-dom";
import { ArticlesSearchResultBody } from "../../feateres/articles-search-result-body/articles-search-result-body";
import { Header } from "../../feateres/header/header";

import { MainTemplate } from "../../ui/templates/main-template";

import { useEffect } from "react";
import { getSearchedArticles } from "../../feateres/articles-search-result-body/articles-search-result.slice";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { Title } from "../../ui/title/title";
import { FavoriteArticlesBody } from "../../feateres/favorite-articles-body/favorite-articles-body";
import { getFavoriteArticles } from "../../feateres/favorite-articles-body/favorite-articles.slice";
import { getFavorites } from "../../feateres/post-card/favorites";
import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { BackLink } from "../../feateres/back-link/back-link";

export const FavoriteArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favoriteArticles, isLoading } = useAppSelector(
    ({ fdvoriteArticles }) => fdvoriteArticles
  );

  useEffect(() => {
    dispatch(getFavoriteArticles());
  }, [dispatch]);

  const favoriteArticlesIds = getFavorites();
  function getFavoriteArticlesArray() {
    return favoriteArticles.filter((element) =>
      favoriteArticlesIds.includes(element.id)
    );
  }

  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink />}
      title={<Title>My Favorites</Title>}
      body={
        <FavoriteArticlesBody
          posts={getFavoriteArticlesArray()}
          isLoading={isLoading}
        ></FavoriteArticlesBody>
      }
    />
  );
};
