import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Object3D, Vector3 } from "three";
import { easeInOutQuad } from "../Controllers/CameraController";
import { lerp } from "three/src/math/MathUtils";


export default function Stars(props)
{
    const ref =  useRef()
    const positions = useMemo(() =>
    {

        let x,y,z;

        let map = {
            pos: [],
            rot: []
        };

        for(let i = 0; i < props.total; i++)
        {

            x = PosNeg() * Math.random() * 20000;
            y = PosNeg() * Math.random() * 60000;
            z = PosNeg() * Math.random() * 20000;
    
            map.pos.push(x);
            map.pos.push(y);
            map.pos.push(z);
    
            map.rot.push(Math.random() * PosNeg());
            map.rot.push( 3 * Math.random() * PosNeg())
            map.rot.push( 3 * Math.random() * PosNeg())
        }


        return map;
    }, [props.total])

    useEffect(() =>
    {
        let t = props.total * 3;
        const dummy = new Object3D();
        for(let i = 0; i < t; i+=3)
        {
            dummy.position.set(positions.pos[i], positions.pos[i + 1], positions.pos[ i + 2 ]);
            dummy.rotation.set(positions.rot[i], positions.rot[i + 1], positions.rot[i + 2])
            dummy.updateMatrix()
            ref.current.setMatrixAt(i, dummy.matrix);
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.total]);

    useFrame((_, delta) =>
    {
        if(props.vis && props.graphics > 1)
        {   
            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }

            if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * .25;
            }

            ref.current.position.y -= delta * 300;
            ref.current.rotation.z += delta * .005;
            if(ref.current.position.y < 400)
            {
                ref.current.position.y = 60000;
                ref.current.position.x = -12000;
                ref.current.rotation.z = 0;
            }
        }
        else
        {
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .4;
            }
            else
            {
                ref.current.visible = false;
            }
        }
    })

    return(
        <instancedMesh ref = {ref} args = {[null, null, props.total]} {...props} rotation = {[0.1,0,0]} visible = {false}>
            <circleGeometry args = {[250, 0]} />
            <meshPhongMaterial shininess={30} color = "#606060" transparent opacity = {0}/>
        </instancedMesh>
    )
}

export function PosNeg()
{
    return(Math.random() >= .505 ? 1:-1);
}