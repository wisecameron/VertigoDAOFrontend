import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { useState } from 'react';


export default function FloatingBuildings(props) //startingZ
{
    const ref = useRef()

    let dummy = new THREE.Object3D()
    let zPos = props.startingZ
    let buildingStripLength = 20;
    const positionsProxy = []

    useEffect(() =>
    {
        let total = 0;

        for(let count = 0; count < buildingStripLength; count++)
        {
            for(let i = 0; i < 2; i++) //both sides
            {
                let height = 70 + (Math.random() * 60);
                let offsetX = (i === 0) ? 75:-75;

                dummy.scale.set(15, height, 25)
                dummy.position.set(offsetX, height / 4, zPos)
                dummy.updateMatrix()

                positionsProxy.push(offsetX)
                positionsProxy.push(height / 4)
                positionsProxy.push(zPos)
                positionsProxy.push(Math.random() + Math.random())

                if(i === 1)
                {
                    zPos -= 33;
                }
                
                ref.current.setMatrixAt(total, dummy.matrix)

                total += 1;
            }
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [zPos, buildingStripLength, positionsProxy, dummy])

    useFrame(() =>
    {
        let now = Date.now()
        for(let i = 0; i < buildingStripLength * 2; i++)
        {
            let posY = positionsProxy[(i * 4) + 1]
            let posYAdj = posY + (Math.cos(now * positionsProxy[(i*4) + 3] / 800) * 4)

            //if(i == 3) console.log(posYAdj)
            dummy.position.set((positionsProxy[(i*4)]),(posYAdj),(positionsProxy[(i*4) + 2]))

            dummy.scale.set(15, posY * 4, 25)
            dummy.updateMatrix()
            ref.current.setMatrixAt(i, dummy.matrix)
            }
        ref.current.instanceMatrix.needsUpdate = true;
    })

    console.log("RERENDER")

    return(
        <instancedMesh ref = {ref} args = {[null, null, 240]}>
            <boxBufferGeometry args = {[1,1,1]} />
            <meshPhongMaterial shininess = {20}/>
        </instancedMesh>
    )
}