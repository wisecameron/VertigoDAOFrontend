import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Loader } from '@react-three/drei';
import HTMLHandler from './HomePageText.js';
import { BuildingSceneMobile } from './InitialScene/BuildingScene.js'
import '../../css/App.css'
import CameraController from './Controllers/CameraController';
import MobileHTML from './Mobile/MobileSceneHTML.js'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { HeaderMobile } from '../HeaderFooter/Header.js';
import MobileMoonScene from './Mobile/MobileMoonScene.js';
import DarkPlanetMobileScene from './StarScene/DarkPlanetMobileScene.js';
import { useState } from 'react';
import SceneHandler from './Controllers/SceneHandler.js';
import { Roadmap2SceneGeneric } from '../Roadmap2/Scene/Roadmap2Scene.js';

export default function Scene(props) 
{
  const [scene, setScene] = useState(0);
  const [visibleState, setVisible] = useState('visible')
  const pages = props.pages

  function handleVisibilityChange() {
    if (document.visibilityState !== visibleState) {
      setVisible(document.visibilityState);
    }
  }
  document.addEventListener('visibilitychange', handleVisibilityChange);
  if(visibleState !== 'visible')
  {
     //return null;
  }
  
  return (
    <>
      <Suspense>
          <Canvas>
              <ScrollControls pages = {pages} damping = {10} >

                <Scroll html>
                    <HTMLHandler/>
                </Scroll>

                <CameraController 
                enabled = {true} 
                pages = {pages} 
                damping = {6}
                infinite = {true}/>

                <SceneHandler 
                scene = {scene}
                setScene = {(x) => {setScene(x)}}
                graphics = {props.graphics}
                />
                
              </ScrollControls>

              <EffectComposer multisampling={8}>
                <Bloom kernelSize={3} luminanceThreshold={0.0} luminanceSmoothing={0.4} intensity={1.5}/>
              </EffectComposer>
              <color attach="background" args={["black"]} />


          </Canvas>
      </Suspense>
      <Loader />
    </>
  );
}

export function MobileScene()
{
  return(
    <div style = {{height: "540vh", background: "none"}}>
      <Suspense>
        <HeaderMobile />
        <Canvas style = {{position: "absolute", overflow: "scroll", height: "100vh"}}>
            <BuildingSceneMobile/>
        </Canvas>
        <Canvas style = {{position: "absolute", overflow: "scroll", height: "100vh", marginTop: "100vh"}}>
          <MobileMoonScene />
        </Canvas>
        <Canvas style = {{position: "absolute", overflow: "scroll", height: "180vh", marginTop: "200vh"}}>
          <DarkPlanetMobileScene />
        </Canvas>
        <MobileHTML />
      </Suspense>
      <Loader />
    </div>
  )
}
