import React, { Fragment } from "react";
import Header from "./client/header";
import Footer from "./client/footer";

const ClientLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default ClientLayout;
