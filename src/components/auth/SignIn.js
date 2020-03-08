import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, disableAuthError } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChage = e => {
    if (this.props.authError) this.props.disableAuthError();
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    const { authError } = this.props;

    if (authError) {
      swal.fire({
        title: authError,
        text: "wrong password/username",
        icon: "error"
      });
    }

    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="card auth-form card-border"
        >
          <div className="card-content">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChage} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChage}
              />
            </div>
            <div className="input-field">
              <button
                className="btn indigo lighten-1 z-depth-0"
                disabled={authError}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    disableAuthError: () => dispatch(disableAuthError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
