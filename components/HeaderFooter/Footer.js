import React from "react";
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import '../../css/App.css'


const FooterContainer = styled.div`
    height: 10vh;
    width: 100vw;
    background: #141414;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CenterRow = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1.5vh;
`


export default function Footer(props)
{
    return(
        <FooterContainer style = {{marginTop: props.marginTop}}>
            <CenterRow >
                <h1 className = "fontLink" style = {{color: "white", fontSize: "2vh"}}>&copy; Vertigo Metaverse 2022</h1>
                <SocialIcon url = "https://telegram.org/" bgColor="#141414" fgColor="white" style = {{width: "2.5vw", marginLeft: "10vw"}}/>
                <SocialIcon url = "https://discord.com/" bgColor="#141414" fgColor="white" style = {{width: "2.5vw", marginLeft: "1vw"}}/>
                <SocialIcon url = "https://medium.com/" bgColor="#141414" fgColor="white" style = {{width: "2.5vw", marginLeft: "1vw"}}/>
            </CenterRow>

        </FooterContainer>
    )
}