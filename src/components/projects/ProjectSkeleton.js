import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="card card-border">
      <div className="card-content">
        <div className="card-title indigo-text">
          <Skeleton />
        </div>
        <div className="card-action">
          <span className="grey-text">
            <Skeleton />
          </span>
          <p className="grey-text text-darken-3">
            <Skeleton />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
