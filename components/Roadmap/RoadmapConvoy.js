import React, { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export function ConvoySmallNeg(props) //props.hops -> 0 = -600 - (600 * 0) , props.total
{
    const {camera} = useThree()
    const Color = useMemo(() => new THREE.Color(), [])
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const ref = useRef()

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.total)
        .fill()
        .flatMap((_, i) => Color.setHex(
            (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.2) ? (Math.random() > 0.5) ? 0xccbae3 : 0x728d9c : (Math.random() > 0.5) ? 0xe89797 : 0xc088db)
            .toArray()))
            ,[props.total, Color]
    )

    useEffect(() => {
        let count = 0;
        let totalX = 4;
        let totalY =  2;
        let totalZ = 6000;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random();
            dummy.position.set(posX, posY, posZ);

            let scaleX =  Math.random() * 0.5;
            let scaleY =  Math.random() * 0.5;
            let scaleZ = Math.random() * 3;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, dummy])

    //step 3: move in random direction
    useFrame(() =>
    {  
        ref.current.position.z -= (props.speed)

        if(ref.current.position.z > camera.position.z - 500)
        {
            ref.current.position.z = camera.position.z - 5000;
        }
    })

    return(
    <instancedMesh 
    ref = {ref} 
    args = {[null, null, (props.total * 3)]} 
    position = { [ props.x , props.y, -5000 ] }
    frustumCulled = {false}
    {...props}>
        <boxBufferGeometry args = {[1,1,1]}>
            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
        </boxBufferGeometry>
        <meshBasicMaterial toneMapped = {false} vertexColors/>
    </instancedMesh>) 
}

export function ConvoySmallPos(props) //props.hops -> 0 = -600 - (600 * 0) , props.total
{
    const Color = useMemo(() => new THREE.Color(), [])
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const ref = useRef()
    const {camera} = useThree()

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.total)
        .fill()
        .flatMap((_, i) => Color.setHex(
            (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.2) ? (Math.random() > 0.5) ? 0xccbae3 : 0x728d9c : (Math.random() > 0.5) ? 0xe89797 : 0xc088db)
            .toArray()))
            ,[props.total, Color]
    )
        

    useEffect(() => {
        let count = 0;
        let totalX = 4;
        let totalY =  2;
        let totalZ = 6000;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random();
            dummy.position.set(posX, posY, posZ);

            let scaleX =  Math.random() * 0.5;
            let scaleY =  Math.random() * 0.5;
            let scaleZ = Math.random() * 3;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, dummy])

    //step 3: move in random direction
    useFrame(() =>
    {  
        ref.current.position.z += (props.speed)

        if(ref.current.position.z > camera.position.z - 500)
        {
            ref.current.position.z = camera.position.z - 5000;
        }
    })

    return(
    <instancedMesh 
    ref = {ref} 
    args = {[null, null, (props.total * 3)]} 
    position = { [ -7 , 5, -6000 ] }
    frustumCulled = {false}
    {...props}>
        <boxBufferGeometry args = {[1,1,1]}>
            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
        </boxBufferGeometry>
        <meshBasicMaterial toneMapped = {false} vertexColors/>
    </instancedMesh>) 
}

export function ConvoyHuge(props)
{
    const Color = useMemo(() => new THREE.Color(), [])
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const ref = useRef()
    const {camera} = useThree()

    const ColorArray = useMemo(() => 
    Float32Array.from(new Array(props.total)
    .fill()
    .flatMap((_, i) => Color.setHex(
        (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.2) ? (Math.random() > 0.5) ? 0xccbae3 : 0x728d9c : (Math.random() > 0.5) ? 0xe89797 : 0xc088db)
        .toArray()))
        ,[props.total, Color]
    )
    
    useEffect(() => {
        let count = 0;
        let totalX = 400;
        let totalY =  100;
        let totalZ = 600;

        for(count; count < props.total; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random();
            dummy.position.set(posX, posY, posZ);

            let scaleX =  Math.random() * 3;
            let scaleY =  Math.random() * 0.5;
            let scaleZ = Math.random() * .5;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, dummy])

    //step 3: move in given direction
    useFrame(() =>
    {  
        ref.current.position.x += (props.speed);
        ref.current.position.z = camera.position.z - 200;
    })

    return(
        <instancedMesh 
        ref = {ref} 
        args = {[null, null, (props.total * 3)]} 
        position = { [ -100 , -50, 0 ] }
        frustumCulled = {false}
        {...props}>
            <boxBufferGeometry args = {[1,1,1]}>
                <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
            </boxBufferGeometry>
            <meshBasicMaterial toneMapped = {false} vertexColors/>
        </instancedMesh>) 
    
}