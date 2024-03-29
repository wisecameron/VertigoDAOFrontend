
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function GlassCoin(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("glb/glasscoin.glb");
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <pointLight intensity = {20}/>
        <group
          name="Area003"
          position={[8.01, -12.54, 12.71]}
          rotation={[0,0,0]}
        />
        <group
          name="Area002"
          position={[0, -7.97, 0]}
          rotation={[0, 0, 0]}
          scale={0.97}
        />
        <group
          name="Area001"
          position={[22.9, -5.01, -11.77]}
          rotation={[0,0,0]}
          scale={-0.85}
        />
        <group
          name="Camera"
          position={[4.71, 3.74, 8.61]}
          rotation={[0,0,0]}
        />
        <group name="Area004" position={[0, 10.45, 0]} scale={0.97} />
        <mesh
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={materials.Glass}
          position={[0.23, 3.77, 0.01]}
          rotation={[Math.PI / 2, 0, -0.3]}
          scale={43.91}
        />
        <mesh
          name="Cylinder028"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.Glass}
          position={[0.1, 3.39, -0.1]}
          rotation={[Math.PI / 2, 0, -0.3]}
          scale={[3.11, 0.09, 3.3]}
        />
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[0, 3.22, -0.23]}
          rotation={[1.57, 0, 2.86]}
          scale={1.21}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/glasscoin.glb");