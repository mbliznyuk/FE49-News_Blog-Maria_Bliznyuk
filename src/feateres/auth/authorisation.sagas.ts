import { call, put, takeLatest } from "typed-redux-saga";
import {
  authorise,
  authoriseFailure,
  authoriseSuccess,
} from "./authorisation.slice";
import { setLogin } from "../../api/local-storage-login";
import { api } from "./api";

export function* authorisationSaga() {
  yield takeLatest(authorise, function* activateHandler({ payload }) {
    const response = yield* call(api.authorise, payload);
    if (response && response.success) {
      yield call(setLogin, response.login);
      yield put(authoriseSuccess());
    } else {
      yield put(authoriseFailure());
    }
  });
}
