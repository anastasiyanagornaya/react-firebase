import React from "react";
import { connect } from "react-redux";

import UsersList from "../../components/UsersList/UsersList";

import "./Dashboard.css";

const Dashboard = ({ users, isFormShow }) => {
  // console.log("users Dashboard", users);

  if (!isFormShow) return <div>Press My Profile button</div>;
  return (
    isFormShow && (
      <div className="dashboard">
        {users.length && <UsersList users={users} />}
      </div>
    )
  );
};

const mapStateToProps = store => ({
  users: store.users,
  isFormShow: store.isFormShow
});

export default connect(mapStateToProps)(Dashboard);
