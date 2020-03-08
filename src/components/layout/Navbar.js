import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Component } from "react";

class Navbar extends Component {
  state = {
    sidebarShow: false
  };

  handleToggle = () => {
    this.setState({ sidebarShow: !this.state.sidebarShow });
  };

  render() {
    const { auth, profile } = this.props;
    const link = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <div>
        <nav className="nav-extended">
          <nav className="nav-wrapper indigo darken-2">
            <div className="container">
              <Link to="/" className="brand-logo">
                React Project
              </Link>
              <span className="sidenav-trigger" onClick={this.handleToggle}>
                <i className="material-icons">menu</i>
              </span>
              <ul className="right hide-on-med-and-down">{link}</ul>
            </div>
          </nav>
        </nav>
        {this.state.sidebarShow ? (
          <div className="side-wrapper" onClick={this.handleToggle}>
            <ul className="side-nav">{link}</ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

export default connect(mapStateToProps)(Navbar);
