import { MeshWobbleMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber"
import { lerp } from "three/src/math/MathUtils";
import { easeInOutQuad } from "../Controllers/CameraController";
import { useMemo } from "react";

export default function Planet(props)
{
    let M = useMemo(() => new THREE.Mesh())
    const ref = useRef( M );
    const startingPosition = useRef(new THREE.Vector3(0,0,0));
    const startingOpacity = useRef(0);
    const up = useRef(false);
    const animation = useRef(0);
    const START = new THREE.Vector3(-2200, 3900, 3900);
    const END = new THREE.Vector3(-1500, 2200, 4100);

    const hasRun = useRef(false)

    const sun2 = useLoader(TextureLoader, 'sun.png')
    const sunemis2 = useLoader(TextureLoader, 'sunemis.png')
    const sunrough2 = useLoader(TextureLoader, 'sunrough.png')
    const sunnorm2 = useLoader(TextureLoader, 'sunnorm.png')

    sun2.encoding = THREE.sRGBEncoding
    sunemis2.encoding = THREE.sRGBEncoding
    sunrough2.encoding = THREE.sRGBEncoding
    sunnorm2.encoding = THREE.sRGBEncoding

    let ev = 0;



    useFrame((_, delta) =>
    {


        /*
            HANDLE VISIBLE
        */
        if(props.vis && props.graphics > 2)
        {
            //1ST ITERATION
            if(!up.current)
            {
                up.current = true;

                startingPosition.current.x = ref.current.position.x;
                startingPosition.current.y = ref.current.position.y;
                startingPosition.current.z = ref.current.position.z;

                startingOpacity.current = ref.current.material.opacity;

                animation.current = 0;
            }
            //POSITION
            if(animation.current < 160)
            {
                animation.current += delta * 35;
                ev = easeInOutQuad(animation.current / 160);
                ref.current.position.lerpVectors(startingPosition.current, END, ev);
            }
            
            if(props.scene === 2 || props.scene === 3 || props.scene === 4)
            {
                if(props.scene < 4)
                {
                    if(ref.current.material.emissiveIntensity > 100)
                    {
                        ref.current.material.emissiveIntensity -= delta * 13000;
                    }
                    if(ref.current.scale.x > 1)
                    {
                        ref.current.scale.x -= delta * .5;
                        ref.current.scale.y -= delta * .5;
                        ref.current.scale.z -= delta * .5;
                    }
                }
                else if(props.scene === 4)
                {
                    if(ref.current.material.emissiveIntensity < 150000)
                    {
                        ref.current.material.emissiveIntensity += delta * 3000;
                    }
                    if(ref.current.scale.x < 3)
                    {
                        ref.current.scale.x += delta * .2;
                        ref.current.scale.y += delta * .2;
                        ref.current.scale.z += delta * .2;
                    }
                }

                if(ref.current.material.opacity < 1)
                {
                    ref.current.material.opacity += delta * 2;
                }
            }

            if(props.scene === 5 && ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .35
            }

            if(!hasRun.current)
            {
                hasRun.current = true;
            }
        }
        /*
            HANDLE INVISIBLE
        */
        else if(hasRun.current)
        {


            if(up.current)
            {

                up.current = false;
                animation.current = 0;
                startingPosition.current.x = ref.current.position.x;
                startingPosition.current.y = ref.current.position.y;
                startingPosition.current.z = ref.current.position.z;

            }

            //handle transition
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .35
                ref.current.position.z -= delta * 1000;
                startingPosition.current.z = ref.current.position.z;
            }
            else if(animation.current < 160)
            {
                animation.current += delta * 95;
                ev = easeInOutQuad(animation.current / 160);
                ref.current.position.lerpVectors(startingPosition.current, START, ev);
            }

            if(ref.current.material.emissiveIntensity > 15)
            {
                ref.current.material.emissiveIntensity -= delta * 3000;
            }

        }
    });
  

    return(
        <>
            <mesh position = {[-1200, 1900, 1000]} ref = {ref} rotation = {[0.1,0,0]} visible = {props.graphics > 1}>
                <icosahedronBufferGeometry args = {[470, 8, 16]}  />
                <MeshWobbleMaterial 
                map = {sun2} 
                emissiveMap = {sunemis2}
                emissive = "#1d1135"
                color = "white"
                normalMap = {sunnorm2} 
                roughnessMap = {sunrough2} 
                roughness = {6}
                emissiveIntensity = {100}
                shininess = {50}
                transparent
                opacity = { 0 }
                factor={5}
                />
            </mesh>
            <pointLight position={[150, 2400, 3800]} distance= {900}/>
        </>
    )
}