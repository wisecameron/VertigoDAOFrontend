import React, {useState} from 'react'
import { useThree, useFrame, useLoader } from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import '../../../css/App.css'
import {animated, useSpring} from 'react-spring'
import { ContainerStyles } from './VehicleStyles';
import { Vector3 } from 'three';

export default function Vehicle(props)
{
    const vehicleX = -0.03;
    const vehicleY = 9;

    //refs
    const timeElapsed = useRef(0)
    const speedCoefficient = useRef(1)
    const iterations = useRef(0)

    const VehicleRef = useRef(-20)
    const SpeedRef = useRef(0)

    const brakeRef = useRef(false)
    const mouseRef = useRef(false)

    //state
    const [firstLoad, setLoad] = useState(true);

    //three
    const {camera} = useThree();

    //load glb
    const vehicleLoaded = useLoader(GLTFLoader, 'glb/gatorade.glb')



    document.body.onmousedown = function() 
    { 
        brakeRef.current = false;
        mouseRef.current = true;

        if(firstLoad)
        {
            setLoad(false)
        }
    }
    document.body.onmouseup = function() 
    {
        mouseRef.current = false;
    }

    document.body.onkeydown = function()
    {
        mouseRef.current = false;
        brakeRef.current = true;
    }
    
    document.body.onkeyup = function()
    {
        brakeRef.current = false;
    }

    //set initial camera position.
    useEffect(() =>
    {
        let posY = vehicleY + 1.5;

        camera.position.x = -50;
        camera.position.y = posY + 15;
        camera.position.z = 10
        camera.lookAt(0,posY,-10)
        camera.far = 750;
        camera.updateProjectionMatrix()
    }, [camera])

    useFrame((_, delta) =>
    {
        if(timeElapsed.current < 1)
        {
            timeElapsed.current += delta
            iterations.current += 1
        }
        else
        {
            speedCoefficient.current = 290 / iterations.current;
            iterations.current = 0;
            timeElapsed.current = 0;
        }

        //increase speed if mouse is held down
        if(mouseRef.current)
        {
            if(SpeedRef.current < 5)
            {
                SpeedRef.current += 0.0007 * speedCoefficient.current;
            }
        }
        //decrease speed if brake is held down
        else if(brakeRef.current)
        {
            SpeedRef.current *= 0.97;
        }
        //else gradually decrease speed.
        else if(SpeedRef.current !== 0)
        {
            if(SpeedRef.current > 0.05)
            {
                SpeedRef.current *= 0.998;
            }
            else
            {
                SpeedRef.current = 0;
            }
        }

        //modify vehicle and camera positions.
        camera.position.z -= SpeedRef.current
        VehicleRef.current.position.z -= SpeedRef.current;

    }, [])

    
    const ClickHereStyles = useSpring(
        {
            from: {
                color: "white", fontSize: "6vmin", opacity: 0
            },
            to: {
                color: "white", fontSize: "6vmin", opacity: 1
            },
            config: {duration: 400},
            delay: 1200
        })





    return(
        <>
            <group position = {[vehicleX, vehicleY, -19]} ref = {VehicleRef}>
            <primitive object = {vehicleLoaded.scene} rotation = {[0, 1.55, 0]} scale = {0.4}/>
                <Html>
                    <animated.div 
                    style = {ContainerStyles(firstLoad)}>
                        <animated.h1
                        style = {ClickHereStyles}
                        className = "fontLink">&nbsp;&nbsp;&nbsp;Click And Hold To Accelerate. <br/> &nbsp;&nbsp;&nbsp;Press Any Key To Slow Down.</animated.h1>
                    </animated.div>
                </Html>
            </group>
        </>
    )
}

