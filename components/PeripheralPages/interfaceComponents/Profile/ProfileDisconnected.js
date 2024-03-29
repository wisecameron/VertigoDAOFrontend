import React from "react";
import ProfileConnectSection from './ProfileConnectSection'

export default function ProfileDisconnected(profileConnected, web3Connected, devMode)
{ 

    if(profileConnected === false && !devMode)
    {
        return(<ProfileConnectSection 
            web3Connected = {web3Connected}
            loadBox = "yes"
            topMargin = "4vmax"
            leftMargin = "1vmax"
            />)
    }
}