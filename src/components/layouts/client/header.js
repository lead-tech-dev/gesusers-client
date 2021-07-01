import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../../redux/actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => {
    return state.auth.authenticated;
  });

  const userData = useSelector((state) => {
    return state.auth.userData;
  });

  const handleLogout = () => {
    dispatch(userLogout());
  };

  console.log(auth);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to="/">Ges Users</Link>
        </div>
        {auth ? (
          userData === null ? (
            "...chargement"
          ) : (
            <div className="auth">
              <Link to="/admin">Mon Compte ({userData?.username}) </Link>
              <Link to="#" onClick={handleLogout}>
                Deconnexion
              </Link>
            </div>
          )
        ) : (
          <div className="auth">
            <Link to="/login">Connexion</Link>
            <Link to="/register">Créer un compte</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
