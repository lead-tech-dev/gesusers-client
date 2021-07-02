import { render } from "@testing-library/react";
import React, { lazy, Suspense, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from ".";
import ClientLayout from "./components/layouts/clientLayout";
import ScrollTop from "./helpers/scroll-top";
import { SET_AUTHENTICATED } from "./redux/types";
import { requests } from "./utils/agent";

import {
  userProfileFetch,
  userSetId,
  userLogout,
} from "./redux/actions/authAction";

const AuthRoute = lazy(() => import("./utils/authRoute"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Admin = lazy(() => import("./pages/admin"));

class App extends React.Component {
  constructor(props) {
    super(props);

    const token = window.localStorage.getItem("jwtToken");
    const userId = window.localStorage.getItem("userId");
    if (token) {
      console.log(props);
      store.dispatch({ type: SET_AUTHENTICATED });
      requests.setToken(token);
      store.dispatch(userProfileFetch(userId));
    }
  }

  componentDidMount() {
    const userId = window.localStorage.getItem("userId");
    const { userSetId } = this.props;
    if (userId) {
      userSetId(userId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userId, userData, userProfileFetch } = this.props;
    if (prevProps.userId !== userId && userId !== null && userData === null) {
      userProfileFetch(userId);
    }
  }

  render() {
    return (
      <Router>
        <ScrollTop>
          <Suspense
            fallback={
              <div className="gesusers-preloader-wrapper">
                <div className="gesusers-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Switch>
              <AuthRoute
                exact
                path="/"
                component={Home}
                layout={ClientLayout}
              />
              <AuthRoute
                path="/login"
                component={Login}
                layout={ClientLayout}
              />
              <AuthRoute
                path="/register"
                component={Register}
                layout={ClientLayout}
              />

              <AuthRoute
                path="/admin"
                component={Admin}
                layout={ClientLayout}
              />
              <AuthRoute layout={ClientLayout} />
            </Switch>
          </Suspense>
        </ScrollTop>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  userProfileFetch,
  userSetId,
  userLogout,
};

export default connect(null, mapDispatchToProps)(App);
