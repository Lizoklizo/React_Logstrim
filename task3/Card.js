import React from "react";

const Card = ({ title, body, userName }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p><span>User: </span>{userName}</p>
        </div>
        <div className="card-body">
          <p><span>Title: </span>{title}</p>
          <p><span>Body: </span>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
