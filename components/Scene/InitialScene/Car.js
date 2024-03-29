/*
    DEPRECATED, EXTREMELY INEFFICIENT.  USE CAROPTIMIZED INSTEAD.
*/

import React, {useState, useRef, useMemo} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Car(props)
{
    const [posX, setX] = useState((Math.random() * 700));
    const [posY, setY] = useState(250 + Math.random() * 700);
    const [posZ, setZ] = useState((Math.random() * 1000));
    const [cop, setCop] = useState(Math.random() > 0.15 ? 0:1);

    const velocityRef = useRef(0.5 + (Math.random() * Math.random() * Math.random()) * 10);
    const directionRef = useRef(Math.round(Math.random()));
    const lightColorRef = useRef("#b042f5");
    const iterationsRef = useRef(0);
    const buggyColorRef = useRef("#b042f5");
    const buggySize = useRef([2 + Math.random() * 45, 2 + Math.random() * 5, 2 + Math.random() * 15]);
    const speedCoefficientRef = useRef(1);
    const elapsedRef = useRef(0);
    const countRef = useRef(0);

    //main logic
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

        (directionRef.current === 0) ? setX(posX + (velocityRef.current * speedCoefficientRef.current)) : setX(posX - (velocityRef.current * speedCoefficientRef.current))
        if(cop === 1)
        {
            HandleCop();
        }
        else
        {
            HandleRegular();
        }

        if(posX > 1500 || posX < -2000)
        {
            HandleReset();
        }
    })

    //inner logic
    const HandleCop = () =>
    {
        if(iterationsRef.current > 40)
        {
            (lightColorRef.current === "blue") ? lightColorRef.current = ("red"): lightColorRef.current = ("blue");
            iterationsRef.current = 0;
        }
        else iterationsRef.current = iterationsRef.current + (1 * speedCoefficientRef.current);
        if(buggyColorRef.current !== "red") buggyColorRef.current = "red";
    }

    //#b042f5
    // #eedd82 old

    const HandleRegular = () =>
    {
        let color = (props.corrupted) ? "#d6d6d6":"#b042f5";
        let buggycolor = (props.corrupted) ? "white":"#b042f5";

        if(lightColorRef.current !== color) lightColorRef.current = (color);
        if(buggycolor !== buggyColorRef.current) buggyColorRef.current = (buggycolor);
    }

    const HandleReset = () =>
    {
        let isCop = Math.random() > 0.1 ? 0:1;

        setCop(isCop);
        setX((directionRef.current === 0) ? -400: 1000);
        setY(100 + Math.random() * 1000);
        setZ(Math.random() * 750);
        buggySize.current = ([2 + Math.random() * 45, 2 + Math.random() * 5, 2 + Math.random() * 15])
        velocityRef.current = (0.5 + (Math.random() * Math.random() * Math.random()) * 10);
        directionRef.current = (Math.round(Math.random()))

    }

    //handle return (pointLight only if velocity < 6)
    if(velocityRef.current < 6) return(slowReturn(posX, posY, posZ, lightColorRef.current, buggyColorRef.current, buggySize.current));
    return fastReturn(posX, posY, posZ, buggyColorRef.current);
}

function slowReturn(posX, posY, posZ, lightcolor, buggycolor, buggySize)
{
    return(
        <group position = {[posX, posY, posZ]} >
            <pointLight color = {
                new THREE.Color(lightcolor)
            } intensity = {30} decay = {2} distance = {600}/>
                <mesh>
                    <boxGeometry args = {[buggySize[0], buggySize[1], buggySize[2]]} />
                    <meshBasicMaterial color = {buggycolor} />
                </mesh>
        </group>
    )
}

function fastReturn(posX, posY, posZ, buggycolor)
{
    return(            
        <group position = {[posX, posY, posZ]}>
            <mesh>
                <boxGeometry args = {[3,3,3]} />
                <meshBasicMaterial color = {buggycolor} />
            </mesh>
        </group>
    )
}

export function FlyBy(props)
{
    const [posX, setX] = useState(props.X)
    const [posY] = useState(props.Y)
    const [posZ, setZ] = useState(props.Z)
    const [nulRet, setNulRet] = useState(false)


    if(!nulRet)
    {
        if(posX > 16000 || posX < -16000 || posZ > 16000 || posZ < -16000) setNulRet(true)
    }

    
    useFrame(() =>
    {
        if(!nulRet)
        {
            setX(posX - 3)
            setZ(posZ - 6)
        }
    })

    if(nulRet) return null;

    return(
        <mesh position = {[posX, posY, posZ]}>
            <boxGeometry args = {[25,15,40]} />
            <meshBasicMaterial color = {"red"} />
        </mesh>
    )
}



export function FlyByLoader(props)
{
    return null
}


export function CarsInstanced(props)
{
    const positions =  useMemo(() =>
    {
        
    })
}