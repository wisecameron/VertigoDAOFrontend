import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/App.css'
import headerlogo from '../../assets/headerlogo.png'
import telegram from '../../assets/tg.png';
import discord from '../../assets/discord.png';
import { Row } from '../Roadmap2/Scene/HTML/SharedStyles'
import {TbHomeShare} from 'react-icons/tb'
import { TiHome } from 'react-icons/ti'
import logo from '../../assets/logo.png'
import { GlassCoin } from '../LoadedModels/GlassCoin'
import { Canvas } from '@react-three/fiber'
import { Model } from '../DocumentationPage/logoModel'



const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  z-index: 100;
  width: 100vmax;
  position: absolute;
  background: black;
`

const HeaderH1 = styled.h1`
  color: #424242;
  font-size: 3vmin;
  cursor: pointer;
  margin-top: 3vmin;

  &:hover{
    color: white;
  }
`

const GImg = styled.img`
  width: 2.6vmax;
  height: 2.6vmax;
  cursor: pointer;
  margin-top: .8vmax;

  &:hover{
    width: 3.5vmax;
    height: 3.5vmax;
    margin-top: .3vmax;
  }
`

const HeaderS = styled.h1`
  color: white;
  font-size: 3vmin;
  cursor: pointer;
  margin-top: 3vmin;

`

const ShadedBox = styled.div`
  width: 0.7vmax;
  height: 1.5vmin;
  border-radius: 30px;
  border: 1px solid white;
  cursor: pointer;
  margin-top: 4.2vmin;
`

const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
`

export function GraphicsHandler(props)
{
  let color1;
  let color2;
  let color3;

  if(props.graphics === 3)
  {
    color1 = color2 = color3 = "white"
  }
  else if(props.graphics === 2)
  {
    color1 = color2 = "white"
  }
  else
  {
    color1 = "white";
    color2 = "none"
  }

  return(
    <>
      <RowGroup style = {{marginTop: "-0.5vmin"}}>
        <ShadedBox style = {{marginLeft: "1.5vmax", background: color1}} onClick={() => props.setGraphics(1)}/>
        <ShadedBox style = {{marginLeft: "0.8vmax", background: color2}} onClick={() => props.setGraphics(2)}/>
        <ShadedBox style = {{marginLeft: "0.8vmax", background: color3}} onClick={() => props.setGraphics(3)}/>
      </RowGroup>
    </>
  )
}

export default function Header(props)
{
  return(
      <TextContainer style = {{width: (props.full) ? "100vmax" : "98.6vmax", height: "9vmin", background: "#030009"}} className = 'titleFont'>
          <img src = {headerlogo} alt = "logo" style = {{marginLeft: "10vmax", marginTop: "2vmin", height: "5vmin"}}/>
          <RowGroup style = {{marginLeft: "8.3vmax", marginTop: "-0.4vmin"}}>

            <Link to = "/" style = {{textDecoration: "none"}}>
              <HeaderH1 style = {{color: (props.page === "home") ? "white" : "none"}}>Home</HeaderH1>
            </Link>

            <Link to = "/interface" style = {{textDecoration: "none"}}>
              <HeaderH1 
              style = {{marginLeft: "2vmax", color: (props.page === "interface") ? "white" : "none"}}
              >Interface</HeaderH1>
            </Link>

            <Link to = "/litepaper" style = {{textDecoration: "none"}}>
              <HeaderH1 style = {{marginLeft: "2vmax", color: (props.page === "experience") ? "white" : "none"}}>Litepaper</HeaderH1>
            </Link>
            <Link to = "/documentation" style = {{textDecoration: "none"}}>
              <HeaderH1  style = {{marginLeft: "2vmax", color: (props.page === "whitepaper") ? "white" : "none"}}>Documentation</HeaderH1>
            </Link>
          </RowGroup>
          <HeaderS style = {{marginLeft: "6.3vmax", fontSize: "2.5vmin", marginTop: "2.9vmin"}}>Graphics </HeaderS>
          <GraphicsHandler graphics = {props.graphics} setGraphics = {(newVal) => props.setGraphics(newVal)}/>
      </TextContainer>
  )
}

