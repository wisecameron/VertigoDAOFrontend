import React, {useRef} from "react";
import styled from "styled-components";
import '../../css/App.css'
import {useThree} from '@react-three/fiber'
import { animated, useSpring } from 'react-spring';

const Tagline = styled.h1`
    color: white;
    width: 44vmax;
    font-size: 12vmin;
    margin-top: -30vmin;
    margin-left: -15vmax;
`

export default function RoadmapText(props)
{
    const currentTextIdentifier = useRef(0)
    const Texts = []

    const Text0 = (
        <>
            <Tagline className="fontLink">Click And Hold To Accelerate</Tagline>
        </>
    )

    Texts.push(Text0)

    console.log(props.frame)

    return(Texts[currentTextIdentifier.current])
}