import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import InFrameChecker from '../../InFrameChecker'
import { Trail, useScroll } from '@react-three/drei'


export function ConvoyLong(props)
{
    let scaleFactor = (props.scaleFactor === undefined) ? 1 : props.scaleFactor;
    let speedFactor = (props.speedFactor === undefined) ? 1 : props.speedFactor;

    const speedCoefficientRef = useRef(1)
    const countRef = useRef(0)
    const elapsedRef = useRef(0)

    const [inFrame, setInFrame] = useState(false)

    const Color = useMemo(() => new THREE.Color(), [])
    const ref = useRef()

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.total)
        .fill()
        .flatMap((_, i) => Color.setHex(
            (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.45) ? 0xccbae3 : 0xe89797)
            .toArray()))
            ,[props.total, Color]
    )

    const scroll = useScroll();
    let offset;

    useEffect(() => {
        const dummy = new THREE.Object3D();
        let count = 0;
        let totalX = 120000;
        let totalY =  400;
        let totalZ = 400;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random()
            dummy.position.set(posX, posY, posZ);

            let scaleX = 2 + Math.random() * 25 * scaleFactor;
            let scaleY = 2 + Math.random() * 0.5 * scaleFactor;
            let scaleZ = 2 + Math.random() * 1.05 * scaleFactor;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, inFrame, scaleFactor])

    //step 3: move in random direction
    useFrame((_, delta) =>
    { 
        offset = scroll.offset;
        if(offset > 1 || offset < 0)
        {
            offset = 0;
        }
        if(offset < props.visibleMin && offset < props.visibleMax)
        {
            

            ref.current.visible = false;
        }
        else if(props.graphics > 1)
        {

            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }
            if(elapsedRef.current < 0.25)
            {
                elapsedRef.current += delta;
                countRef.current += 1;
            }
            else
            {
                speedCoefficientRef.current = (68 / countRef.current);
                elapsedRef.current = 0;
                countRef.current = 0;
            }
            if(ref.current !== undefined && ref.current !== null)
            {
                ref.current.position.x += ((0.5 * speedFactor) * (props.dir) * speedCoefficientRef.current)

                if(props.dir === 1)
                {
                    if(ref.current.position.x > props.x + 110000)
                    {
                        ref.current.position.x = props.x
                    }
                }

                else if(props.dir === -1)
                {
                    if(ref.current.position.x < props.x - 110000)
                    {
                        ref.current.position.x = props.x
                    }
                }
            }
        }
    })
    
    return(
        <>

                <instancedMesh 
                    ref = {ref} 
                    args = {[null, null, (props.total)]} 
                    position = {[props.x, props.y, props.z]}
                    frustumCulled = {false}
                    rotation = {[-2.8,0,0]}
                    visible = {false}>
                        <boxGeometry args = {[1,1,1]}>
                            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
                        </boxGeometry>
                        <meshBasicMaterial toneMapped = {false} vertexColors/>
                </instancedMesh>

        </>
    )
}

