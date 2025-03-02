import React, { useState } from "react";
import ModelViewer from "./components/ModelViewer";
import UIControls from "./components/UIControls";

// List of available models
const modelList = [
  "Defualt.glb",
  "Lacoste.glb",
  "Pomelo.glb",
  "LuoisVitt.glb",
  "Uniqlo.glb",
  "Dior.glb",
];

function App() {
  const [modelIndex, setModelIndex] = useState(0);

  return (
    <div>
      <UIControls
        modelIndex={modelIndex}
        setModelIndex={setModelIndex}
        totalModels={modelList.length}
      />
      <ModelViewer
        modelPath={`${import.meta.env.BASE_URL}models/${modelList[modelIndex]}`}
      />
    </div>
  );
}

export default App;
