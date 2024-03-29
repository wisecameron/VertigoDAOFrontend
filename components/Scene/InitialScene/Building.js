import React, {useRef, useEffect, useState, useMemo} from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three';

export function BuildingInstanced(props)
{
    const ref = useRef()
    const cutoff = props.cutoff;
    const count = props.count;


    const dummy = useMemo(() => new Object3D());

    let [dir, setDir] = useState(0); //0 down.

    useEffect(() =>
    {
        let x = -1500;
        let z = 0;
        let total = 0;

        for(let j = 0; j < cutoff + 50; j++)
        {
            for(let i = 0; i < count; i++)
            {
                let height = 100 + (Math.random() * 1000);

                dummy.position.set(x, height/2, z);
                dummy.scale.set(30, height, 30);
                dummy.updateMatrix();
                ref.current.setMatrixAt(total, dummy.matrix);
                z += 60;
                total++;
            }
            z = 0;
            x += 60;
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [count, cutoff])

    useFrame((_, delta) =>
    {
        if(ref.current.material.opacity < 1)
        {
            ref.current.material.opacity += delta * 0.2;
        }

        if(dir === 0)
        {
            ref.current.position.y -= 0.01;
            if(ref.current.position.y < -100)
            {
                setDir(1);
            }
        }
        else
        {
            ref.current.position.y += 0.01;
            if(ref.current.position.y > 100)
            {
                setDir(0);
            }
        }
    })

    return(
        <instancedMesh ref = {ref} args = {[null, null, (props.cutoff * props.count * 3)]} frustumCulled = {false} >
            <boxBufferGeometry args = {[1,1,1]} />
            <meshPhongMaterial color ="black" shininess = {20} transparent = {true} opacity = {0}/>
        </instancedMesh>
    )
}


export function BuildingInstanced2(props)
{
    const ref = useRef()
    const cutoff = props.cutoff;
    const count = props.count;
    const timer = useRef(0)
    const dummy = useMemo(() => new Object3D());

    let [dir, setDir] = useState(0); //0 down.

    useEffect(() =>
    {
        let x = -1500;
        let z = 0;
        let total = 0;

        for(let j = 0; j < cutoff + 50; j++)
        {
            for(let i = 0; i < count; i++)
            {
                let height = 100 + (Math.random() * 1000);

                dummy.position.set(x, height/2, z);
                dummy.scale.set(30, height, 30);
                dummy.updateMatrix();
                ref.current.setMatrixAt(total, dummy.matrix);
                z += 60;
                total++;
            }
            z = 0;
            x += 60;
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [count, cutoff])

    useFrame((_, delta) =>
    {
        if(props.vis === undefined) return;

        if(props.vis)
        {
            if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * 0.2;
            }

            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }
        }
        else
        {
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .2;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
        }
    })

    return(
        <instancedMesh ref = {ref} args = {[null, null, (props.cutoff * props.count * 3)]} frustumCulled = {false} >
            <boxBufferGeometry args = {[1,1,1]} />
            <meshPhongMaterial color ="black" shininess = {20} transparent = {true} opacity = {1}/>
        </instancedMesh>
    )
}