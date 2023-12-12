import React, { useState } from "react";

import "./styles.scss";

const Project = () => {
  const [button, setButton] = useState(false);

  const handleHover = () => {
    setButton(true);
  };

  const handleLeave = () => {
    setButton(false);
  };
  return (
    <div id="project" className="project">
      <h3 className="project__title">Project</h3>
      <div className="project__card-container">
        <div
          className="project__card defi"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {button ? (
            <a
              href="https://defie-jeune.vercel.app/"
              target="_blank"
              className="project__button"
            >
              Site Web
            </a>
          ) : (
            ""
          )}
        </div>
        <div
          className="project__card nissa"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {button ? (
            <a
              href="https://mieu-nissa.vercel.app/"
              target="_blank"
              className="project__button"
            >
              Site Web
            </a>
          ) : (
            ""
          )}
        </div>
        <div
          className="project__card party"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {button ? (
            <a
              href="https://youtu.be/5RN9SH2qkLE"
              target="_blank"
              className="project__button"
            >
              Vidéo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
