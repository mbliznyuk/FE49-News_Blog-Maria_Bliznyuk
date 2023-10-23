import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticlesPage } from "./page/main-page/articles-page";
import { SignInPage } from "./page/sign-in-page/sign-in-page";

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticlesPage />}></Route>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default Root;
