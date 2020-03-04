import { put, takeLatest } from "redux-saga/effects";

export default function* getUser() {
  let response = yield fetch("https://", {
    method: "GET",
    headers: new Headers({
      "access-token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid")
    })
  });
  let data = yield response.json();
  yield put({ type: "GET_USER_SUCCESS", payload: data });
}

function* updateUser(action) {
  let response = yield fetch(`https://${action.body.id}`, {
    method: "PUT",
    body: JSON.stringify(action.body.message),
    headers: new Headers({
      "content-type": "application/json",
      "access-token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid")
    })
  });
  let data = yield response.json();
  yield put({ type: "UPDATE_USER_SUCCESS" });
}

export default function* userSaga() {
  yield takeLatest("GET_USER", getUser);
  yield takeLatest("UPDATE_USER", updateUser);
}
