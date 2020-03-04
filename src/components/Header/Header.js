import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import "./Header.css";

const Header = ({ user, signOut }) => {
  const getLogginState = () => {
    return user ? (
      <>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Button style={{ color: "#fff" }} onClick={signOut}>
          Log Out
        </Button>
      </>
    ) : (
      <>
        <Button href="/login" color="inherit">
          Login
        </Button>
        <Button href="/register" color="inherit">
          Sign Up
        </Button>
      </>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">React Firebase App</Typography>
        <div>{getLogginState()}</div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