export function ConvoyLongMobile(props)
{
    let scaleFactor = (props.scaleFactor === undefined) ? 1 : props.scaleFactor;
    let speedFactor = (props.speedFactor === undefined) ? 1 : props.speedFactor;

    const speedCoefficientRef = useRef(1)
    const countRef = useRef(0)
    const elapsedRef = useRef(0)

    const Color = useMemo(() => new THREE.Color(), [])
    const ref = useRef()

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.total)
        .fill()
        .flatMap((_, i) => Color.setHex(
            (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.45) ? 0xccbae3 : 0xe89797)
            .toArray()))
            ,[props.total, Color]
    )

    useEffect(() => {
        const dummy = new THREE.Object3D();
        let count = 0;
        let totalX = 120000;
        let totalY =  400;
        let totalZ = 400;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random()
            dummy.position.set(posX, posY, posZ);

            let scaleX = 2 + Math.random() * 25 * scaleFactor;
            let scaleY = 2 + Math.random() * 0.5 * scaleFactor;
            let scaleZ = 2 + Math.random() * 1.05 * scaleFactor;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, scaleFactor])

    //step 3: move in random direction
    useFrame((_, delta) =>
    {  

        if(elapsedRef.current < 0.25)
        {
            elapsedRef.current += delta;
            countRef.current += 1;
        }
        else
        {
            speedCoefficientRef.current = (68 / countRef.current);
            elapsedRef.current = 0;
            countRef.current = 0;
        }
        if(ref.current !== undefined && ref.current !== null)
        {
            ref.current.position.x += ((0.5 * speedFactor) * (props.dir) * speedCoefficientRef.current)

            if(props.dir === 1)
            {
                if(ref.current.position.x > props.x + 110000)
                {
                    ref.current.position.x = props.x
                }
            }

            else if(props.dir === -1)
            {
                if(ref.current.position.x < props.x - 110000)
                {
                    ref.current.position.x = props.x
                }
            }
        }

    })
    
    return(
        <>
            <instancedMesh 
                ref = {ref} 
                args = {[null, null, (props.total)]} 
                position = {[props.x, props.y, props.z]}
                frustumCulled = {false}
                rotation = {[-2.8,0,0]}>
                    <boxGeometry args = {[1,1,1]}>
                        <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
                    </boxGeometry>
                    <meshBasicMaterial toneMapped = {false} vertexColors/>
            </instancedMesh>
        </>
    )
}

export function ConvoyLongMobile2(props)
{
    let scaleFactor = (props.scaleFactor === undefined) ? 1 : props.scaleFactor;
    let speedFactor = (props.speedFactor === undefined) ? 1 : props.speedFactor;

    const speedCoefficientRef = useRef(1)
    const countRef = useRef(0)
    const elapsedRef = useRef(0)

    const Color = useMemo(() => new THREE.Color(), [])
    const ref = useRef()

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.total)
        .fill()
        .flatMap((_, i) => Color.setHex(
            (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.45) ? 0xccbae3 : 0xe89797)
            .toArray()))
            ,[props.total, Color]
    )

    useEffect(() => {
        const dummy = new THREE.Object3D();
        let count = 0;
        let totalX = 120000;
        let totalY =  400;
        let totalZ = 400;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random()
            dummy.position.set(posX, posY, posZ);

            let scaleX = 2 + Math.random() * 25 * scaleFactor;
            let scaleY = 2 + Math.random() * 0.5 * scaleFactor;
            let scaleZ = 2 + Math.random() * 1.05 * scaleFactor;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, scaleFactor])

    //step 3: move in random direction
    useFrame((_, delta) =>
    {  

        if(elapsedRef.current < 0.25)
        {
            elapsedRef.current += delta;
            countRef.current += 1;
        }
        else
        {
            speedCoefficientRef.current = (68 / countRef.current);
            elapsedRef.current = 0;
            countRef.current = 0;
        }
        if(ref.current !== undefined && ref.current !== null)
        {
            ref.current.position.x += ((0.5 * speedFactor) * (props.dir) * speedCoefficientRef.current)

            if(props.dir === 1)
            {
                if(ref.current.position.x > props.x + 110000)
                {
                    ref.current.position.x = props.x
                }
            }

            else if(props.dir === -1)
            {
                if(ref.current.position.x < props.x - 110000)
                {
                    ref.current.position.x = props.x
                }
            }
        }

    })
    
    return(
        <>
            <instancedMesh 
                ref = {ref} 
                args = {[null, null, (props.total)]} 
                position = {[props.x, props.y, props.z]}
                frustumCulled = {false}
                rotation = {[-2.8,0,0]}>
                    <boxGeometry args = {[1,1,1]}>
                        <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
                    </boxGeometry>
                    <meshBasicMaterial toneMapped = {false} vertexColors/>
            </instancedMesh>
        </>
    )
}