import TextHandler from "../TextHandler/TextHandler";
import { useState } from "react";
import Intro from "./Scenes/Intro";
import { CheckConnected } from "../../Web3/Init/InitConnection";
import { Interface2 } from "../../PeripheralPages/Interface2";

export default function SceneHandler(props)
{
    //disconnected, interface
    const [page, setPage] = useState(0);
    const [connected, setConnected] = useState(false);
    const [visible, setVis] = useState(true);
    const [profileData, setProfileData] = useState(-1);
    const [profileId, setProfileId] = useState(-1)
    const [ interfacePage, setInterfacePage ] = useState(-1)

    

    function handleVisibilityChange() {
    if (document.visibilityState !== visible) {
        setVis(document.visibilityState === "visible");
    }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const VerifyConnection = async() =>
    {
        let v;
        v = await CheckConnected()

        if(v !== connected)
        {
            setConnected(v)
        }
    }

    VerifyConnection()

    return(
        <>
            <TextHandler 
            setConnected = {(val) => {setConnected(val)}} 
            connected = {connected}
            page = {page}
            setPage = {(val) => {setPage(val)}}
            interfacePage = {interfacePage}
            profileData = {profileData}
            setProfileData = {(v) => {setProfileData(v)}}
            profileId = {profileId}
            setProfileId = {(v) => {setProfileId(v)}}
            />
            <Intro 
            page = {page} 
            visible = {visible}
            interfacePage = {interfacePage}
            setInterfacePage = {(v) => {setInterfacePage(v)}} />
        </>
    )
}

