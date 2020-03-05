import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Register.css";

const Register = ({ signInWithGoogle }) => {
  return (
    <div className="register-form">
      <Typography variant="h4" component="h2" style={{ textAlign: "center" }}>
        Register
      </Typography>
      <FormControl>
        <TextField id="outlined-basic" type="text" label="login" />
        <TextField id="outlined-basic" type="email" label="email" />
        <TextField
          id="standard-password-input"
          label="password"
          type="password"
        />
        <TextField
          id="standard-password-input"
          label="confirm password"
          type="password"
        />
        <div className="btn-submit">
          <Button
            style={{ marginTop: "20px", marginRight: "20px", width: "60%" }}
            type="submit"
            className="login-submit button"
            variant="contained"
            color="primary"
            size="large"
          >
            Register
          </Button>
          <Button
            style={{ marginTop: "20px", width: "60%" }}
            type="submit"
            className="login-submit button"
            variant="contained"
            color="primary"
            size="large"
            onClick={signInWithGoogle}
          >
            Register with Google
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default Register;
