import React, {useState} from 'react'
import {CardPicker} from '../../../Property/cardSelector'
import {CardContainer} from '../Misc/StyledComponentsSheet'
import styled from 'styled-components'
import purchase from '../../../../assets/db/purchaseButton.png'

import { DarkEnergyPropertyHandler, VertigoPropertyHandler } from './SupportingComponents/CardManager'

const PageContainer = styled.div`
    background: "none";
    width: 43vw;
    height: 63vh;
    border-radius: 15px;
    position: absolute;
    margin-top: 11vh;
    margin-left: 2.5vw;
    z-index: -5;
`


const ToggleContainer = styled.div`
    background: #202020;
    width: 10vw;
    height: 52vh;
    border-radius: 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 18vh;
    margin-left: 44vw;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`


export default function PropertiesPage(props)
{
    return(
        <div style = {{marginTop: "-7vh", display: "flex", flexDirection: "row"}}>
            <PageContainer />
            <DarkEnergyPropertyHandler profileData = {props.profileData} profileId = {props.profileId}/>
            <VertigoPropertyHandler profileData = {props.profileData} profileId = {props.profileId}/>
            <CardContainer style = {{marginTop: "18.5vh", marginLeft: "-5vmax"}}>
                <div style = {{display: "flex", flexDirection: "column", marginTop: "-2vh"}}>
                    <div style = {{marginLeft: "9vw", marginTop: "1vmax"}}>
                        <CardPicker isVCash = {(props.type) === "V"} index = {4} />
                        <Row>
                            <img src = {purchase} style = {{cursor: "pointer", width: "12vmax", marginTop: "1vmax", marginLeft: "1.3vmax"}}/>
                        </Row>
                    </div>
                </div>
            </CardContainer>
        </div>
    )
}

export function PropertiesContainer(props)
{
    const [index, setIndex] = useState(props.index)
    const [type, setType] = useState("DE")

    return(
        <div style = {{display: "flex", flexDirection: "row", marginTop: "-5vh"}}>

            <PropertiesPage 
                index = {index} 
                type = {type} 
                setIndex = {(val) => setIndex(val)} 
                setType = {(val) => setType(val)}
                profileData = {props.profileData}
                profileId = {props.profileId}
            />

        </div>
    )
}