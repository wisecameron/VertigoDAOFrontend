import React, {useState} from 'react'
import {CardPicker} from '../../../../Property/cardSelector'
import {CardContainer} from '../../Misc/StyledComponentsSheet'
import styled from 'styled-components'
import style_glow from '../../../../../css/glowButton.module.css'
import { BuyProperty } from '../../../../Web3/Property/PropertyHandler'
import purchase from '../../../../../assets/db/purchaseButton.png'
import selected from '../../../../../assets/db/selected.png'
import unselected from '../../../../../assets/db/unselected.png'
import arrow from '../../../../../assets/db/arrow.png'
import {PurchaseOrUpgrade} from './PurchaseOrUpgrade'
import { Row } from './StyledComponents/CommonStyles'
import { DarkEnergyDots, VertDots } from './DotHandler'

const ChangeIndex = (increase, type, index, setIndex) =>
{
    var lim;
    (type === "DE") ? lim = 3 : lim = 4;

    if(increase)
    {
        (index + 1) <= lim ? setIndex(index + 1) : console.log("max index reached")
        return;
    }

    (index - 1) >= 0 ? setIndex(index - 1) : console.log("min index reached")
}

export function DarkEnergyPropertyHandler(props)
{
    const [index, setIndex] = useState(parseInt(props.profileData[2]))

    return(
        <CardContainer style = {{position: "absolute", marginTop: "18.5vh", marginLeft: "-5vmax"}}>
            <div style = {{marginLeft: "9vw"}}>
                <Row style = {{marginTop: "-2.5vmax", marginLeft: "3.5vmax"}}>
                    <img src = {arrow} 
                    style = {{width: "1.5vmax", height: "1.125vmax", transform: "rotate(180deg)", cursor: "pointer"}} 
                    onClick = {() => {ChangeIndex(false, "DE", index, setIndex)}}
                    />
                    <DarkEnergyDots index = {index} owned = {props.profileData[2]}/>
                    <img src = {arrow} 
                    style = {{width: "1.5vmax", height: "1.125vmax", cursor: "pointer"}} 
                    onClick = {() => {ChangeIndex(true, "DE", index, setIndex)}}
                    />
                </Row>
                <div style = {{marginTop: "1vmax"}}>
                    <CardPicker isVCash = {true} index = {index} />
                </div>
                <PurchaseOrUpgrade index = {index} owned = {parseInt(props.profileData[2])}  profileId = {props.profileId} isDE = {true}/>
            </div>
        </CardContainer>
    )
}

export function VertigoPropertyHandler(props)
{
    const [index, setIndex] = useState(parseInt(props.profileData[3]))
    console.log(index)

    return(
        <CardContainer style = {{marginTop: "18.5vh", marginLeft: "13.5vw"}}>
            <div style = {{display: "flex", flexDirection: "column"}}>
                <Row style = {{marginTop: "-2.5vmax", marginLeft: "12vmax"}}>
                    <img src = {arrow} 
                    style = {{width: "1.5vmax", height: "1.125vmax", transform: "rotate(180deg)", cursor: "pointer"}}
                    onClick = {() => {ChangeIndex(false, "Vert", index, setIndex)}} />
                    <VertDots index = {index} owned = {props.profileData[3]}/>
                    <img src = {arrow} 
                    style = {{width: "1.5vmax", height: "1.125vmax", cursor: "pointer"}} 
                    onClick = {() => {ChangeIndex(true, "Vert", index, setIndex)}} />
                </Row>
                <div style = {{marginLeft: "9vw", marginTop: "1vmax"}}>
                    <CardPicker isVCash = {false} index = {index} />
                    <Row>
                        <PurchaseOrUpgrade index = {index} owned = {props.profileData[3]} profileId = {props.profileId} isDE = {false}/>
                    </Row>
                </div>
            </div>
        </CardContainer>
    )
}