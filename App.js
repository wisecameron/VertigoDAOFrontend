import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import './css/App.css'
import { HeaderNoGraphics2 } from './components/HeaderFooter/Header'
import Scene, {MobileScene} from './components/Scene/Scene'
import Header from './components/HeaderFooter/Header';
import {isMobile} from 'react-device-detect'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history';

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
  background: black;
`

const MobileSceneContainer = styled.div`
  width: 100vw;
  height: 380vh;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
  background: black;
`


ReactGA.initialize('G-T4TQ0XJRZM')
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) =>
{
  ReactGA.pageview(location.pathname + window.location.search)
})

function App() 
{
  const [pass, setPass] = useState('');
  const [graphics, setGraphics] = useState(3);
  const [pages] = useState(8.3); //10.7
  const [page, setPage] = useState('home')

  const PASS_ENABELD = true;

  useEffect(() =>
  {
    ReactGA.pageview(window.location.pathname + window.location.search)

  }, [])

  if(pass.toLowerCase() !== 'cameron' && pass.toLowerCase() !== 'tommy' && pass !== 'wst' && pass !== 'fungus')
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

  if(isMobile)
  {
    return(
      <MobileSceneContainer>
        <MobileScene />
      </MobileSceneContainer>
    )
  }

  //locked vers == headerlocked + [pages == 0]
  return (
    <SceneContainer>
      <Header
      graphics = {graphics}
      setGraphics = {(newVal) => setGraphics(newVal)}
      page = {page}
      setPage = {(newVal) => {setPage(newVal)}}
      
      />
      <Scene pages = {pages} graphics = {graphics} setGraphics = {(newVal) => setGraphics(newVal)}/>
    </SceneContainer>
  );


}

export default App;
