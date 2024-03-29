import '../../../css/App.css'
import {animated, useSpring} from 'react-spring';
import styled from 'styled-components';
import { Row } from '../../Roadmap2/Scene/HTML/SharedStyles';
import {MdAdsClick} from 'react-icons/md'
import { ConnectWallet } from '../../Web3/Setup/MiscWeb3Utilities';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Model } from '../../DocumentationPage/logoModel';
import { CheckConnected } from '../../Web3/Init/InitConnection';
import { useEffect, useState } from 'react';

const Tag = styled.h1`
color: white;
font-size: 5vh;
`

export default function IntroText(props)
{
    const WelcomeStyle = useSpring({
        from: {opacity: 0, marginTop: "5vh", color: "white", cursor: (props.page === 0) ? "default" : "default", zIndex: 10},
        to: {opacity : (props.page === 0) ? 0.7 : 0, marginTop: "5vh", color: "white", cursor: (props.page === 0) ? "default" : "default", zIndex: 10},
        config: {duration: (props.page === 0) ? 2800 : 200},
        delay: 0
    })

    const FadeInConnect =  useSpring({
        from : {opacity: 0, marginTop: "0.5vmax", zIndex: 10},
        to : {opacity: (props.page === 0) ? 1 : 0,marginTop: "0.5vmax", zIndex: 10},
        config: {duration: (props.page === 0) ? 2800 : 200},
        delay: (props.page === 0) ? 700 : 0
    })

    const ModelFade = useSpring({
        from :{opacity : 0, marginLeft: "-90vmax", marginTop: "0.5vmax", zIndex: 10},
        to : {opacity: (props.page === 0) ? 1 : 0, marginLeft: "-90vmax", marginTop: "0.5vmax", zIndex: 10},
        config: {duration: 2800},
        delay: 1400
    })

    async function ClickHandler()
    {
        await ConnectWallet()

        await CheckConnected().then((res) => 
        {
            props.setConnected(res)
            props.setPage(1);
        })
    }

    return(
        <div style = {{position: "absolute", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <animated.div style = {ModelFade}>
                    <Link to = "/" style = {{textDecoration: "none"}}>
                        <Canvas style = {{height: "7.5vmax"}}>
                            <Model scale = {.5}/>
                        </Canvas> 
                    </Link>
                </animated.div>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Tag
                    className = "lightFuturistic" 
                    as = {animated.h1}
                    style = {WelcomeStyle}>Welcome to the Open Blockchain</Tag>

                    <Row as = {animated.div} style = {FadeInConnect}>
                        <MdAdsClick 
                        style = {{color: "white", marginTop: "-1.5vmax", cursor: (props.page === 0) ? "pointer" : "default", zIndex: 10}}
                        onClick = {() => {ClickHandler()}}
                        />
                        <Tag 
                        style = {{fontSize: "2vh", cursor: "pointer", marginTop: "-1.5vmax", color: "white", marginLeft: "0.4vmax", cursor: (props.page === 0) ? "pointer" : "default", zIndex: 10}} 
                        className = "lightFuturistic"
                        onClick={(!props.connected) ? () => {ClickHandler()} : () => {props.setPage(1)}}>
                        {`${(props.connected) ? "Proceed" : "Connect to Metamask"}`}</Tag>
                    </Row>
                </div>
        </div>
    )
}
