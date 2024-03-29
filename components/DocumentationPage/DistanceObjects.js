import { useRef, useState } from "react";
import {useFrame} from '@react-three/fiber'

export default function DistanceObject(props)
{
    const ref = useRef()

    useFrame((t) =>
    {
        //ref.current.position.x += 0.001
        
        ref.current.position.x += (props.coef * Math.cos(t.clock.elapsedTime + props.offset))
    })

    return(
        <mesh {...props} 
        ref = {ref} 
        position = {[props.posX, 0, -40]} 
        rotation = {[0, 0, (props.rot) ? -0.5 : 0.5]}>
            <planeGeometry args = {[0.5, 2.5]}/>
            <meshPhongMaterial color = "#353535"/>
        </mesh>
    )
}
