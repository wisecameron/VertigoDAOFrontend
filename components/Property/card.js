import React from 'react'
import style_card from '../../css/CardStyle.module.css'
import Tilt from 'react-parallax-tilt'
import styled from 'styled-components'
import '../../css/App.css'
import dunesnew from '../../assets/propertyImg2/dunesNewIMG.png'
import deIcon from '../../assets/propertyImg2/darkEnergyIcon.png'

const TSpan = styled.span`
    color: ${props => props.isVCash === true ? "#ac74d6" : "#eba134"}
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
height: 25vmax;
width: 15vmax;
border-radius: 1.4vmax;
background-size: cover;
transform-style: preserve-3d;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`

const CardContainer2 = styled.div`
position: "absolute";
zIndex: 100;
background-size: cover;
transform-style: preserve-3d;
transform: TranslateZ(40px);
`

const TranslateInner = styled.div`
transform: TranslateZ(40px);
`



export default function StyledCard(props)
{

    const bg = `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),url(${props.IMG})` //swag
    return(
        <Tilt className = {style_card.Tilt}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity = {0.2}
        scale = {1.02}
        gyroscope={false}
        glareBorderRadius = "20px"
        >
            <div className = {style_card.Card + ' ' + style_card.rgb} >
                <div className = {style_card.CardImage} style = {{backgroundImage: bg, backgroundSize: "cover"}}/>
                <div className = {style_card.CardText}>
                    <span className = {style_card.date}>{props.PURPOSE}</span>
                    <h2>{props.PROPERTYNAME}</h2>
                    <p style = {{color: "white"}}>{props.TEXT}</p>
                    <TSpan isVCash = {props.isVCash} className = {style_card.type}>{props.TYPE}</TSpan>
                </div>
            </div>
        </Tilt>
    )
}

export function StyledCard2(props)
{



    /**
     * props:
     * PURPOSE
     * PROPERTYNAME
     * TEXT
     * TYPE
     */

    const bg = `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),url(${props.IMG})` //swag
    return(
        <Tilt className = {style_card.Tilt}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity = {0.2}
        scale = {1.02}
        gyroscope={false}
        glareBorderRadius = "20px"
        >
            <div style = {{backgroundImage: `url(${props.IMG})`}} className = {style_card.rgb + ' ' + style_card.Card2}>
                <TranslateInner className = "fontLink" style = {{marginLeft: "2.0vmax", marginTop: "0.5vmax"}}>
                    <div style = {{marginTop: "13.4vmax", display: "flex", flexDirection: "row"}}>

                        <img src = {props.icon} alt = "icon" style = {(props.TYPE === "Dark Energy Property") ?
                        {width: "1.8vmax", height: "1.8vmax", marginTop: "0.5vmax", marginLeft: "-.7vmax"} :
                        {width: "2.0vmax", height: "2.0vmax", marginTop: "0.5vmax", marginLeft: "-.7vmax"}}/>

                        <h2 className = "orbitron" style = {{fontSize: "1.2vmax", marginTop: ".7vmax", color: "white", marginLeft: (props.TYPE === "Dark Energy Property") ? "1.1vmax" : "0.4vmax"}}>{props.PROPERTYNAME}</h2>
                    </div>
                    <div style = {{marginTop: "1.3vmax"}}>
                        <span style = {{fontSize: "1vmax", color: "white"}}>{props.PURPOSE}</span>
                        <p className = "titleFont" style = {{color: "white", fontSize: "0.6vmax", width: "10vmax", marginTop: "0.5vmax"}}>{props.TEXT}</p>
                    </div>
                </TranslateInner>
            </div>
        </Tilt>
    )
}