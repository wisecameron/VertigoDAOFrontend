import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import orbitron from '../../assets/Orbitron_Regular.json'
import { extend } from '@react-three/fiber'

export default function FallingLine(props)
{
    const ref = useRef()

    extend({TextGeometry})
    const font = new FontLoader().parse(orbitron);

    useFrame(() =>
    {
        ref.current.position.y -= 0.05;

        if(ref.current.position.y < -60) 
        {
            ref.current.position.y = 20
            ref.current.position.x = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * 100)
        }
        console.log(ref.current.position.y)
        
    })

    return(
        <mesh {...props} ref = {ref}>
            <textGeometry args = {["VertigoDAO", {font, size: 0.3, height: 0.05}]}/>
            <MeshDistortMaterial  factor = {1} speed = {4} color = "white"/>
        </mesh>
    )
}