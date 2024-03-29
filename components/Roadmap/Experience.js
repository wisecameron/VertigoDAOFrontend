import React from "react";
import styled from "styled-components";
import {HeaderNoGraphicsTPB} from '../HeaderFooter/Header'
import ExperienceScene from "./ExperienceScene";
import '../../css/App.css'

const SceneContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
    background: black;
`

export default function Experience(props)
{

    return(
        <>
            <HeaderNoGraphicsTPB full = {true} page = "experience" />
            <SceneContainer>

                <ExperienceScene graphics = {2}/>
            </SceneContainer>
        </>
    )
}