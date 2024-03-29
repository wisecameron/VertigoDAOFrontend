import { Trail } from "@react-three/drei";
import React, {useRef, useState} from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

export default function Comet(props)
{
    const ref = useRef();
    const grpRef = useRef();
    const animation = useRef(0);
    const elapsed = useRef(0);

    let angle;

    useFrame((state, delta) =>
    {
        if (props.vis) {
            if(animation.current < 4.5)
            {
                animation.current += delta;
            }
            else
            {
                const radius = 550; // Adjust the radius to control the distance from the Planet
                elapsed.current += delta;
                angle = elapsed.current * 3;
    
                ref.current.position.x =
                -1530 + radius * Math.cos(angle) * -1;
                
                ref.current.position.y = 2300 + 30 * Math.sin(angle); // Keep the Y position constant
    
                ref.current.position.z =
                4100 + radius * Math.sin(angle);
            }
          }
          else if(animation.current >= 4.5)
          {
            animation.current = 0;
          }
    });


    if(!props.vis)
    {
        if(animation.current != 0) animation.current = 0;

    }

    return(
        <group visible = {true} ref = {grpRef}>
            <Trail width={80} length={30} color={"#efdeff"} attenuation={(t) => t * t}>
                <mesh ref = {ref} scale = {1} position={[-2079, 2300, 4101]}>
                    <sphereBufferGeometry args = {[0]}/>
                    <meshPhongMaterial  toneMapped = {false}/>
                </mesh>
            </Trail>
        </group>
    )
}