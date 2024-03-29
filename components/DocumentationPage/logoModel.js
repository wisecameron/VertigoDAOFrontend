import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RGBELoader } from 'three-stdlib'
import * as THREE from 'three'
import { MeshRefractionMaterial } from '@react-three/drei'
import sky from '../../assets/sky.hdr'
import {useLoader, useFrame} from '@react-three/fiber'

export function Model(props) {
  const group = useRef();
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/glb/logo.glb");
  const { actions } = useAnimations(animations, group);

  const texture = useLoader(RGBELoader, sky)

  useFrame(() =>
  {
    ref.current.rotation.z -= 0.0025;
  })

  let col = "white";
  if(props.color)
  {
    col  =  props.color
  }


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">

        <group
          name="Area003"
          position={[-6.22, 12.04, 14.02]}
          rotation={[1.42, -0.02, 0.41]}
        />
        <group
          name="Area002"
          position={[0, -7.97, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={0.97}
        />
        <group
          name="Area001"
          position={[22.9, -5.01, -11.77]}
          rotation={[1.3, -0.09, 1.18]}
          scale={-0.85}
        />
        <mesh
          ref = {ref}
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          position={[-0.06, 3.92, 0]}
          rotation={[Math.PI / 2, 0, -0.96]}
          scale={73}
        >
            <MeshRefractionMaterial 
                envMap={texture} 
                toneMapped = {false} 
                color = {col} 
                bounces = {5} 
                fresnel = {0} 
                ior = {4}
                aberrationStrength = {.2}
                />
        </mesh>
      </group>
    </group>
  );
}


export function Model2(props) {
  const group = useRef();
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/glb/logo.glb");
  const { actions } = useAnimations(animations, group);

  const texture = useLoader(RGBELoader, sky)

  useFrame(() =>
  {
    ref.current.rotation.z -= 0.0025;
  })

  let col = "white";
  if(props.color)
  {
    col  =  props.color
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">

        <group
          name="Area003"
          position={[-6.22, 12.04, 14.02]}
          rotation={[1.42, -0.02, 0.41]}
        />
        <group
          name="Area002"
          position={[0, -7.97, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={0.97}
        />
        <group
          name="Area001"
          position={[22.9, -5.01, -11.77]}
          rotation={[1.3, -0.09, 1.18]}
          scale={-0.85}
        />
        <mesh
          ref = {ref}
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          position={[-0.06, 3.92, 0]}
          rotation={[Math.PI / 2, 0, -0.96]}
          scale={73}
        >
            <MeshRefractionMaterial 
                envMap={texture} 
                toneMapped = {false} 
                color = {col} 
                bounces = {5} 
                fresnel = {0} 
                ior = {4}
                aberrationStrength = {.2}
                />
        </mesh>
      </group>
    </group>
  );
}

export function ModelHover(props) {
  const group = useRef();
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/glb/logo.glb");
  const { actions } = useAnimations(animations, group);

  const texture = useLoader(RGBELoader, sky)

  useFrame(() =>
  {
    ref.current.rotation.z -= 0.0025;
  })

  let col = "white";
  if(props.color)
  {
    col  =  props.color
  }


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">

        <group
          name="Area003"
          position={[-6.22, 12.04, 14.02]}
          rotation={[1.42, -0.02, 0.41]}
        />
        <group
          name="Area002"
          position={[0, -7.97, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={0.97}
        />
        <group
          name="Area001"
          position={[22.9, -5.01, -11.77]}
          rotation={[1.3, -0.09, 1.18]}
          scale={-0.85}
        />
        <mesh
          ref = {ref}
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          position={[-0.06, 3.92, 0]}
          rotation={[Math.PI / 2, 0, -0.96]}
          scale={73}
        >
            <MeshRefractionMaterial 
                envMap={texture} 
                toneMapped = {false} 
                color = {col} 
                bounces = {5} 
                fresnel = {0} 
                ior = {4}
                aberrationStrength = {.2}
                />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/logo.glb");