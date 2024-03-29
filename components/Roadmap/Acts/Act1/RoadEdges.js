
//creates emissive (variable color) lights on the side of tile scene road
import { MeshWobbleMaterial } from "@react-three/drei"
import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

export default function RoadEdges(props) //lightcolor
{
    let ref = useRef();

    useEffect(() =>
    {
        const dummy = new THREE.Object3D();

        let startZ = -5;
        for(let count = 0; count < 140; count++)
        {
            dummy.position.set(0, 5, startZ);
            dummy.updateMatrix();
            startZ -= 5;
            ref.current.setMatrixAt(count, dummy.matrix);
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, []);

    return(
        <>
            <instancedMesh ref = {ref} args = {[null, null, 300]}>
                <boxBufferGeometry args = {[1 / 7, 0.1 / 4, 1 / 7 ]} />
                <meshPhongMaterial color = "none" emissive = "white" emissiveIntensity={1}/>
            </instancedMesh>
            <mesh position = {[-9, 5.4, -300]} rotation = {[-Math.PI / 2, 0, 0]}>
                <planeGeometry args = {[1, 600]}/>
                <meshBasicMaterial color = {props.color}  />
            </mesh>
            <mesh position = {[9, 5.4, -300]} rotation = {[-Math.PI / 2, 0, 0]}>
                <planeGeometry args = {[1, 600]}/>
                <meshBasicMaterial color = {props.color}/>
            </mesh>
        </>
    )
}