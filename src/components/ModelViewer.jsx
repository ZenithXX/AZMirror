import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
      shadowscamera={{ position: [0, 2, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 2]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -2]} intensity={0.8} />

      <Environment preset="city" />
      <Model modelPath={modelPath} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
