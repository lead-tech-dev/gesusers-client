import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const userData = useSelector((state) => {
    return state.auth.userData;
  });
  return (
    <div className="container">
      <div
        className="home-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {userData === null ? (
          "...chargement"
        ) : (
          <Fragment>
            <h2>Mon nom: {userData.username}</h2>
            <h2>Mon email: {userData.email}</h2>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Admin;
