import '../../../css/App.css'
import {animated, useSpring} from 'react-spring'
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Interface2 } from '../../PeripheralPages/Interface2';

export default function DeFiInterface(props)
{

    const DivStyles = useSpring({
        from: {     
            opacity: 0,
            position: "absolute", 
            zIndex: 1,
            pointerEvents: "none"
        },
        to: {
            opacity: (props.interfacePage === 1) ? 1 : 0,
            position: "absolute", 
            zIndex: (props.interfacePage === 1) ? 20 : 1, 
            pointerEvents: (props.interfacePage === 1) ? "auto" : "none",
        },
        config: {duration: 2000},
        delay: 0
    })



    return(
        <animated.div style = {DivStyles}>
            <Interface2 />
        </animated.div>
    )
}