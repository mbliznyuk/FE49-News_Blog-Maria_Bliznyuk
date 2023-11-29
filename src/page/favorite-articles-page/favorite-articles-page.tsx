import { Header } from "../../feateres/header/header";

import { useEffect } from "react";
import { BackLink } from "../../feateres/back-link/back-link";
import { FavoriteArticlesBody } from "../../feateres/favorite-articles-body/favorite-articles-body";
import { getFavoriteArticles } from "../../feateres/favorite-articles-body/favorite-articles.slice";
import { getFavorites } from "../../feateres/post-card/favorites";
import { useAppDispatch, useAppSelector } from "../../hook";
import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";

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
