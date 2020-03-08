import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, disableAuthError } from "../../store/actions/authActions";
import swal from "sweetalert2";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fristname: "",
    lastname: ""
  };
  handleChage = e => {
    if (this.props.authError) this.props.disableAuthError();
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth } = this.props;
    const { authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    if (authError) {
      swal.fire({
        title: "signup failed",
        text: authError,
        icon: "error"
      });
    }

    return (
      <div className="container ">
        <form
          onSubmit={this.handleSubmit}
          className="card card-border auth-form"
        >
          <div className="card-content">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
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
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" onChange={this.handleChage} />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" onChange={this.handleChage} />
            </div>
            <div className="input-field">
              <button
                className="btn indigo lighten-1 z-depth-0"
                disabled={authError}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return { auth: state.firebase.auth, authError: state.auth.authError };
};

const mapsDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    disableAuthError: () => dispatch(disableAuthError())
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(SignUp);
