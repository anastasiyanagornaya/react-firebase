import { put, takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions/user";
import * as actionCreators from "../action-creators/user";
import rsf from "../saga-firebase";

export function* getUser() {
  const snapshot = yield call(rsf.firestore.getCollection, "users");

  let users;
  snapshot.forEach(user => {
    users = {
      ...users,
      [user.id]: user.data()
    };
  });
  console.log("users", users);
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
  yield put(actionCreators.updateUserSuccess);
}

export default function* userSaga() {
  yield takeLatest(actions.GET_USER, getUser);
  yield takeLatest(actions.UPDATE_USER, updateUser);
}
