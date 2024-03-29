import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import InFrameChecker from '../../InFrameChecker'

export default function Stars(props)
{
    const ref = useRef()
    const [inFrame, setInFrame] = useState(false)
    
    useEffect(() =>
    {
        let count = 0;
        const dummy = new THREE.Object3D()

        for(count; count < props.total; count++)
        {
            let negX = Math.random() > 0.5 ? -1 : 1;
            let negZ = Math.random() > 0.5 ? -1 : 1;

            let posX = negX * (Math.random() * 10050)
            let posY = Math.random() * 6300
            let posZ = negZ * (Math.random() * 10050)

            dummy.position.set(posX, posY, posZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, inFrame])


    return(
        <>
            <InFrameChecker 
                posLow = {1.1} 
                posHigh = {6} 
                pages = {props.pages} 
                inFrame = {inFrame}
                setInFrame = {(val) => {setInFrame(val)}}
            />
            <instancedMesh 
                ref = {ref} 
                args = {[null, null, 6000]} 
                rotation = {[0,-1.5,0]}
                frustumCulled = {false}
                visible = {inFrame}
                >
                        <sphereBufferGeometry args = {[1.3,4,8]} />
                        <meshBasicMaterial color = "white" />
            </instancedMesh>
        </>
    )

} 
