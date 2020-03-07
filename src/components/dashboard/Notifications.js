import React from "react";
import moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Notifications = ({ notifications }) => {
  const notifvView = notifications ? (
    notifications.map(item => {
      return (
        <li key={item.id}>
          <span className="indigo-text text-lighten-3">{item.user} </span>
          <span className="white-text">{item.content}</span>
          <div className="grey-text note-date">
            {moment(item.time.toDate()).fromNow()}
          </div>
        </li>
      );
    })
  ) : (
    <li>
      <SkeletonTheme color="#2c3e50" highlightColor="#ecf0f1">
        <span>
          <Skeleton />
        </span>
        <span>
          <Skeleton />
        </span>
        <div>
          <Skeleton />
        </div>
      </SkeletonTheme>
    </li>
  );
  return (
    <div className="section">
      <div className="z-depth-0">
        <div className="card-content">
          <div className="card-title white-text">Notifications</div>
          <ul className="notifications">{notifvView}</ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
