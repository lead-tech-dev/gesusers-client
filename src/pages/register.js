import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextInput from "../components/form/textInput";
import { register } from "../redux/actions/authAction";

class Register extends React.Component {
  handleRegister = ({ username, email, password, retypedPassword }) => {
    return this.props
      .register(username, email, password, retypedPassword)
      .then(() => {
        this.props.reset();
      });
  };
  render() {
    const { submitting, error } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="form-wrapper">
            <form onSubmit={this.props.handleSubmit(this.handleRegister)}>
              <h1>Créer votre compte</h1>

              <label>
                Nom d'utilisateur:
                <Field name="username" type="text" component={TextInput} />
              </label>

              <label>
                Email:
                <Field name="email" type="email" component={TextInput} />
              </label>

              <label>
                Mot de passe:
                <Field name="password" type="password" component={TextInput} />
              </label>

              <label>
                Retapez le mot de passe:
                <Field
                  name="retypedPassword"
                  type="password"
                  component={TextInput}
                />
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
  register,
};

export default connect(
  null,
  mapActionsToProps
)(reduxForm({ form: "RegisterForm" })(Register));
