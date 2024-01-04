import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Project = () => {
  return (
    <div id="project" className="project">
      <h3 className="project__title">Project</h3>
      <div className="project__card-container">
        <Link to={"https://defie-jeune.vercel.app/"} target={"_blank"}>
          <img
            className="project__card"
            src="project/Capture d'écran 2024-01-03 091948.png"
            alt=""
          />
        </Link>
        <Link to={"https://mieu-nissa.vercel.app/"} target={"_blank"}>
          <img
            className="project__card"
            src="project/Capture d'écran 2024-01-02 215758.png"
            alt=""
          />
        </Link>
        <Link
          to={
            "https://www.youtube.com/watch?v=5RN9SH2qkLE&ab_channel=CedricFRISCIA"
          }
          target={"_blank"}
        >
          <img className="project__card" src="project/party.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
