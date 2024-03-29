import React, {useState, useEffect, useRef} from 'react'
import * as THREE from 'three'
import {useFrame, useLoader} from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import camo from '../../../assets/camo.png'


/*
-1500, 2000, -4800
[1500, 3000, -4800]

{
    return(
        <mesh scale = {1} position = {[-100, 2500, -4800]} rotation = {[0.5, 0.4, 0]}>
            <boxGeometry args = {[1000,10,10]}/>
            <meshBasicMaterial color = "red"/>
        </mesh>
    )
*/


export default function Lasers(props)
{
    return(
        <Cops />
    )
}

function Cops(props)
{
    const ref = useRef()

    const [pos, setPos] = useState(0)
    const [lowestZ, setLowestZ] = useState(1e18)
    const scroll = useScroll()

    const [posX, setX] = useState(-100)
    const [posY, setY] = useState(3100)
    const [posZ, setZ] = useState(1000)

    const Camo = useLoader(THREE.TextureLoader, camo);

    return(
        <>
            <mesh scale = {1} position = {[posX, posY, posZ]} rotation = {[0.5, 0.4, 0]}>
                <boxGeometry args = {[400,400,200]}/>
                <meshBasicMaterial color = "red" map = {Camo}/>
            </mesh>
            <pointLight 
                position={[posX , posY + 500, posZ]}
                color = "white"
                intensity={500}
            />

        </>

    )

}