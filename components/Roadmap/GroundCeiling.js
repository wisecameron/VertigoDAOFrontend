import * as THREE from 'three'
import React from 'react'
import { MeshReflectorMaterial } from '@react-three/drei'


export default function GroundCeiling(props)
{
    return(
        <group>
            <mesh scale = {5000} rotation = {[-Math.PI / 2, 0, 0]}>
                <planeGeometry args = {[1,1]}/>
                <MeshReflectorMaterial 
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </group>
    )
}