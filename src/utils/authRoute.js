import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const routes = {
  auth: ["/", "/admin"],
  public: ["/", "/login", "/register"],
};

const AuthRoute = ({
  component: Component,
  layout: Layout,
  authenticated,
  location,
  ...rest
}) => {
  console.log(location.pathname);
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {authenticated ? (
            routes.auth.includes(location.pathname) ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          ) : routes.public.includes(location.pathname) ? (
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
