import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const AuthRoute = ({
  component: Component,
  layout: Layout,
  authenticated,
  location,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )}
        </Layout>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
