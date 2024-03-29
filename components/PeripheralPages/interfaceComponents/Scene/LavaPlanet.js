import {useLoader, useFrame} from '@react-three/fiber'
import { useState, useRef } from 'react'

export function LavaMoon(props)
{
    const ref = useRef()



    
    useFrame((_, delta) =>
    {
        ref.current.rotation.y += delta * .02;
    })

    console.log(props.position)

    console.log(props.texture)


    return(
        <>
            <mesh ref = {ref} {...props} >
                <sphereGeometry args = {[3, 256,128]} />
                <meshStandardMaterial 
                map = {props.texture}/>
            </mesh>

        </>
    )
}

