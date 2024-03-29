import {useLoader, useFrame} from '@react-three/fiber'
import { useState, useRef } from 'react'

export function Planet(props)
{
    const ref = useRef()

    useFrame((_, delta) =>
    {
        if(ref.current !== undefined)
        {
            //console.log(ref.current.geometry)
        }
        ref.current.rotation.y += delta * .02;
    })
    
    



    return(
        <>
            <mesh ref = {ref} {...props}>
                <sphereBufferGeometry args = {[3, 16,32]} />
                <meshPhongMaterial 
                map = {props.texture}
                shininess={10}
                />
            </mesh>

        </>
    )
}

