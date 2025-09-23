import React from "react";
import { Link } from "react-router-dom";

const card = ({ title, link, icon, description }) => {
  return (
    <div className="card">
      {icon && <div className="icon-wrapper">{icon}</div>}
      <Link to={link} className="card-link">
        <h3>{title}</h3>
      </Link>
      {description && <p>{description}</p>}
    </div>
  );
};

export default card;
