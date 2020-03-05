import * as firebase from "firebase/app";
import firebaseConfig from "./index";
import "firebase/auth";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
