import React, {useState} from 'react'
import styled from 'styled-components'
import { HeaderNoGraphicsTPB } from '../HeaderFooter/Header'
import {HeaderNoGraphics} from '../HeaderFooter/Header'
import DocScene from './DocScene'
import '../../css/App.css'
import Fireworks from '../Scene/Fireworks/Fireworks'

const SceneContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
    background: black;
`

export default function DocPage(props)
{
    const [pass, setPass] = useState('');
    if(pass.toLowerCase() !== 'privileged access vertigodao')
    {
      return(
        <div style = {{width: "100vw",
         height: "100vh", 
         background: "black", 
         display: "flex", 
         flexDirection: "column", 
         alignItems: "center" }}>
          <h1 style = {{marginTop: "30vh", color: "red"}}>VertigoDAO</h1>
          <h1 style = {{marginTop: "0vh", color: "white", textAlign: "center"}}>Enter password to proceed.</h1>
          <input 
            value = {pass} 
            onChange = {event => setPass(event.target.value)}
            style = {{width: "20vw", marginTop: "5vh"}}>
          </input>
        </div>
      )
    }
    return(
        <SceneContainer >
            <HeaderNoGraphicsTPB page = {'documentation'}/>
            <DocScene />
        </SceneContainer>
    )
}