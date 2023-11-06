import { Navigate, useParams } from "react-router-dom";
import { ArticlesSearchResultBody } from "../../feateres/articles-search-result-body/articles-search-result-body";
import { Header } from "../../feateres/header/header";

import { MainTemplate } from "../../ui/templates/main-template";

import { useEffect } from "react";
import { getSearchedArticles } from "../../feateres/articles-search-result-body/articles-search-result.slice";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { Title } from "../../ui/title/title";

export const SearchResultPage: React.FC = () => {
  const { searchedTitle } = useParams();
  const dispatch = useAppDispatch();
  const { searchedArticles, isLoading } = useAppSelector(
    ({ searchedArticles }) => searchedArticles
  );

  useEffect(() => {
    dispatch(getSearchedArticles({ searchedTitle: searchedTitle! }));
  }, [dispatch, searchedTitle]);

  if (!searchedTitle || !searchedTitle.trim()) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return CircularColor();
  }

  if (!searchedArticles || searchedArticles.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <MainTemplate
      header={<Header></Header>}
      title={<Title>{`Search results '${searchedTitle}'`}</Title>}
      body={
        <ArticlesSearchResultBody
          articles={searchedArticles}
        ></ArticlesSearchResultBody>
      }
    />
  );
};
