import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <>
      <Loader />
      <Leva />
      <Canvas shadows camera={{ position: [10, 0, 8], fov: 30 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
