import { Planet } from "../Objects/Planet"
import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { SRGBColorSpace} from "three";
import { UnrealBloomPass } from "three-stdlib";
import { EffectComposer, Bloom } from "@react-three/postprocessing";


import * as THREE from 'three'
import { easeInOutQuad } from "../../../Scene/Controllers/CameraController";
import ExplodingPlanet from "../Objects/ExplodingPlanet";
import CameraController from "../Controller/CameraController";
import SliderComponent from "../../InterfaceCoreSystem/SliderComponent";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Background from "../Objects/Background";
import { ConvoyOpt, ConvoyOpt2 } from "../../../Scene/Scene5/ConvoyOpt";

export default function Intro(props)
{
    const loader = new TextureLoader()
    const lavaTexture = loader.load('cloud.png');
    lavaTexture.colorSpace = SRGBColorSpace

    const [docked, setDocked] = useState(false);

    return(
        <Canvas style = {{width: "100vw", height: "100vh" }}>

            <ConvoyOpt2 total = {2000} vis = {true} graphics = {3} position = {[0, 0, -40]} neg = {false}/>

            <SliderComponent 
            setDocked = { (val) => {setDocked(val)} } 
            docked = {docked} 
            setInterfacePage = { (v) => {props.setInterfacePage(v)} }
            interfacePage = {props.interfacePage}
            />

            <Background position = {[0,-100, -500]} scale = {1800} page = {props.page} interfacePage = {props.interfacePage}/>

            <ExplodingPlanet 
            position = {[0,-100,-300]} 
            texture = {lavaTexture} 
            scale = {40} 
            page = {props.page}
            visible = {props.visible}
            />
            <color attach = "background" args = {["black"]}/>
            <CameraController page = {props.page} docked = {docked}/>

        </Canvas>
    )
}

function GetComposer()
{
    const {composer} = useThree()

    return composer;
}

function LightMove(props)
{
    const ref = useRef()
    let ev;
    const iterations = useRef(0)

    const startPos = useRef(new THREE.Vector3(0, 400, -1600))
    const endPos = useRef(new THREE.Vector3(0, 1150, -1224))

    // 1150.4500000000298y -1224.7750000000865z

    useFrame((_, delta) =>
    {
        if(iterations.current < 10 && props.vis)
        {
            ev = easeInOutQuad(iterations.current * .1);
            ref.current.position.lerpVectors(startPos.current, endPos.current, ev);
            iterations.current += 1 * delta;
        }

    })

    return(
        <group position = {[0, 400, -1600]} ref = {ref} >
            <pointLight intensity = {3} />
        </group>
    )
}

const OrbitController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };