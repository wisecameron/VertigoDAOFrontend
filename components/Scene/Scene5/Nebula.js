import {  BackSide, DoubleSide, TextureLoader, sRGBEncoding } from "three";
import { useRef, useMemo, useEffect } from "react";
import {useFrame, useLoader} from '@react-three/fiber';


//props: total
export default function Nebula(props)
{
    const ref = useRef();
    const timer = useRef();

    const Loader = new TextureLoader();
    const neb = useLoader(TextureLoader, "nebula.png")
    neb.encoding = sRGBEncoding;

    useFrame((_, delta) =>
    {
        if(props.vis)
        {
            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }

            if(timer.current < 2.8)
            {
                timer.current += delta;
            }
            else if(ref.current.material.opacity < .4)
            {
                ref.current.material.opacity += delta * .2;
            }
        }
        else
        {
            if(timer.current != 0) timer.current = 0;

            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .6;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
        }
    })

    return(




        <mesh position = {props.position} scale = {12} visible = {false} ref = {ref} rotation={[0.5,0,0]}>
            <planeGeometry args = {[44000, 10000]} />
            <meshBasicMaterial map={neb}  transparent emissiveIntensity = {1} opacity = {0}/>
        </mesh>

    )

}

export function Nebula2(props)
{
    const ref = useRef();
    const timer = useRef();

    const Loader = new TextureLoader();
    const neb = useLoader(TextureLoader, "nebula.png")
    neb.encoding = sRGBEncoding;

    useFrame((_, delta) =>
    {
        if(props.vis)
        {
            if(!ref.current.visible)
            {
                ref.current.visible = true;
            }

            if(timer.current < 2.4)
            {
                timer.current += delta;
            }
            else if(ref.current.material.opacity < .4)
            {
                ref.current.material.opacity += delta * .2;
            }
        }
        else
        {
            if(timer.current != 0) timer.current = 0;

            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .6;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
        }
    })

    return(

        <mesh rotation = {[0, .3, 0]} scale = {1} visible = {false} ref = {ref}>
            <sphereBufferGeometry args = {[15000, 16, 32]} />
            <meshBasicMaterial map={neb} side={BackSide} transparent emissiveIntensity = {1} opacity = {0}/>
        </mesh>

    )

}