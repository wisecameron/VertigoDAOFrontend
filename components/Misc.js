import React, { useState } from 'react'
import { FirstPersonControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import '../css/App.css'
import { MeshDistortMaterial } from '@react-three/drei';


export const Distort = (props) =>
{
  return(
    <mesh {...props} >
      <sphereGeometry args = {[1,20,20]} />
      <MeshDistortMaterial color = "red"  speed = {0.5} distort = {1} />
    </mesh>
  )
}

export function FPC(props) 
{
  const [hasLoaded, setLoad] = useState(0)

  useFrame(() =>
  {

    console.log(hasLoaded)
    if(hasLoaded < 1550)
    {
      setLoad(hasLoaded + 1)
    }
  })

  return(<FirstPersonControls lookVertical = {false} enabled = {(hasLoaded === 1550) ? true:false}/>)
}