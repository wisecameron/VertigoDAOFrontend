import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect } from 'react';
import { useScroll } from '@react-three/drei';

export default function CarOptimized(props)
{
    const ref = useRef();
    const meshRef = useRef();
    const lightRef = useRef();

    const scroll = useScroll();
    let offset;

    const cop = useRef((Math.random() < 0.2));
    const speed = useRef(400);
    const direction = useRef((Math.random() > 0.5)); //pos is true
    const iterations = useRef(0);

    const ResetPositions = () =>
    {
        if(ref.current === undefined) return;

        ref.current.position.x = (direction.current) ? -400: 1000;
        ref.current.position.y = 100 + Math.random() * 1000;
        ref.current.position.z = Math.random() * 750;
    }

    const ResetScale = () =>
    {
        meshRef.current.scale.x = 2 + Math.random() * 45;
        meshRef.current.scale.y = 2 + Math.random() * 5;
        meshRef.current.scale.z = 2 + Math.random() * 15;
    }

    useEffect(() =>
    {
        ResetScale();
    }, [])

    useFrame((_, delta) =>
    {
        let offset = scroll.offset;
        if(offset > 1) offset = 0;

        //Case: visible
        if(offset >= props.minVis && offset < props.maxVis)
        {
            //upkeep
            if(ref.current.visible == false) ref.current.visible = true;

            if(lightRef.current.intensity < 30)
            {
                lightRef.current.intensity += delta * 30;
            }

            if(meshRef.current.material.opacity < 1)
            {
                meshRef.current.material.opacity += delta * .5;
            }

            //console.log(ref.current.visible, lightRef.current.intensity, meshRef.current.material.opacity)

            // Check/handle reset
            if(ref.current.position.x > 1500 || ref.current.position.x < -2000)
            {
                //handle cop
                if(Math.random() < .2) cop.current = true;
                else cop.current = false;
    
                //init values
                if(cop.current)
                {
                    lightRef.current.color.set("red")
                    meshRef.current.material.color.set("red")
                    iterations.current = 0;
                }
                else
                {
                    lightRef.current.color.set(props.lightColor);
                    meshRef.current.material.color.set(props.materialColor);
                }
    
                ResetPositions();
                ResetScale();
    
                return;
            }
            /*
                MOVEMENT
            */
            else
            {
                if(direction.current)
                {
                    ref.current.position.x += delta * speed.current;
                }
                else
                {
                    ref.current.position.x -= delta * speed.current;
                }
            }
    
            /*
                HANDLE COP
            */
            if(cop.current)
            {
                if(iterations.current > .2)
                {
                    lightRef.current.color.getHexString() === "fe0000" ? lightRef.current.color.set("blue") : lightRef.current.color.set("red");
                    iterations.current = 0;
                }
                iterations.current += delta;
            }

            return;
        }
        //Case: invisible
        //upkeep

        if(lightRef.current.intensity > 0 || meshRef.current.material.opacity > 0)
        {
            if(lightRef.current.intensity > 0)
            {
                lightRef.current.intensity -= delta * 30;
            }
            if(meshRef.current.material.opacity > 0)
            {
                meshRef.current.material.opacity -= delta * .5;
            }

            if(direction.current)
            {
                ref.current.position.x += delta * speed.current;
            }
            else
            {
                ref.current.position.x -= delta * speed.current;
            }
        }
        else if(ref.current.visible === true) ref.current.visible = false;

        

    })

    return(
        <group ref = {ref} position = {[-400 + Math.random() * 1400, 100 + Math.random() * 1000,  Math.random() * 750]}>

            <pointLight ref = {lightRef} intensity = {30} decay = {2} distance = {600} color = {props.lightColor}/>

            <mesh ref = {meshRef} scale = {[1,1,1]} >
                <boxGeometry args = {[1,1,1]} />
                <meshBasicMaterial color = {cop.current ? "red" : props.materialColor} transparent/>
            </mesh>

        </group>
    );
}