export function HeaderNoGraphics(props)
{
  return(
    <TextContainer style = {{width: "100vmax", height: "9vmin"}}>
        <img src = {headerlogo} alt = "logo" style = {{marginLeft: "10vmax", marginTop: "2vmin", height: "5vmin"}}/>
        <RowGroup style = {{marginLeft: "8.3vmax", marginTop: "-0.4vmin"}}>

          <Link to = "/" style = {{textDecoration: "none"}}>
            <HeaderH1 style = {{color: (props.page === "home") ? "white" : "none"}} className = "orbitron">Home</HeaderH1>
          </Link>

          <Link to = "/interface" style = {{textDecoration: "none"}}>
            <HeaderH1 
            className = "orbitron" 
            style = {{marginLeft: "2vmax", color: (props.page === "interface") ? "white" : "none"}}
            >Interface</HeaderH1>
          </Link>

          <Link to = "/litepaper" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "litepaper") ? "white" : "none"}}>Litepaper</HeaderH1>
          </Link>

          <Link to = "/documentation" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "documentation") ? "white" : "none"}}>Documentation</HeaderH1>
          </Link>
        </RowGroup>
    </TextContainer>
  )
}

export function HomeHeader(props)
{
  return(
    <TextContainer style = {{width: "100vmax", height: "9vmin", background: "none"}}>
        <RowGroup style = {{marginLeft: "1vmax", marginTop: ".75vmax"}}>

          <Link to = "/" style = {{textDecoration: "none", marginLeft: "6vmax"}}>
            <Canvas style = {{marginTop: "4vmax", height: "20vmax"}}>
              <Model scale = {0.5}/>
            </Canvas> 
          </Link>

        </RowGroup>
    </TextContainer>
  )
}

export function HeaderNoGraphicsTPB(props)
{
  return(
    <TextContainer style = {{width: "100vmax", height: "9vmin", background: "none"}}>
        <img src = {headerlogo} alt = "logo" style = {{marginLeft: "10vmax", marginTop: "2vmin", height: "5vmin"}}/>
        <RowGroup style = {{marginLeft: "8.3vmax", marginTop: "-0.4vmin"}}>

          <Link to = "/" style = {{textDecoration: "none"}}>
            <HeaderH1 style = {{color: (props.page === "home") ? "white" : "none"}} className = "orbitron">Home</HeaderH1>
          </Link>

          <Link to = "/interface" style = {{textDecoration: "none"}}>
            <HeaderH1 
            className = "orbitron" 
            style = {{marginLeft: "2vmax", color: (props.page === "interface") ? "white" : "none"}}
            >Interface</HeaderH1>
          </Link>

          <Link to = "/litepaper" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "experience") ? "white" : "none"}}>Litepaper</HeaderH1>
          </Link>

          <Link to = "/documentation" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "documentation") ? "white" : "none"}}>Documentation</HeaderH1>
          </Link>
        </RowGroup>
    </TextContainer>
  )
}

export function HeaderNoGraphics2(props)
{
  return(
    <TextContainer style = {{width: "98.8vmax", height: "9vmin"}}>
        <img src = {headerlogo} alt = "logo" style = {{marginLeft: "10vmax", marginTop: "2vmin", height: "5vmin"}}/>
        <RowGroup style = {{marginLeft: "8.3vmax", marginTop: "-0.4vmin"}}>

          <Link to = "/" style = {{textDecoration: "none"}}>
            <HeaderH1 style = {{color: (props.page === "home") ? "white" : "none"}} className = "orbitron">Home</HeaderH1>
          </Link>

          <Link to = "/interface" style = {{textDecoration: "none"}}>
            <HeaderH1 
            className = "orbitron" 
            style = {{marginLeft: "2vmax", color: (props.page === "interface") ? "white" : "none"}}
            >Interface</HeaderH1>
          </Link>

          <Link to = "/litepaper" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "litepaper") ? "white" : "none"}}>Litepaper</HeaderH1>
          </Link>

          <Link to = "/documentation" style = {{textDecoration: "none"}}>
            <HeaderH1 className = "orbitron" style = {{marginLeft: "2vmax", color: (props.page === "documentation") ? "white" : "none"}}>Documentation</HeaderH1>
          </Link>
        </RowGroup>
        <Row style = {{marginLeft: "8vmax"}}>
          <GImg src = {telegram} onClick = {() => window.open("https://t.me/+PoJAgEc_uJ05NDkx")}/>
          <GImg src = {discord} style = {{marginLeft: "1vmax"}} onClick = {() => window.open("https://discord.gg/PrtYEWSeMR")}/>
        </Row>
    </TextContainer>
  )
}

export function HeaderMobile(props)
{
  return(
    <div style = {{width: "100vmin", textAlign: "center", position: "fixed", zIndex: 1000, background: "black"}}>
        <img src = {headerlogo} alt = "vertigo logo" style = {{marginTop: "1.3vmax", width: "20vmax"}} />
    </div>
  )
}