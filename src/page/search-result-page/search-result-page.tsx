import { Navigate, useParams } from "react-router-dom";
import { Header } from "../../feateres/header/header";
import { SearchResaultBody } from "../../feateres/search-result-body/search-result-body";

import { MainTemplate } from "../../ui/templates/main-template";

import { Title } from "../../ui/title/title";
import { useEffect } from "react";
import { getSelectedArticle } from "../../feateres/selected-article/selected-article.slice";
import { useAppDispatch, useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { getSearchedArticles } from "../../feateres/search-result-body/search-result.slice";

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
      body={<SearchResaultBody articles={searchedArticles}></SearchResaultBody>}
    />
  );
};
