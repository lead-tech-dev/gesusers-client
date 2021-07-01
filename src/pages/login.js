import React, { Component } from "react";
import { connect } from "react-redux";
import TextInput from "../components/form/textInput";
import { Field, reduxForm } from "redux-form";
import { login } from "../redux/actions/authAction";

class Login extends Component {
  handleLogin = ({ username, password }) => {
    const { login } = this.props;

    return login(username, password).then(() => {
      this.props.reset();
    });
  };

  render() {
    const { handleSubmit, submitting, error } = this.props;
    console.log(error);
    return (
      <div className="container">
        <div className="row">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit(this.handleLogin)}>
              <h1>Se connecter</h1>
              <span className="error">{error}</span>
              <label>
                Nom d'utilisateur:
                <Field name="username" type="text" component={TextInput} />
              </label>

              <label>
                Mot de passe:
                <Field name="password" type="password" component={TextInput} />
              </label>

              <button disabled={submitting}>
                {submitting ? "...Chargement" : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  login,
};

export default connect(
  null,
  mapActionsToProps
)(reduxForm({ form: "LoginForm" })(Login));
