import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./page/main-page/main-page";
import { SignInPage } from "./page/sign-in-page/sign-in-page";

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route path="articles" element={<MainPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default Root;
