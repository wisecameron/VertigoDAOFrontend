import React, {useRef, useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

export default function Scene5Planet(props)
{
    const ref = useRef();
    const timer = useRef(0);

    const MoonTexture = useLoader(TextureLoader, 'alien.png');
    const emis = useLoader(TextureLoader, 'alienemissive.png');
    const norm = useLoader(TextureLoader, 'aliennorm.png');
    const rough = useLoader(TextureLoader, 'alienrough.png')


    MoonTexture.encoding = THREE.sRGBEncoding;
    emis.encoding = THREE.sRGBEncoding;
    norm.encoding = THREE.sRGBEncoding;
    rough.encoding = THREE.sRGBEncoding;

    useFrame((_, delta) =>
    {
        if(props.vis)
        {
            if(!ref.current.visible)
            {
                timer.current = 0;
                ref.current.visible = true;
            }
            if(timer.current < 2.8)
            {
                timer.current += delta;
            }
            else if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * 4;
            }
        }
        else
        {
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta;
            }
            else if(ref.current.visible) ref.current.visible = false;
        }

        if(ref.current.visible)
        {
            ref.current.rotation.y += delta * .02;
            ref.current.rotation.x += delta * .01;
        }
    });

    const sphereGeometry = new THREE.SphereGeometry(700, 128, 256);
    sphereGeometry.computeVertexNormals();

    return(
        <group >
            <pointLight intensity = {.6} distance = {1000} position = {[props.position[0] -1200, props.position[1] + 500, props.position[2] + 3000]}/>
            <mesh 
            ref = {ref}
            {...props}
            rotation = {[1,0,-1.3]}
            scale = {2}
            visible = {false}
            geometry = {sphereGeometry}
            >
                <meshPhongMaterial 
                map = {MoonTexture} 
                emissiveMap={emis}
                color = "black"
                emissiveIntensity={6}
                emissive="white"
                normalMap={norm}
                roughnessMap = {rough}
                shininess = {10}
                transparent
                opacity = {0}
                />
            </mesh>
        </group>
    );
}