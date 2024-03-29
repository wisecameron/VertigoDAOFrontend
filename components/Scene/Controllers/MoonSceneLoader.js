import React, { Suspense } from 'react'
import '../../../css/App.css'
import Moon from '../StarScene/Moon.js';
import {ConvoyLong} from '../StarScene/Convoy.js';
import Asteroids from '../StarScene/Asteroids'

export default function MoonSceneLoader(props)
{
    const minVis = 0.5;
    const maxVis = 0.5;

    return(
        <>
            <Moon 
                pages = {props.pages} 
                graphics = {props.graphics}
                visibleMin = {minVis}
                visibleMax = { maxVis }
            />

            <Asteroids 
                total = {440}                 
                visibleMin = {minVis}
                visibleMax = { maxVis }
            />
            
            <ConvoyLong 
                total = {2000} 
                x = {-100500} 
                y = {2700} 
                z = {1000} 
                dir = {1} 
                visibleMin = {minVis}
                visibleMax = { maxVis }
                graphics ={props.graphics} 
                pages = {props.pages} 
                scaleFactor = {0.5}
                speedFactor = {0.5}
            />
            <ConvoyLong 
                total = {2000} 
                x = {-17000} 
                y = {2800} 
                visibleMin = {minVis}
                visibleMax = {maxVis}
                z = {-12400} 
                dir = {-1} 
                graphics = {props.graphics} 
                pages = {props.pages}
                speedFactor = {0.25}
            />
        </>
    )
}