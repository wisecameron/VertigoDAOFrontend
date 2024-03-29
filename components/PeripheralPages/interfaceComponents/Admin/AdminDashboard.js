import React, {useRef} from 'react'
import {AdminDashboardContainer} from '../Misc/StyledComponentsSheet'
import '../../../../css/App.css'

import { OwnerSetValueHandler, SetUpPeripheralProfile, SetUpPeripheralProperty } from '../../../Web3/OwnerConfig/OwnerConfigFunctions'

export default function AdminDashboard(needsConfiguration, playable, config, profile, property, props)
{
    var profileContract = useRef()
    var propertyContract = useRef()
    var tokenContract = useRef()

    const OnChange = (e) =>
    {
        profileContract.current = e.target.value
    }

    const OnChangeB = (e) =>
    {
        propertyContract.current = e.target.value
    }

    const OnChangeC = (e) =>
    {
        tokenContract.current = e.target.value
    }

    const ContractSubmit = async() =>
    {
        await OwnerSetValueHandler(3, [profileContract.current, propertyContract.current], 0);
    }
    const ProfileSubmit = async() =>
    {
        await SetUpPeripheralProfile(tokenContract.current, propertyContract.current)
    }
    const PropertySubmit = async() =>
    {
        await SetUpPeripheralProperty(tokenContract.current, profileContract.current)
    }

    const PlayableSubmit = async() =>
    {
        await OwnerSetValueHandler(5, [], 0);
    }

    if(needsConfiguration)
    {
        return(
        <AdminDashboardContainer style = {props}>
            <div style = {{display: "flex", flexDirection: "column"}}>
            <h1 className = 'fontLink' style = {{color: (config) ? "white" : "red", fontSize: "2vh", width: "6vw"}}>Enter Contract Addr: token, profile, property</h1>
                <input type = "text" onChange={(e) => OnChangeC(e)} style =  {{width: "6vw"}}/>
                <input type = "text" onChange = {(e => OnChange(e))}  style = {{width: "6vw"}}/>
                <input type = "text" onChange = {(e => OnChangeB(e))}  style = {{width: "6vw"}}/>
            </div>
            <div style = {{display: "flex", flexDirection: "column", marginLeft: "2vw"}}>
                <h1 className = "fontLink" style = {{color: (playable) ? "white":"red", fontSize: "2vh"}}>Set <br/>Playable</h1>
                <button onClick = {() => {PlayableSubmit()}} style = {{width: "6vw"}}>Submit</button>
            </div>
            <div style = {{display: "flex", flexDirection: "column"}}>
                <h1 className = 'fontLink' style = {{color: (config) ? "white" : "red", fontSize: "2vh", width: "6vw"}}>Token Configure</h1>
                <button style = {{width: "6vw"}} onClick = {() =>{ContractSubmit()}}>Submit</button>
            </div>
            <div style = {{display: "flex", flexDirection: "column"}}>
                <h1 className = 'fontLink' style = {{color: (profile) ? "white" : "red", fontSize: "2vh", width: "6vw"}}>Profile Configure</h1>
                <button style = {{width: "6vw"}} onClick = {() =>{ProfileSubmit()}}>Submit</button>
            </div>
            <div style = {{display: "flex", flexDirection: "column"}}>
                <h1 className = 'fontLink' style = {{color: (property) ? "white" : "red", fontSize: "2vh", width: "6vw"}}>Property Configure</h1>
                <button style = {{width: "6vw"}} onClick = {() =>{PropertySubmit()}}>Submit</button>
            </div>
        </AdminDashboardContainer>
        )
    }
}