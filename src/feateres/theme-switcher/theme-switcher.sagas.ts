import { takeLatest } from "typed-redux-saga";
import { setIsDark } from "./theme-switcher.slice";

export function* themeSwitcherSaga() {
  yield takeLatest(setIsDark, function* setIsDarkHandler({ payload }) {
    document.querySelector(".App")?.classList.toggle("dark", payload);
  });
}
