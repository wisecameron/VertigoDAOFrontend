import React, {useRef, useState} from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useScroll } from '@react-three/drei'
import InFrameChecker from '../../InFrameChecker'
import * as THREE from 'three'
import { useEffect } from 'react'

export default function DarkEnergyPlanet(props)
{
    const {gl} = useThree()

    const sun = useLoader(TextureLoader, 'sun.png')
    const sunemis = useLoader(TextureLoader, 'sunemis.png')
    const sunrough = useLoader(TextureLoader, 'sunrough.png')
    const sunnorm = useLoader(TextureLoader, 'sunnorm.png')
    const sundis = useLoader(TextureLoader, 'sundis.png')

    const ref = useRef()

    sun.encoding = THREE.sRGBEncoding
    sunemis.encoding = THREE.sRGBEncoding
    sunrough.encoding = THREE.sRGBEncoding
    sunnorm.encoding = THREE.sRGBEncoding



    const [inFrame, setInFrame] = useState(false)

    //benchmark iterations : 274

    useFrame(() =>
    {

        if(inFrame && props.graphics > 1)
        {
            if(ref.current !== undefined && ref.current !== null)
            {
                ref.current.rotation.y -= 1
                ref.current.rotation.x += 0.0005
            }
        }   
    })

    if(props.graphics == 1)
    {
        return null;
    }

    const lightPos = [1200, 4500, 200]

    let ReturnValue = ''

    if(inFrame)
    {
        ReturnValue = (
            <>
            <mesh 
            ref = {ref}
            position = {lightPos}
            rotation = {[0,0,-1.6]} 
            >
                <meshStandardMaterial 
                map = {sun} 
                emissiveMap = {sunemis}
                emissive = "#1d1135"
                normalMap = {sunnorm} 
                roughnessMap = {sunrough} 
                displacementMap = {sundis}
                roughness = {6}
                emissiveIntensity = {45}
                shininess = {50}
                />
                <sphereGeometry args = {[700, 512, 256]} />
            </mesh>
        </>
        )
    }

    return(
        <>
            <InFrameChecker 
            posLow = {4} 
            posHigh = {6} 
            pages = {props.pages} 
            inFrame = {inFrame}
            setInFrame = {(val) => {setInFrame(val)}}
            />
            {ReturnValue}
        </>
    )   
}
