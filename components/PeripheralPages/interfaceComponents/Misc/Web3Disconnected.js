import React from "react";
import { ConnectWallet } from "../../../Web3/Setup/MiscWeb3Utilities";
import {LargeInnerDashboard, Connect} from './StyledComponentsSheet'
import {AiOutlineLock} from 'react-icons/ai'
import lock from '../../../../assets/db/lock.png'
import '../../../../css/App.css'

export default function Web3DisconnectedDashboard(connected, devMode)
{
    var dashboard = ""

    const OnClick = async() =>
    {
        await ConnectWallet()
    }

    if(!connected && !devMode)
    {
        dashboard = 
        (            
        <>
            <LargeInnerDashboard style = {{background: "#515151", borderRadius: "5px"}}>
                <h1 className = "orbitron" style = {{color: "white"}}>Connect To Metamask</h1>

                <Connect style = {{marginTop: "3vh", marginLeft: "0vw", width: "8vw"}} onClick = {() => {OnClick()}} className = "fontLink">Connect</Connect>
            </LargeInnerDashboard>
        </>
        )
    }

    return dashboard;
}