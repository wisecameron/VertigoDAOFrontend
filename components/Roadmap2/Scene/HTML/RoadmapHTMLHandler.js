import styled from 'styled-components';
import '../../../../css/App.css';
import { useSpring } from 'react-spring';
import { useScroll } from '@react-three/drei';
import {useFrame} from '@react-three/fiber'
import { useState } from 'react';

import { ContractSystem, Storage, PremiumProperties } from './ContractSystem';
import { WhatDoesItDo,  HowDoRewardsWork, HowDoesGovernanceWork, GrantSystem, WhyDoesItMatter, OpenDevelopment, Problem } from './BasicQuestions';

import discoverimg from '../../../../assets/discoverimg.png';
import Circle from '../../../../assets/Circle.png'


const TagLine = styled.h1`
    color: white;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2vmax;
`

const CommonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    z-index: 1000;
`
const TagLinePg = styled.h2`
    color: white;
    width: 60vw;
    font-size: 1.1vmax;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const QuickContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

const QuickContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

const ClickBox = styled.div`
    width: 5vmax;
    height: 7.5vmax;
    background-size: 95%;
    background-repeat: no-repeat;

    &:hover{
        width: 6vmax;
        height: 8.3vmax;
    }

`

export default function RoadmapHTMLHandler(props)
{
    const scroll = useScroll()
    const [pos, setPos] = useState(0)
  
    useFrame(() =>
    {
      setPos(Math.round(((props.pages * scroll.offset) + Number.EPSILON) * 10) * .1)
    })
  

    return(
        <>
            <Intro />

            <Problem />
            <WhatDoesItDo />
            <Diagram />
            <HowDoRewardsWork />
            <OpenDevelopment />
            <WhyDoesItMatter />
            <HowDoesGovernanceWork />
            <ContractSystem pos = {pos}/>
            <PremiumProperties />
            <GrantSystem />
            <Storage />

        </>
    )
}

function Intro()
{
    const TLStyles = useSpring({
        from: {fontSize: "6vmax", opacity: 0, color: "black"},
        to: {fontSize: "6vmax", opacity: 1, color: "#909090"},
        config: {duration: 1200},
        delay: 0
    })
    const TLStyles2 = useSpring({
        from: {fontSize: "1.3vmax", opacity: 0},
        to: {fontSize: "1.3vmax", opacity: 1, marginTop: "2vmax", color: "#9fa3c9"},
        config: {duration: 1200},
        delay: 600
    })



    return(
        <CommonContainer>
            <img src = {discoverimg} style = {{width: "40vmax", marginTop: "5vmax", position: "fixed"}}/>
        </CommonContainer>
    )
}

export function Diagram()
{
    return(
        <>
            <Row style = {{marginTop: '10vmax'}}>
                <img src = {Circle} style = {{width: "30vmax", marginLeft: "15vmax"}} />
                <div style = {{ marginLeft: "6vmax",   textAlign: "left", marginTop: "8vmax"}}>
                    <TagLine className = 'orbitron' style = {{fontSize: "2.8vmax"}}>
                        Balanced System
                    </TagLine>
                    <TagLinePg style = {{ width: "30vmax"}} className = 'titleFont'>
                        Participants organically cooperate in pursuit of their own interests.
                        <br/><br/>
                        Administrators operate outside of the ecosystem, expanding its scope and creating new features
                        without direct interference.
                    </TagLinePg>
                </div>
            </Row>
        </>
    )
}