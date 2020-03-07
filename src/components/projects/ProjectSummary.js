import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card card-border">
      <div className="card-content ">
        <span className="card-title indigo-text">
          <i className="material-icons">ac_unit</i>
          {project.title}
        </span>
      </div>
      <div className="card-action">
        <span className="grey-text">Author: {project.authorFirstName}</span>
        <p className="grey-text text-darken-3">
          {moment(project.createdAt.toDate()).format("DD MMM YYYY")}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
