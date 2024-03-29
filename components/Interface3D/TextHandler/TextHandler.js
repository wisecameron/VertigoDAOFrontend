import { useState } from "react";
import IntroText, { MenuDetector } from "./IntroText";
import ProfileConnectSection from "../../PeripheralPages/interfaceComponents/Profile/ProfileConnectSection";
import ProfileDisconnectedComponent from "./ProfileDisconnectedComponent";
import { DashboardPage3DInterface } from "../../PeripheralPages/interfaceComponents/Pages/DashboardPage";
import DeFiInterface from "./DeFiInterface";
/*
    Determines what to display to user based on current state

                <ProfileConnectSection web3Connected = {true}/>
*/
export default function TextHandler(props)
{

    return(
        <>
            <IntroText 
            page = {props.page} 
            proceed = {props.proceed}
            setConnected = {(val) => {props.setConnected(val)}}
            connected = {props.connected}
            setPage = {(val) => {props.setPage(val)}} />
            <DeFiInterface interfacePage = {props.interfacePage}/>
            <DashboardPage3DInterface 
            interfacePage = {props.interfacePage}
            profileData = {props.profileData}
            profileId = {props.profileId}
            />
        </>
    )

}