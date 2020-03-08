import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

const ProjectDetails = props => {
  const { detail, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (detail) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title indigo-text">
              <i className="material-icons">ac_unit</i> {detail.title}
            </span>
            <p>{detail.content}</p>
          </div>
          <div className="card-action grey lighten-4">
            <div className="indigo-text">{detail.authorFirstName}</div>
            <div className="grey-text text-darken-4">
              {moment(detail.createdAt.toDate())
                .startOf("hour")
                .fromNow()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title indigo-text">
              <Skeleton />
            </span>
            <p>
              <Skeleton />
            </p>
          </div>
          <div className="card-action grey lighten-4">
            <div className="indigo-text">
              <Skeleton />
            </div>
            <div className="grey-text text-darken-4">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const list_projects = state.firestore.data.projects;
  const project_details = list_projects ? list_projects[id] : null;
  return {
    detail: project_details,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
