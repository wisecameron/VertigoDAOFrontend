import React, {useRef, useMemo} from "react"
import * as THREE from 'three'
import { MeshDistortMaterial } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import testimg from '../../../assets/testimg.png'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Portal(props)
{
    const testimgmap = useLoader(TextureLoader, testimg)

    return(
        <group>
            <mesh scale = {4.25} position = {[0, 10, -580]}>
                <circleGeometry args = {[1, 50]}/>
                <MeshDistortMaterial color = "black" factor={1} emissive = "black" emissiveIntensity={1} speed = {3} />
            </mesh>
            <mesh scale = {4} position = {[0, 10, -579]}>
                <circleGeometry args = {[1, 128]}/>
                <MeshDistortMaterial factor={3} map = {testimgmap} speed = {3}/>
            </mesh>
        </group>
    )
}