import React, { useState } from "react";
import ModelViewer from "./components/ModelViewer";
import UIControls from "./components/UIControls";

function App() {
  const [modelPath, setModelPath] = useState(
    `${import.meta.env.BASE_URL}models/az.glb`
  );
  return (
    <div>
      <UIControls modelPath={modelPath} setModelPath={setModelPath} />
      <ModelViewer modelPath={modelPath} />
    </div>
    // <ModelViewer modelPath={`${import.meta.env.BASE_URL}models/az.glb`} />
    // <ModelViewer modelPath={`${import.meta.env.BASE_URL}models/Luois.glb`} />
  );

  //   return <ModelViewer modelPath="/models/GLTF/az.gltf" />;
}

export default App;
