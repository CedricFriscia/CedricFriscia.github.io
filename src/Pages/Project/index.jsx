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
        <div className="card">
          <div className="image-party"></div>
          <div className="content">
            <a href="#">
              <span className="title">Party</span>
            </a>

            <p className="desc">
              Une application qui permet de créer des événements et d'inviter
              vos proches. Video du projet Apothéose.
            </p>

            <a
              href="https://www.youtube.com/watch?v=5RN9SH2qkLE"
              className="action"
              target="_blank"
            >
              Show the video
              <span aria-hidden="true">...</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
