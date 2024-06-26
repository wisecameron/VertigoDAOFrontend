/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"


export function Cockpit(props) {
  const { nodes, materials } = useGLTF("/glb/cockpit2.glb");

    const {camera} = useThree()
    const ref = useRef()

    useFrame(() =>
    {
        ref.current.position.z = camera.position.z - 7.5;

    })

    return (
        <group {...props} dispose={null} ref = {ref}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.23}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_1"].geometry}
              material={materials.Color_C19}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_2"].geometry}
              material={materials.Color_000}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_3"].geometry}
              material={materials.Color_001}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_4"].geometry}
              material={materials._3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_5"].geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_6"].geometry}
              material={materials._2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_7"].geometry}
              material={materials.M_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["547310ab-66aa-4d7c-869d-46ffbb0a49d7_8"].geometry}
              material={materials._White_}
            />
          </group>
        </group>
      );
}

useGLTF.preload("/glb/cockpit2.glb");
