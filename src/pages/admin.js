import React from "react";
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
        <h2>Mon nom: {userData?.username}</h2>
        <h2>Mon email: {userData?.email}</h2>
      </div>
    </div>
  );
};

export default Admin;
