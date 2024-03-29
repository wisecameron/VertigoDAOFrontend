import React, { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import Car from './Car'
import { BuildingInstanced, BuildingInstanced2 } from './Building';
import '../../../css/App.css'
import CarMobile from './CarMobile'
import InFrameChecker from '../../InFrameChecker';
import { useScroll } from '@react-three/drei';
import CarOptimized from './CarOptimized';


export default function BuildingScene(props)
{
    const [inFrame1, setInFrame1] = useState(false)
    const [inFrame2, setInFrame2] = useState(false)

    let ReturnValue = '';
    const lights = 8;

    const {camera} = useThree();
    if(props.mobile)
    {
        camera.position.x = 800
        camera.position.y = 1600
        camera.position.z = 1300
        camera.lookAt(0,0,0)
    }

    if(inFrame1)
    {
        ReturnValue = (
            <>
                <pointLight intensity = {0.5} position = {[0, 1600, 0]}/>
                {Array.from({length: (props.graphics > 1 ? lights:0)}, (_, i) => (
                    <CarOptimized key = {i} corrupted = {false} lightColor = "#b042f5" materialColor = "#b042f5" />
                    ) ) }
                <BuildingInstanced count = {15} cutoff = {15} />
            </>
        )
    }
    else if(inFrame2)
    {
        ReturnValue = (
            <>
                <pointLight intensity = {1} position = {[0, 1600, 0]}/>
                {Array.from({length: props.graphics > 1 ? lights / 2 : 0}, (_, i) => (<Car key = {i} corrupted = {true}/>) ) }
                <BuildingInstanced count = {15} cutoff = {15} />
            </>)
    }

    return(
        <>
            <InFrameChecker
            posLow = {0} 
            posHigh = {2} 
            pages = {props.pages} 
            inFrame = {inFrame1}
            setInFrame = {(val) => {setInFrame1(val)}}/>
            <InFrameChecker
                posLow = {6.01} 
                posHigh = {12} 
                pages = {props.pages} 
                inFrame = {inFrame2}
                setInFrame = {(val) => {setInFrame2(val)}}/>
            {ReturnValue}
        </>
    )
}

/*

    graphics
    minVis
    maxVis
    corrupted
    lights

*/
export function BuildingLoader(props)
{
    const lights = 8;
    const ref = useRef();
    let len;

    if(props.graphics === 1 || props.graphics === undefined)
    {
        len = 0;
    }
    else if(props.graphics === 2)
    {
        len = 4;
    }
    else{
        len = 8;
    }

    const cars = useMemo(() => Array.from({length: len}, (_, i) => (<CarOptimized key = {i} corrupted = {false} lightColor = {props.lightCol} materialColor = {props.lightCol} minVis = {0} maxVis = {0.0875} />) ), [len, props.lightCol])
    const waitTimer =  useRef(0)

    const rv1 = useMemo(() => {
        return (
            <>

            </>
        );
    }, [cars, props.vis, props.wait]);


    useFrame((_, delta) =>
    {
        if(props.vis === undefined) return;

        if(props.vis)
        {
            if(!ref.current.visible)
            {
                if(waitTimer.current < props.wait)
                {
                    waitTimer.current += delta;
                }
                else
                {
                    ref.current.visible = true;
                }
            }
        }

    })

    

    return(
        <group ref = {ref}>
                <pointLight intensity={0.2} position={[0, 1600, 0]} visible={true} />
                {cars}
                <BuildingInstanced2 count={15} cutoff={15} vis={props.vis} wait={props.wait} />
        </group>
    )
}

/*
    Starts off completely invisble.
*/
export function BuildingLoader2(props)
{
    const lights = 8;
    const ref = useRef();
    const cars = useMemo(() => Array.from({length: (props.graphics > 1 ? lights:0)}, (_, i) => (<CarOptimized key = {i} corrupted = {false} lightColor = {props.lightCol} materialColor = {props.lightCol} minVis = {0} maxVis = {0.0875}/>) ), [])
    const waitTimer =  useRef(0)


    useFrame((_, delta) =>
    {
        if(props.vis === undefined) return;

        if(props.vis)
        {
            if(!ref.current.visible)
            {
                if(waitTimer.current < props.wait)
                {
                    waitTimer.current += delta;
                }
                else
                {
                    ref.current.visible = true;
                }
            }
        }
    })

    if(!props.vis)
    {
        return null;
    }

    return(
        <group ref = {ref}>
            <pointLight  intensity = {0.2} position = {[0, 1600, 0]} visible = {props.lightVis}/>
            {cars}
            <BuildingInstanced2 count = {15} cutoff = {15} vis = {props.vis} wait = {props.wait}/>
        </group>
    )
}

export function BuildingSceneMobile()
{
    const lights = 12;
    const cars = useMemo(() => Array.from({length: lights}, (_, i) => (<CarMobile key = {i} corrupted = {false}/>) ), [] )
    const {camera} = useThree();

    camera.position.x = 800
    camera.position.y = 1500
    camera.position.z = 1000
    camera.lookAt(0,0,0)

    return(
        <>
            <pointLight intensity = {1} position = {[600, 1600, 0]}/>
            {cars}
            <BuildingInstanced count = {12} cutoff = {12} />
        </>
    )
}
