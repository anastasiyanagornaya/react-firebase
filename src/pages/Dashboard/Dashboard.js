import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { updateUser } from "../../store/action-creators/user";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import "./Dashboard.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }
}));

const Dashboard = props => {
  const { first_name, last_name } = props.user.user;
  const { isFormShow } = props.user;
  console.log("user", props.user);
  const [reduct, setReduct] = useState(false);
  const [{ name, surname }, setName] = useState({});

  const dispatch = useDispatch();

  const handleReduct = () => {
    setReduct(true);
  };

  const handleCancel = () => {
    setReduct(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setName({
      [name]: value
    });
  };

  const handleSave = () => {
    let newName = { name, surname };
    console.log(newName);
    dispatch(updateUser({ newName }));
    setReduct(false);
  };

  const classes = useStyles();
  return (
    isFormShow && (
      <div className="dashboard">
        {reduct ? (
          <div className="dashboard-form">
            <div className={classes.root}>
              <TextField
                id="outlined-password-input"
                label="first name"
                name="name"
                type="text"
                variant="outlined"
                fullWidth={true}
                onChange={handleChange}
                defaultValue={first_name}
              />
              <br />
              <TextField
                id="outlined-password-input"
                label="last name"
                name="surname"
                type="text"
                variant="outlined"
                fullWidth={true}
                onChange={handleChange}
                defaultValue={last_name}
              />
            </div>
            <div className={classes.root}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="controlled-buttons"
                onClick={handleSave}
              >
                save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="controlled-buttons"
                onClick={handleCancel}
              >
                cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="dashboard-form">
            <span>{first_name}</span>
            <span>{last_name}</span>
            <Button variant="contained" color="primary" onClick={handleReduct}>
              edit
            </Button>
          </div>
        )}
      </div>
    )
  );
};

const mapStateToProps = store => {
  return {
    user: store
  };
};

export default connect(mapStateToProps)(Dashboard);
