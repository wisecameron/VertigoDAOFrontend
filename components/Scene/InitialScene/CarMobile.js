/*
    DEPRECATED, EXTREMELY INEFFICIENT. 
*/

import React, {useState, useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CarMobile(props)
{
    const [posX, setX] = useState((Math.random() * 200))
    const [posY, setY] = useState(250 + Math.random() * 700)
    const [posZ, setZ] = useState((Math.random() * 100))

    const [velocity, setVelocity] = useState(0.5 + (Math.random() * Math.random() * Math.random()) * 10)
    const [direction, setDir] = useState(Math.round(Math.random()))

    const [lightcolor, setcolor] = useState("#b042f5")
    const [cop, setCop] = useState((Math.random() * Math.random() > 0.75) ? 1:0)

    const [iterations, setIter] = useState(0)
    const [buggyColor, setBuggyColor] = useState("#b042f5")
    const [buggySize, setSize] = useState([2 + Math.random() * 45, 2 + Math.random() * 5, 2 + Math.random() * 15])

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

        (direction === 0) ? setX(posX + (velocity * speedCoefficientRef.current)) : setX(posX - (velocity * speedCoefficientRef.current))

        if(cop === 1)
        {
            HandleCop()
        }
        else
        {
            HandleRegular()
        }
        if(posX > 1500 || posX < -500)
        {
            HandleReset()
        }
    })

    //inner logic
    const HandleCop = () =>
    {
        if(iterations > 40)
        {
            (lightcolor === "blue") ? setcolor("red"):setcolor("blue");
            setIter(0);
        }
        else setIter(iterations + (1 * speedCoefficientRef.current));
        if(buggyColor !== "red") setBuggyColor("red");
    }

    const HandleRegular = () =>
    {
        let color = (props.corrupted) ? "darkred":"#b042f5";
        let buggycolor = (props.corrupted) ? "white":"#b042f5";
        if(lightcolor !== color) setcolor(color);
        if(buggycolor !== buggyColor) setBuggyColor(buggycolor);
    }

    const HandleReset = () =>
    {
        setX((direction === 0) ? -400: 1000);
        setY(100 + Math.random() * 1000);
        setZ(Math.random() * 750);
        setSize([2 + Math.random() * 45, 2 + Math.random() * 5, 2 + Math.random() * 15])
        setVelocity(0.5 + (Math.random() * Math.random() * Math.random()) * 10);
        setDir(Math.round(Math.random()))
        if(!props.corrupted) setCop((Math.random() * Math.random() > 0.65) ? 1:0);
        else setCop(0);
    }


    //handle return (pointLight only if velocity < 6)
    if(velocity < 6) return(slowReturn(posX, posY, posZ, lightcolor, buggyColor, buggySize));
    return fastReturn(posX, posY, posZ, buggyColor);
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