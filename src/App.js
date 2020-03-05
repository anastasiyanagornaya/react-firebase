import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import { firebaseApp } from "./config/firebase-init";
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

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const App = props => {
  console.log("prop", props);
  const { user, signOut, signInWithGoogle } = props;
  return (
    <Provider store={store}>
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
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
