import React from "react";
import Spline from "@splinetool/react-spline";
import "./Spline.css";

const SplineComponent = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="spline-container">
      <Spline scene="https://prod.spline.design/Mv8HwxuQ3E3mp30l/scene.splinecode" />
      <div className="overlay">
        <h1>
          Fear not, though! You can navigate back to safer waters by using the
          button below
        </h1>
        <button onClick={handleButtonClick}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default SplineComponent;
