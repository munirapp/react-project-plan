import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetails = props => {
  const { detail } = props;
  if (detail) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{detail.title}</span>
            <p>{detail.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{detail.authorFirstName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading...</div>;
  }
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const list_projects = state.firestore.data.projects;
  const project_details = list_projects ? list_projects[id] : null;
  return {
    detail: project_details
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
