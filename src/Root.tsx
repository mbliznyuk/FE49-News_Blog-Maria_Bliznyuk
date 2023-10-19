import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./page/main-page/main-page";

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route path="articles" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default Root;
