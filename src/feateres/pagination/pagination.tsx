import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { getArticles } from "../articles-list/articles-list.slice";
import { getSearchedArticles } from "../articles-search-result-body/articles-search-result.slice";
import { getNews } from "../news-list/news-list.slice";
import { ARTICLES, NEWS } from "../tabs/tab.slice";
import { useAppDispatch, useAppSelector } from "../../hook";

export function getPageNumberFromUrlQuery(): number {
  const queryParameters = new URLSearchParams(window.location.search);
  return Number(queryParameters.get("page")) || 1;
}

export function getPageNumberFromSearchParam(
  searchParams: URLSearchParams
): number {
  return Number(searchParams.get("page")) || 1;
}

export const PostPagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortMenuSelector = useAppSelector(({ sortMenu }) => sortMenu);
  const periodSelector = useAppSelector(({ filterButton }) => filterButton);
  const articlesTotalPages = useAppSelector(
    (state) => state.articles.articlesTotalPages
  );
  const searchedArticlesTotalPages = useAppSelector(
    (state) => state.searchedArticles.searchedArticlesTotalPages
  );
  const newsTotalPages = useAppSelector((state) => state.news.newsTotalPages);
  const { activeTab } = useAppSelector((state) => state.tabs);
  const isSearchedPage = window.location.pathname.includes("/searched");
  const { searchedTitle } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = React.useState(
    getPageNumberFromSearchParam(searchParams)
  );

  if (page !== getPageNumberFromSearchParam(searchParams)) {
    setPage(getPageNumberFromSearchParam(searchParams));
  }

  const getTotalPages = (): number => {
    if (isSearchedPage) {
      return searchedArticlesTotalPages;
    }
    switch (activeTab) {
      case ARTICLES:
        return articlesTotalPages;
      case NEWS:
        return newsTotalPages;
      default:
        return articlesTotalPages;
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setSearchParams((params) => {
      params.set("page", "" + value);
      return params;
    });
    if (activeTab === ARTICLES && !isSearchedPage) {
      dispatch(
        getArticles({
          period: periodSelector.activFilterButton,
          sortBy: sortMenuSelector.activeSortOption,
        })
      );
    }
    if (activeTab === NEWS && !isSearchedPage) {
      dispatch(
        getNews({
          period: periodSelector.activFilterButton,
          sortBy: sortMenuSelector.activeSortOption,
        })
      );
    }
    if (isSearchedPage) {
      dispatch(getSearchedArticles({ searchedTitle: searchedTitle! }));
    }
  };

  return (
    <PaginationWraper>
      <Stack spacing={2}>
        <Pagination
          count={getTotalPages()}
          color="secondary"
          page={page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                color: "var(--text-primary-color)",
              }}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </PaginationWraper>
  );
};

const PaginationWraper = styled.div`
  margin: auto;
  height: 50px;
`;
