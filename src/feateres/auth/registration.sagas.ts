import { call, put, takeLatest } from "typed-redux-saga";
import {
  RegistrationResponse,
  register,
  registerFailure,
  registerSuccess,
} from "./registration.slice";
import { api } from "./api";

export function* registerSaga() {
  yield takeLatest(register, function* registerHandler({ payload }) {
    const data: RegistrationResponse = yield* call(api.register, payload);

    if (data) {
      yield put(registerSuccess(data));
    } else {
      yield put(registerFailure());
    }
  });
}
