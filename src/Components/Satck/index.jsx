import React, { useState } from "react";

// Import css
import "./styles.scss";

const Stack = () => {
  const [stackImages, setStackImages] = useState([
    "/icons8-html-40.png",
    "/icons8-css-40.png",
    "/icons8-js-40.png",
    "/icons8-react-native-40.png",
    "/icons8-sass-40.png",
  ]);

  return (
    <div className="stack">
      <h3 className="stack__title">Stack Technique</h3>
      <div className="stack__container">
        {stackImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Logo ${index}`}
            className="stack__image"
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
