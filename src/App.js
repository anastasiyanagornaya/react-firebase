import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config/firebaseReact";

import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PageIsNotFound from "./pages/404/404";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <React.Fragment>
      <Header user={user} signOut={signOut} />
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            user={user}
            exact
          />
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
    </React.Fragment>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
