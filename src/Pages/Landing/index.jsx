import React from "react";

// Import Components

import Stack from "../../Components/Satck";

// Import CSS
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <main className="landing__main" id="home">
        <section className="landing__presentation">
          <h2>Front-End React Developer</h2>
          <aside>
            Bonjour ! Je suis Friscia Cedric un développeur front-end React
            passionné habitant sur nice.{" "}
          </aside>
          <div className="landing__contact">
            <a
              href="https://www.linkedin.com/in/cedricfriscia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="landing__contact-linkedin"
                src="/icons8-linkedin-50.png"
                alt="Linkedin logo"
              />
            </a>
            <a
              href="https://github.com/CedricFriscia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="landing__contact-github"
                src="/icons8-github-50.png"
                alt="Github Logo"
              />
            </a>
          </div>
        </section>

        <section className="landing__image">
          <img src="/Team work_Monochromatic.svg" alt="Team Work image" />
        </section>
      </main>

      <footer>
        <section className="landing__stack">
          <Stack />
        </section>
      </footer>
    </div>
  );
};

export default Landing;
