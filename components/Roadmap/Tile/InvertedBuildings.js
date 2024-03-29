import React, {useRef, useEffect, useMemo, useState} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import * as THREE from 'three'

const X_BETWEEN = 2;
const Z_BETWEEN = 2;
const SCALE = 20;

export default function InvertedBuildings(props) //xSpan, zSpan
{
    const meshRef = useRef();
    const groupRef = useRef();

    const {camera} = useThree()
    const dummy = useMemo(() => new THREE.Object3D(), []);


    //props
    let xSpan = props.xSpan;
    let zSpan = props.zSpan;

    let totalWidth = (SCALE + X_BETWEEN) * xSpan;
    let totalLength = (SCALE + Z_BETWEEN) * zSpan;

    const zShift = (props.position === undefined) ? 0 : props.position[2];

    console.log(zShift)

    useEffect(() =>
    {
        let total = 0;
        let posX = -totalWidth / 2; //increment for each j, reset each iteration i
        let posZ = totalLength / 2; //increment permanently for each iteration i

        for(let i = 0; i < xSpan; i++)
        {
            for(let j = 0; j < zSpan; j++)
            {
                let height = 30 + Math.random() * 50;
                
                dummy.position.set(posX, 120 - (height / 2), posZ);
                dummy.scale.set(SCALE, height, SCALE);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(total, dummy.matrix);

                total++;
                posX += (SCALE + X_BETWEEN);
            }
            posX = -totalWidth / 2;
            posZ -= (SCALE + Z_BETWEEN);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [dummy, totalLength, totalWidth, xSpan, zSpan])

    useFrame(() =>
    {
        groupRef.current.rotation.y += 0.0002;

        groupRef.current.position.z = camera.position.z + zShift;
    })

    return(
        <>
            <group {...props} ref = {groupRef}>
                <instancedMesh ref = {meshRef} args = {[null, null, (xSpan * zSpan * 3)]} frustumCulled = {false}>
                    <boxBufferGeometry args = {[1,1,1]}/>
                    <meshPhongMaterial color = "white" shininess = {10}/>
                </instancedMesh>
            </group>
        </>
    )

}


export function InvertedBuildingsBottom(props) //xSpan, zSpan
{
    const meshRef = useRef();
    const groupRef = useRef();

    const {camera} = useThree()
    const dummy = useMemo(() => new THREE.Object3D(), []);

    //props
    let xSpan = props.xSpan;
    let zSpan = props.zSpan;

    let totalWidth = (SCALE + X_BETWEEN) * xSpan;
    let totalLength = (SCALE + Z_BETWEEN) * zSpan;

    useEffect(() =>
    {
        let total = 0;
        let posX = -totalWidth / 2; //increment for each j, reset each iteration i
        let posZ = totalLength / 2; //increment permanently for each iteration i

        for(let i = 0; i < xSpan; i++)
        {
            for(let j = 0; j < zSpan; j++)
            {
                let height = 30 + Math.random() * 50;
                
                dummy.position.set(posX, -80 + (height / 2), posZ);
                dummy.scale.set(SCALE, height, SCALE);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(total, dummy.matrix);

                total++;
                posX += (SCALE + X_BETWEEN);
            }
            posX = -totalWidth / 2;
            posZ -= (SCALE + Z_BETWEEN);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [dummy, totalWidth, totalLength, xSpan, zSpan])

    useFrame(() =>
    {
        groupRef.current.rotation.y -= .0001;
        groupRef.current.position.z = camera.position.z;
    })

    return(
        <>
            <group {...props} ref = {groupRef}>
                <instancedMesh ref = {meshRef} args = {[null, null, (xSpan * zSpan * 3)]} frustumCulled = {false}>
                    <boxBufferGeometry args = {[1,1,1]}/>
                    <meshPhongMaterial color = "white" shininess = {10}/>
                </instancedMesh>
            </group>
        </>
    )
}

export function InvertedBuildingsIntro(props) //xSpan, zSpan
{
    const X_BETWEEN2 = 5;
    const Z_BETWEEN2 = 5;

    const meshRef = useRef();
    const groupRef = useRef();

    const {camera} = useThree()
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const [vis, setVis] = useState(true)
    const dir = useRef(0)

    //props
    let xSpan = props.xSpan;
    let zSpan = props.zSpan;

    let totalWidth = (SCALE + X_BETWEEN2) * xSpan;
    let totalLength = (SCALE + Z_BETWEEN2) * zSpan;

    const zShift = (props.position === undefined) ? 0 : props.position[2];

    console.log(zShift)

    useEffect(() =>
    {
        let total = 0;
        let posX = -totalWidth / 2; //increment for each j, reset each iteration i
        let posZ = totalLength / 2; //increment permanently for each iteration i

        for(let i = 0; i < xSpan; i++)
        {
            for(let j = 0; j < zSpan; j++)
            {
                let height = 30 + Math.random() * 50;
                
                dummy.position.set(posX, 120 - (height / 2) + Math.random() * 500, posZ);
                dummy.scale.set(SCALE, height, SCALE);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(total, dummy.matrix);

                total++;
                posX += (SCALE + X_BETWEEN + Math.random() * 10);
            }
            posX = -totalWidth / 2;
            posZ -= (SCALE + Z_BETWEEN + Math.random() * 10);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [dummy, totalLength, totalWidth, xSpan, zSpan])

    useFrame(() =>
    {
        groupRef.current.rotation.x += 0.0005;
        /*
        if(dir.current == 0)
        {
            if(groupRef.current.rotation.y < 1.6)
            {


                groupRef.current.rotation.y += 0.0004
    
            }
            else
            {
                dir.current = 1;
            }
        }
        else if(dir.current == 1)
        {
            if(groupRef.current.rotation.y > 0.4)
            {
                groupRef.current.rotation.y -= 0.0004;
            }
            else
            {
                dir.current = 0;
            }
        }*/

        groupRef.current.position.z = camera.position.z + zShift;

    })


    return(
        <>
            <group {...props} ref = {groupRef} rotation = {[-Math.PI * 0.5, 0, -Math.PI / 2]}>
                <instancedMesh 
                ref = {meshRef} 
                args = {[null, null, (xSpan * zSpan * 3)]} 
                frustumCulled = {true}
                visible = {vis}>
                    <boxBufferGeometry args = {[1,1,1]}/>
                    <meshPhongMaterial color = "white" shininess = {10}/>
                </instancedMesh>
            </group>
        </>
    )

}

export function InvertedBuildingsFar(props) //xSpan, zSpan
{
    const meshRef = useRef();
    const groupRef = useRef();

    const {camera} = useThree()
    const dummy = useMemo(() => new THREE.Object3D(), []);

    //props
    let xSpan = props.xSpan;
    let zSpan = props.zSpan;

    let totalWidth = (SCALE + X_BETWEEN) * xSpan;
    let totalLength = (SCALE + Z_BETWEEN) * zSpan;

    const zShift = (props.position === undefined) ? 0 : props.position[2];


    console.log(zShift)

    useEffect(() =>
    {
        let total = 0;
        let posX = -totalWidth / 2; //increment for each j, reset each iteration i
        let posZ = totalLength / 2; //increment permanently for each iteration i

        for(let i = 0; i < xSpan; i++)
        {
            for(let j = 0; j < zSpan; j++)
            {
                let height = 30 + Math.random() * 50;
                
                dummy.position.set(posX, 120 - (height / 2), posZ);
                dummy.scale.set(SCALE, height, SCALE);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(total, dummy.matrix);

                total++;
                posX += (SCALE + X_BETWEEN);
            }
            posX = -totalWidth / 2;
            posZ -= (SCALE + Z_BETWEEN);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [dummy, totalLength, totalWidth, xSpan, zSpan])

    useFrame(() =>
    {
        groupRef.current.rotation.x += 0.0002
        groupRef.current.position.z = camera.position.z + zShift;
    })

    return(
        <>
            <group {...props} ref = {groupRef}>
                <instancedMesh ref = {meshRef} args = {[null, null, (xSpan * zSpan * 3)]} frustumCulled = {false}>
                    <boxBufferGeometry args = {[1,1,1]}/>
                    <meshPhongMaterial color = "white" shininess = {10}/>
                </instancedMesh>
            </group>
        </>
    )

}
