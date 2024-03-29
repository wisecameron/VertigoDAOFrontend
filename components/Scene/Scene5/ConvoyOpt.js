import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'


export function ConvoyOpt(props)
{
    let scaleFactor = (props.scaleFactor === undefined) ? 1 : props.scaleFactor;
    let speedFactor = (props.speedFactor === undefined) ? 1 : props.speedFactor;

    const timer = useRef(0)

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
        let totalX = 300000;
        let totalY =  800;
        let totalZ = 800;

        let t = props.total;

        if(props.graphics === 1)
        {
            t = 0;
        }
        if(props.graphics === 2)
        {
            t *= .5;
        }

        for(count; count < t; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random()
            dummy.position.set(posX, posY, posZ);

            let scaleX = 2 + Math.random() * 305 * scaleFactor;
            let scaleY = 2 + Math.random() * 4.5 * scaleFactor;
            let scaleZ = 2 + Math.random() * 4.05 * scaleFactor;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, inFrame, scaleFactor, props.graphics])

    //step 3: move in random direction
    useFrame((_, delta) =>
    { 

        offset = 0; 
        if(scroll.offset < 1) offset = scroll.offset;

        if(!props.vis || props.graphics === 1)
        {
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * 2;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
            if(timer.current != 0) timer.current = 0;
        }
        else
        {
            if(timer.current < 2.8)
            {
                timer.current += delta;
                return;
            }


            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }
            if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * .5;
            }

            ref.current.position.x += (delta * 400) * ((props.neg === true) ? -1 : 1);
            if(props.neg !== true)
            {
                if(ref.current.position.x > -11000) ref.current.position.x = -275000
            }
            else if(ref.current.position.x < -200000) ref.current.position.x = -1000;
            
        }


    })
    
    return(
        <>

                <instancedMesh 
                    ref = {ref} 
                    args = {[null, null, (props.total)]} 
                    frustumCulled = {false}
                    rotation = {[-2.8,0,0]}
                    visible = {false}
                    {...props}>
                        <boxGeometry args = {[1,1,1]}>
                            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
                        </boxGeometry>
                        <meshBasicMaterial toneMapped = {false} vertexColors/>
                </instancedMesh>

        </>
    )
}

export function ConvoyOpt2(props)
{
    let scaleFactor = (props.scaleFactor === undefined) ? 1 : props.scaleFactor;
    let speedFactor = (props.speedFactor === undefined) ? 1 : props.speedFactor;

    const timer = useRef(0)

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
        let totalX = 50;
        let totalY =  50;
        let totalZ = 50;

        let t = props.total;


        for(count; count < t; count++)
        {
            let posX = totalX * Math.random();
            let posY = totalY * Math.random();
            let posZ = totalZ * Math.random()
            dummy.position.set(posX, posY, posZ);

            let scaleX = 2 + Math.random() * 305 * scaleFactor;
            let scaleY = 2 + Math.random() * 4.5 * scaleFactor;
            let scaleZ = 2 + Math.random() * 4.05 * scaleFactor;
            dummy.scale.set(scaleX, scaleY, scaleZ)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total, scaleFactor])

    //step 3: move in random direction
    useFrame((_, delta) =>
    { 
        if(props.vis === false)
        {
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * 2;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
            if(timer.current != 0) timer.current = 0;
        }
        else
        {
            if(timer.current < 2.8)
            {
                timer.current += delta;
                return;
            }

            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }
            if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * .5;
            }

            ref.current.position.x += (delta * 400) * ((props.neg === true) ? -1 : 1);
            if(ref.current.position.x > -11000) ref.current.position.x = -275000
        }


    })
    
    return(
        <>

                <instancedMesh 
                    ref = {ref} 
                    args = {[null, null, (props.total)]} 
                    frustumCulled = {false}
                    rotation = {[-2.8,0,0]}
                    visible = {false}
                    {...props}>
                        <boxGeometry args = {[1,1,1]}>
                            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
                        </boxGeometry>
                        <meshBasicMaterial toneMapped = {false} vertexColors/>
                </instancedMesh>

        </>
    )
}