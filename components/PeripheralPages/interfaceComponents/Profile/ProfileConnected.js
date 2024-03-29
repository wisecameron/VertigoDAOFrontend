import React from "react";
import DashboardPage from "../Pages/DashboardPage";

export default function ProfileConnected(profileConnected, profileId, address, DEBal, profileData)
{
    var result = <div />

    console.log(profileConnected)

    if(profileConnected)
    {
        result = 
        (
        <>
            <DashboardPage profileId = {profileId} address = {address} DEBal = {DEBal} profileData = {profileData}/>
        </>
        )
    }

    return result;
}