import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import ProjectSkeleton from "./ProjectSkeleton";

const ProjectList = ({ projects }) => {
  if (projects) {
    return (
      <div className="section">
        {projects.map(project => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project}></ProjectSummary>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="section">
        <ProjectSkeleton />
      </div>
    );
  }
};

export default ProjectList;
