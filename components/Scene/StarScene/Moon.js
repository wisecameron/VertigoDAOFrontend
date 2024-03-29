import React, {useRef, useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import InFrameChecker from '../../InFrameChecker'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { useScroll } from '@react-three/drei'

export default function Moon(props)
{
    const MoonTexture = useLoader(TextureLoader, 'moon.jpg')

    const sun2 = useLoader(TextureLoader, 'sun.png')
    const sunemis2 = useLoader(TextureLoader, 'sunemis.png')
    const sunrough2 = useLoader(TextureLoader, 'sunrough.png')
    const sunnorm2 = useLoader(TextureLoader, 'sunnorm.png')
    const sundis2 = useLoader(TextureLoader, 'sundis.png')

    const ref = useRef(0)
    const ref2 = useRef(0)
    const visible = useRef()

    const scroll = useScroll();

    MoonTexture.encoding = THREE.sRGBEncoding

    sun2.encoding = THREE.sRGBEncoding
    sunemis2.encoding = THREE.sRGBEncoding
    sunrough2.encoding = THREE.sRGBEncoding
    sunnorm2.encoding = THREE.sRGBEncoding


    const [inFrame, setInFrame] = useState(false)

    //benchmark iterations : 274

    useFrame((_, delta) =>
    {

        if(props.graphics > 1)
        {
            if(ref.current !== undefined && ref.current !== null)
            {
                ref.current.rotation.y -= delta * .03;
            }
            if(ref2.current !== undefined && ref2.current !== null)
            {
                ref2.current.rotation.x -= 0.0001;
            }
        }   
        if(scroll.offset > props.minScroll && scroll.offset < props.maxScroll)
        {
            visible.current.visible = true;
            return;
        }
        visible.current.visible = false;
    })

    if(props.graphics === 1)
    {
        return null;
    }

    const lightPos = [-6900, 3000, -900]
    let ReturnValue = ''



    return(
        <group ref = {visible}>
            <pointLight intensity = {0.15} position  = {lightPos} receiveShadow = {true} color = "#e8f1ff"/>
            <mesh 
            ref = {ref}
            position = {[500, 2330, -900]}
            rotation = {[0,0,-1.3]}
            scale = {1}
            >
                <meshPhongMaterial 
                map = {MoonTexture} 
                shininess = {50}
                />
                <sphereGeometry args = {[700, 512, 256]} />
            </mesh>
            <mesh position = {[-5500, 2300, -9800]} 
            rotation = {[2, 0, 0]} 
            castShadow = {true}
            scale = {6}
            ref = {ref2}>
                    <meshPhongMaterial 
                    map = {sun2} 
                    emissiveMap = {sunemis2}
                    emissive = "#1d1135"
                    normalMap = {sunnorm2} 
                    roughnessMap = {sunrough2} 
                    displacementMap = {sundis2}
                    roughness = {6}
                    emissiveIntensity = {45}
                    shininess = {50}/>
                <sphereGeometry args = {[200, 256, 128]} />
            </mesh>
    </group>
    )   
}

export function MoonOrbit(props)
{
    
}