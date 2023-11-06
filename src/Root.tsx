import { Route, Routes } from "react-router-dom";
import "./App.css";

import { PostsPage } from "./page/posts-page/posts-page";
import { SearchResultPage } from "./page/search-result-page/search-result-page";
import { SelectedArticlePge } from "./page/selected-article-page/selected-article-page";
import { SignInPage } from "./page/sign-in-page/sign-in-page";

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage />}></Route>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<SelectedArticlePge />} />
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
