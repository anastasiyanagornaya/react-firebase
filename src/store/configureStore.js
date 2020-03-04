import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "../reducer/reducer";
import saga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);