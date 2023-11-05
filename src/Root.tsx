import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ArticlesPage } from "./page/articles-page/articles-page";
import { SearchResultPage } from "./page/search-result-page/search-result-page";
import { SelectedArticlePge } from "./page/selected-article-page/selected-article-page";
import { SignInPage } from "./page/sign-in-page/sign-in-page";

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticlesPage />}></Route>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:articleId" element={<SelectedArticlePge />} />
        <Route
          path="/articles/searched/:searchedTitle"
          element={<SearchResultPage />}
        />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default Root;
