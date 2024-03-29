import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useMemo } from 'react'

export default function Act1Particles(props)
{
    const ref = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    
    useEffect(() =>
    {
        let count = 0;

        for(count; count < props.total; count++)
        {
            let posX = (Math.random() * 1000);
            let posY = (Math.random() * 1000);
            let posZ = (Math.random() * 400);

            dummy.position.set(posX, posY, -posZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, dummy])

    useFrame(() =>
    {
        ref.current.position.y += 0.02;
        ref.current.position.z -= 0.02;

        if(ref.current.position.y > 0)
        {
            ref.current.position.y = -550
            ref.current.position.z = - 50;
        }
    })

    return(
        <>
            <instancedMesh 
                ref = {ref} 
                args = {[null, null, props.total * 3]} 
                rotation = {[0,-1.5,0]}
                frustumCulled = {false}
                
                >
                    <sphereBufferGeometry args = {[0.4,1]} />
                    <meshStandardMaterial color = "white"/>
            </instancedMesh>
        </>
    )

} 
