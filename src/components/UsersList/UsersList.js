import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditForm from "../../components/EditForm/EditForm";

import "./UserList.css";

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 10px"
  },
  card: {
    marginRight: "10px"
  }
}));

export default function UsersList({ users }) {
  const classes = useStyles();

  const [user, setUser] = useState({});
  const [isEdit, setEdit] = useState(false);

  const handleEdit = user => {
    setUser(user);
    setEdit(true);
  };

  const handleClose = () => {
    setEdit(!isEdit);
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.docId}>
          <Card className={classes.card}>
            <CardActionArea className={classes.root}>
              <Typography gutterBottom variant="h5" component="h2">
                <div className="user-info">
                  {user.first_name} {user.last_name && user.last_name}
                </div>
              </Typography>
            </CardActionArea>
          </Card>
          <Button
            variant="contained"
            color="primary"
            className="controlled-buttons"
            onClick={() => handleEdit(user)}
          >
            edit
          </Button>
        </li>
      ))}
      {isEdit && <EditForm handleClose={handleClose} user={user} />}
    </ul>
  );
}
