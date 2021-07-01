import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const HideRoute = ({
  component: Component,
  layout: Layout,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {authenticated  ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
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

export default connect(mapStateToProps, null)(HideRoute);
