import React from "react";

import "./styles.scss";

const Project = () => {
  return (
    <div id="project" className="project">
      <h3 className="project__title">Project</h3>

      <div className="project__container">
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
        <div className="card">
          <div className="image-nissa"></div>
          <div className="content">
            <a href="#">
              <span className="title">Mieu Nissa</span>
            </a>

            <p className="desc">
              Un petit site vitrine pour la ville de nice qui rassemble quelque
              image de lieux a visiter ou encore parle de l'ogcnice.
            </p>

            <a
              href="https://nissa-f3cwjln9p-cedricfriscia.vercel.app"
              className="action"
              target="_blank"
            >
              Direction Mieu Nissa
              <span aria-hidden="true">...</span>
            </a>
          </div>
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <a href="#">
                <span className="title">Defi's jeunes</span>
              </a>

              <p className="desc">
                J'ai créer un site pour pole emploi pour le projet défi's
              </p>

              <a
                href="https://defie-jeune.vercel.app/"
                className="action"
                target="_blank"
              >
                Direction Defi's jeune
                <span aria-hidden="true">...</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
