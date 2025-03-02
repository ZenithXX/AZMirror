import React from "react";

export default function UIControls({ modelIndex, setModelIndex, totalModels }) {
  // Go to previous model
  const prevModel = () => {
    setModelIndex((prevIndex) =>
      prevIndex === 0 ? totalModels - 1 : prevIndex - 1
    );
  };

  // Go to next model
  const nextModel = () => {
    setModelIndex((prevIndex) =>
      prevIndex === totalModels - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Left Button */}
      <button
        onClick={prevModel}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          padding: "10px",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ◀
      </button>

      {/* Center Text Showing Model Number */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "20px",
          padding: "5px 10px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "5px",
          zIndex: 1000,
        }}
      >
        Model {modelIndex + 1} / {totalModels}
      </div>
      {/* Right Button */}
      <button
        onClick={nextModel}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          padding: "10px",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ▶
      </button>
    </div>
  );
}
