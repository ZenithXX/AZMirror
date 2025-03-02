import React from "react";

export default function UIControls({ modelPath, setModelPath }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        padding: "10px",
        background: "rgba(255,255,255,0.9)",
        borderRadius: "5px",
        zIndex: 1000,
        pointerEvents: "auto",
      }}
    >
      <label>Choose Model:</label>
      <select
        onChange={(e) =>
          setModelPath(`${import.meta.env.BASE_URL}models/${e.target.value}`)
        }
        value={modelPath.replace(`${import.meta.env.BASE_URL}models/`, "")} // Remove base URL to match dropdown values
        style={{
          padding: "5px",
          fontSize: "14px",
        }}
      >
        <option value="Defualt.glb">Model 1</option>
        <option value="LuoisVitt.glb">Model 2</option>
        <option value="Pomelo.glb">Model 3</option>
        <option value="Lacoste.glb">Model 4</option>
      </select>
    </div>
  );
}
