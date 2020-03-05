import { put, takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions/user";
import * as actionCreators from "../action-creators/user";
import rsf from "../saga-firebase";

export function* getUser() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "users");

    let users = [];
    snapshot.forEach(user => {
      users.push({ docId: user.id, ...user.data() });
    });

    yield put(actionCreators.getUserSuccess(users));
  } catch (error) {
    console.log("getUser error: ", error);
  }
}

function* updateUser(id, data) {
  try {
    yield call(rsf.firestore.updateDocument, `users/${id}`, ...data);
  } catch (error) {
    console.log("updateUser error: ", error);
  }
  // yield put(actionCreators.updateUserSuccess);
}

export default function* userSaga() {
  yield takeLatest(actions.GET_USER, getUser);
  yield takeLatest(actions.UPDATE_USER, updateUser);
}
