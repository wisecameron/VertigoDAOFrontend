import { useRef } from "react";
import {useFrame} from '@react-three/fiber'
import { MeshWobbleMaterial } from "@react-three/drei";

export default function SpinRing(props)
{
    const ref = {useRef}
 //<ringGeometry args = {[2.5, 4, 64, 13, 0, 6.283185307179586]}/>
    
    return(
        <mesh {...props} rotation = {[(props.top) ? 1.5 : -Math.PI / 2, 0, 0]}>
            <torusGeometry args = {[4, 0.01, 16, 100, 6.283185307179586]}/>
            <MeshWobbleMaterial factor = {0.4}/>
        </mesh>
    )
}