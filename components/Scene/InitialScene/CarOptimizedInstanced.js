import React, {useState, useRef, useMemo} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Trail } from '@react-three/drei';
import { useEffect } from 'react';

export default function CarOptimizedInstanced(props)
{

    const carRef = useRef();
    const meshRef = useRef();
    const lightRef = useRef();

    const cop = useRef((Math.random() < 0.2));
    const speed = useRef(0.5 + (Math.random() * Math.random() * Math.random()) * 10);
    const direction = useRef((Math.random() > 0.5)); //pos is true
    const lightColor = useRef("#b042f5");
    const iterationsRef = useRef(0);
    const buggyColorRef = useRef("#b042f5");
    const buggySize = useRef([2 + Math.random() * 45, 2 + Math.random() * 5, 2 + Math.random() * 15]);
    const speedCoefficientRef = useRef(1);
    const elapsedRef = useRef(0);
    const countRef = useRef(0);

    const COL = useMemo(() => new THREE.Color(), []);

    useFrame((_, delta) =>
    {
        if(ref.current.position.x > 1500 || ref.current.position.x < -2000)
        {
            HandleReset();
        }
        else
        {
            //movement
            if(direction.current)
            {
                ref.current.position.x += delta * speed.current;
            }
            else
            {
                ref.current.position.x -= delta * speed.current;
            }
        }


    })



    return(
        <group {...props}>

            <pointLight ref = {lightRef} intensity = {30} decay = {2} distance = {600}/>

            <instancedMesh ref = {meshRef} args={[null, null, props.total]}>
                <boxBufferGeometry args = {[1,1,1]} />
                <meshBasicMaterial vertexColors toneMapped = {false} />
            </instancedMesh>

        </group>
    )  
   ;
}

