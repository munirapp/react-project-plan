import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { projects, notifications } = this.props;
    const notifView = notifications ? (
      <Notifications notifications={notifications}></Notifications>
    ) : (
      <div className="section">
        <div className="card card-border">
          <div className="card-content">
            <span className="indigo-text">Login first</span>
            <br />
            <span>to see notifications</span>
          </div>
        </div>
      </div>
    );

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 project-list">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m6">{notifView}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state.firebase;
  const notifications = auth.uid ? state.firestore.ordered.notifications : null;
  return {
    projects: state.firestore.ordered.projects,
    notifications: notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", limit: 5, orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
