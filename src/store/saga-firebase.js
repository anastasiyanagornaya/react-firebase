import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { firebaseApp } from "../config/firebase-init";

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf