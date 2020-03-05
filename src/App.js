import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config/firebaseReact";

import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import ResponsiveDrawer from "./components/Navbar/Navbar";
import PageIsNotFound from "./pages/404/404";

import { Provider } from "react-redux";
import { store } from "./store/configureStore";

import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
 //??????
firebase
  .firestore()
  .enablePersistence()
  .then(function() {
    // Initialize Cloud Firestore through firebase
    const db = firebase.firestore();
  })
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled in one tab at a a time.
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
const db = firebase.firestore();
console.log(db);
db.collection("users")
  .get()
  // .then(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     console.log(doc.data());
  //     const users = doc.data();
      // next_title.innerText = users.next_title;
      // next_desc.innerText = users.next_desc;
      // next_rsvp_url.href = users.next_rsvp_url;
      // recent_title.innerText = users.recent_title;
      // recent_desc.innerText = users.recent_desc;
      // recent_rsvp_url.href = users.recent_rsvp_url;
    });
  });

const App = props => {
  console.log("prop", props);
  const { user, signOut, signInWithGoogle } = props;
  return (
    <Provider store={store}>
      {/* <React.Fragment> */}
      <Header user={user} signOut={signOut} />
      {user && <ResponsiveDrawer />}
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" component={Dashboard} user={user} exact />
          <PublicRoute
            path="/register"
            component={Register}
            user={user}
            signInWithGoogle={signInWithGoogle}
            exact
          />
          <PublicRoute
            path="/login"
            component={Login}
            user={user}
            signInWithGoogle={signInWithGoogle}
            exact
          />
          <Route component={PageIsNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
    /* </React.Fragment> */
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
