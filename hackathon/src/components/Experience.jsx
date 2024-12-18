import {
  CameraControls,
  ContactShadows,
  Environment,
  Text,
  useTexture,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";


// const Dots = (props) => {
//   const { loading } = useChat();
//   const [loadingText, setLoadingText] = useState("");
//   useEffect(() => {
//     if (loading) {
//       const interval = setInterval(() => {
//         setLoadingText((loadingText) => {
//           if (loadingText.length > 2) {
//             return ".";
//           }
//           return loadingText + ".";
//         });
//       }, 800);
//       return () => clearInterval(interval);
//     } else {
//       setLoadingText("");
//     }
//   }, [loading]);
//   if (!loading) return null;
//   return (
//     <group {...props}>
//       <Text fontSize={0.14} anchorX={"left"} anchorY={"bottom"}>
//         {loadingText}
//         <meshBasicMaterial attach="material" color="black" />
//       </Text>

//  cameraControls.current.setLookAt(0, 1.7, 1.5, 0, 1.6, 0);
//   }, []);

//   useEffect(() => {
//     cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
//   }, []);

//   return (
//     <>
//       <CameraControls ref={cameraControls} />
//       <Environment preset="sunset" />
//       <Avatar />
// //     </group>
//   );
// };

export const Experience = () => {
  const Texture = useTexture("/Textures/IMG_7759.jpg");
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();

  useEffect(() => {
    cameraControls.current.setLookAt(0,1.8, 2, 0, 1.6, 0);
  }, []);
  // useEffect(() => {
  //       cameraControls.current.setLookAt(0, 0.5, 5, 0, 1.0, 0, true);
  //     }, []);
  return (
    <>
      <CameraControls ref={cameraControls} />
      <Environment preset="sunset" />
      <Avatar />
      {/* Wrapping Dots into Suspense to prevent Blink when Troika/Font is loaded */}
      {/* <Suspense>
        <Dots position-y={1.75} position-x={-0.02} />
      </Suspense> */}

      <mesh position={[0, 0, -10]} rotation={[0, 0, 0]} scale={[viewport.width * 2, viewport.height * 2, 1]}>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={Texture} />
      </mesh>
    </>
  );
};
