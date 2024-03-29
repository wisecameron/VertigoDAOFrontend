import React, {useRef, useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

export default function Planet(props)
{
    const ref = useRef()
    const alien = useLoader(TextureLoader, 'alien.png');
    const alienemisisive = useLoader(TextureLoader, 'alienemissive.png');
    const alienrough = useLoader(TextureLoader, 'alienrough.png');
    const aliennorm = useLoader(TextureLoader, 'aliennorm.png');
    
    alien.encoding = THREE.sRGBEncoding;
    alienemisisive.encoding = THREE.sRGBEncoding;
    alienrough.encoding = THREE.sRGBEncoding;
    aliennorm.encoding = THREE.sRGBEncoding;

    useFrame(() =>
    {
        ref.current.rotation.z += 0.0002;
        ref.current.rotation.y += 0.0004;
    })

    return(
        <>
        <mesh 
        ref = {ref}
        position = {[0,120,-400]}>
            <meshStandardMaterial 
                map = {alien} 
                emissiveMap = {alienemisisive}
                emissive = "white"
                normalMap = {aliennorm} 
                roughnessMap = {alienrough} 
                roughness = {0.9}
                emissiveIntensity = {2}
            />
            <sphereBufferGeometry args = {[20, 512, 256]} />
        </mesh>
        </>
    )
}