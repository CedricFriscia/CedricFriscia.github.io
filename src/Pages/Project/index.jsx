import React from "react";

import "./styles.scss";

const Project = () => {
  return (
    <div id="project" className="project">
      <h3 className="project__title">Project</h3>

      <div className="project__container">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">Netflix Clone Front-End</span>
            </a>

            <p className="desc">
              Le projet est de faire un clone netflix avec React et Scss pour le
              Front et pour le Back-End JWT, API, CRUD
            </p>

            <a href="#" className="action">
              Work In Progress
              <span aria-hidden="true">...</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
