import React from "react";
import Typography from "@material-ui/core/Typography";

import "./404.css";

const PageIsNotFound = () => {
  return (
    <div className="page-is-not-found">
      <Typography variant="h4" component="h2" style={{ textAlign: "center" }}>
        404 Page is not found
      </Typography>
    </div>
  );
};

export default PageIsNotFound;
