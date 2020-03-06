import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { updateUser } from "../../store/action-creators/user";

import "./EditForm.css";

export default function EditForm({
  user: { first_name, last_name, docId },
  handleClose
}) {
  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    }
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  const [{ name, surname }, setName] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setName({
      [name]: value
    });
  };

  const handleUpdate = () => {
    if (first_name === name && last_name === surname) return;
    const updatedUser = { first_name: name, last_name: surname, id: docId };

    if (!name) updatedUser.first_name = first_name;
    if (!surname) updatedUser.last_name = last_name;
    console.log(updatedUser);
    dispatch(updateUser(updatedUser));
    handleClose();
  };

  return (
    <div className="edit-form">
      <div className={classes.root}>
        <TextField
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
          onClick={handleUpdate}
        >
          update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="controlled-buttons"
          onClick={handleClose}
        >
          cancel
        </Button>
      </div>
    </div>
  );
}
