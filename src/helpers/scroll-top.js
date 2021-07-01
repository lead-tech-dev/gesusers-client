import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return children;
};

export default withRouter(ScrollTop);
