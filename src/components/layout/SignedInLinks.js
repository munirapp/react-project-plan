import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <span onClick="{props.signOut}"></span>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return { signOut: () => dispatch(signOut()) };
};

export default connect(null, mapDispatchToProps)(SignedIn);
