//NEW PAGE

import React, {useState} from "react"
import '../../../../css/App.css'
import { ViewPendingVertStakingDividends } from '../../../Web3/VertStaking/VertStakingHandler'
import bigBorder from '../../../../assets/db/bigBorder.png'
import styled from "styled-components"
import UserInfoBox from "../Misc/UserInfoBox"

import Select from 'react-select'
import { selectOptionsUser, selectStylesUser, selectOptionsGlobal, selectStylesGlobal } from "./SupportingComponents/SelectMenuOptions"
import { GetUserVertStaked } from "../../../Web3/VertStaking/VertStakingHandler"
import { GetVertigoManager } from "../../../Web3/Setup/FetchBasicContractData"
import selected2 from '../../../../assets/db/selected2.png'

import { Row } from "./SupportingComponents/StyledComponents/CommonStyles"

import { animated, useSpring } from "react-spring"
import { useEffect } from "react"

const DashboardSectionContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    zIndex: 100;
    margin-top: 4vmin;
    margin-left: 5vmax;
    width: 50vmax;
    height: 20vmax;
    background-size: 95%;
    background-repeat: no-repeat;
`
const TagLine = styled.h1`
    font-size: 1.1vmax;
    color: white;
`

const ValueBox = styled.div`
    width: 14vmax;
    height: 3vmax;
    background: #CCCCCC;
    border-radius: 10px;
    align-items: center;
    text-align: center;
`


export default function DashboardPage(props) //setProfileData connected
{
    const [otherData, setOtherData] = useState("")
    const userMenuOptions = selectOptionsUser(props.profileData, otherData)
    const [currentUserValue, setUserValue] = useState(userMenuOptions[0].value)

    const [vertigoManager, setVertigoManager] = useState("")
    const globalMenuOptions = selectOptionsGlobal(vertigoManager)
    const [currentGlobalValue, setGlobalValue] = useState(globalMenuOptions[0].value)

    const HandleChange = (event, index) =>
    {
        if(index == 0)
        {
            setUserValue(event.value)
        }
        if(index == 1)
        {
            setGlobalValue(event.value)
        }
    }

    const LoadUserData = async() =>
    {
        let UserVertStakingDividends = await ViewPendingVertStakingDividends()
        let UserVertStaked = await GetUserVertStaked();

        let res = {
            dividends: UserVertStakingDividends,
            staked: UserVertStaked,
        }

        setOtherData(res)

        setVertigoManager(await GetVertigoManager())
    }

    if(otherData === "") LoadUserData()

    const LoadVertigoManager = async() =>
    {
        setVertigoManager(await GetVertigoManager())
    }

    if(vertigoManager === "") LoadVertigoManager()
    
    
    
    return(
        <>
            <div style = {{marginTop: "2.5vmax"}}>
                <UserInfoBox web3Connected = {true}/>
            </div>
            <DashboardSectionContainer2 
            style = {{backgroundImage: `url(${bigBorder})`}}>
            <div className = "titleFont" style = {{display: "flex", flexDirection: "column"}}>
                <Row style = {{marginLeft: "5.5vmax", marginTop: "1vmax"}}>
                    <img src = {selected2} style = {{height: "1.5vmax", marginTop: "0.5vmax"}}/>
                    <TagLine className = "fontLink" style = {{ fontSize: "1vmax", marginLeft: "0.5vmax" }}>Profile ID : {props.profileId}</TagLine>
                </Row>
                <TagLine style = {{marginLeft: "5.5vmax", marginTop: "2.5vmax", fontSize: "1vmax"}}>User Data: </TagLine>
                <div style = {{marginLeft: "5.5vmax"}}>
                    <Select maxMenuHeight = {150} isOptionSelected={(option, selectValue) => selectValue.some(i => i === option)} onChange = {(e) => {HandleChange(e, 0)}} options = {userMenuOptions} defaultValue = {userMenuOptions[0]} styles = {selectStylesUser}/>
                </div>
                <ValueBox style = {{marginTop: "1vmax", marginLeft: "5.5vmax", background: "#404040"}}>
                    <TagLine style = {{color: "white"}}>{currentUserValue}</TagLine>
                </ValueBox>
            </div>
            <div className = "titleFont" style = {{display: "flex", flexDirection: "column"}}>
                <Row style = {{marginLeft: "10vmax", marginTop: "1vmax"}}>
                    <img src = {selected2} style = {{height: "1.5vmax", marginTop: "0.5vmax"}}/>
                    <TagLine className = "fontLink" style = {{ fontSize: "1vmax", position: "relative", marginLeft: "0.5vmax"}}>Profile Tier: {props.profileData[1]}</TagLine>
                </Row>
                <TagLine style = {{marginLeft: "10vmax", marginTop: "2.5vmax", fontSize: "1vmax"}}>Global Data: </TagLine>
                <div style = {{marginLeft: "10vmax"}}>
                    <Select maxMenuHeight = {150} isOptionSelected={(option, selectValue) => selectValue.some(i => i === option)} onChange = {(e) => {HandleChange(e, 1)}} options = {globalMenuOptions} defaultValue = {globalMenuOptions[0]} styles = {selectStylesGlobal}/>
                </div>
                <ValueBox style = {{marginTop: "1vmax", marginLeft: "10vmax", background: "#404040"}}>
                    <TagLine style = {{color: "white"}}>{currentGlobalValue}</TagLine>
                </ValueBox>
            </div>
            </DashboardSectionContainer2>
        </>
    )
}

export function DashboardPage3DInterface(props) //setProfileData connected
{
    const [otherData, setOtherData] = useState("")
    const [currentUserValue, setUserValue] = useState("")
    const [vertigoManager, setVertigoManager] = useState("")
    const [currentGlobalValue, setGlobalValue] = useState("")
    const [userMenuOptions, setUserMenuOptions] = useState("")
    const [globalMenuOptions, setGlobalMenuOptions] = useState("")

    const [firstLoad, setFirstLoad] = useState(true);



    const HandleChange = (event, index) =>
    {
        if(index == 0)
        {
            setUserValue(event.value)
        }
        if(index == 1)
        {
            setGlobalValue(event.value)
        }
    }

    const LoadUserData = async() =>
    {
        if(props.profileId === undefined) return;
        let UserVertStakingDividends = await ViewPendingVertStakingDividends()
        let UserVertStaked = await GetUserVertStaked();

        let res = {
            dividends: UserVertStakingDividends,
            staked: UserVertStaked,
        }

        setOtherData(res)

        setVertigoManager(await GetVertigoManager())
    }

    const LoadVertigoManager = async() =>
    {
        if(props.profileId === undefined) return;
        setVertigoManager(await GetVertigoManager())
    }

    if(otherData === "" && props.profileId !== -1) LoadUserData()
    if(vertigoManager === "" && props.profileId !== -1) LoadVertigoManager()

    const FadeIn = useSpring({
        from: {background: "none", position: "absolute", zIndex: 1, opacity: 0, marginLeft: "22vw", marginTop: "5vw", PointerEvents: "none"},
        to: {background: "none", position: "absolute", zIndex: 1, opacity: (props.profileId > -1 && props.interfacePage === 0) ? 1 : 0, marginLeft: "22vw", marginTop: "5vw", pointerEvents: (props.interfacePage === 0) ? "auto" : "none"},
        config: {duration: 2000},
        delay: (firstLoad) ? 2000 : 0

    })

    useEffect(() =>
    {

        if(firstLoad === true) setFirstLoad(false);

        if(props.profileId === undefined) return;
        if(props.profileId < 0) return;
        if(props.profileData === undefined) return;

        const userMenuOptions = selectOptionsUser(props.profileData, otherData);
        setUserValue(userMenuOptions[0].value)
        setUserMenuOptions(userMenuOptions)

        const globalMenuOptions = selectOptionsGlobal(vertigoManager)
        setGlobalValue(globalMenuOptions[0].value);
        setGlobalMenuOptions(globalMenuOptions);

    }, [props.profileId, props.profileData])

    
    return(
        <>
            {props.profileId === -1 ? null : (
                <animated.div style = {FadeIn}>
                    <DashboardSectionContainer2 
                    style = {{backgroundImage: `url(${bigBorder})`}}>
                        <div className = "titleFont" style = {{display: "flex", flexDirection: "column"}}>
                            <Row style = {{marginLeft: "5.5vmax", marginTop: "1vmax"}}>
                                <img src = {selected2} style = {{height: "1.5vmax", marginTop: "0.5vmax"}}/>
                                <TagLine className = "fontLink" style = {{ fontSize: "1vmax", marginLeft: "0.5vmax" }}>Profile ID : {props.profileId}</TagLine>
                            </Row>
                            <TagLine style = {{marginLeft: "5.5vmax", marginTop: "2.5vmax", fontSize: "1vmax"}}>User Data: </TagLine>
                            <div style = {{marginLeft: "5.5vmax"}}>
                                <Select maxMenuHeight = {150} isOptionSelected={(option, selectValue) => selectValue.some(i => i === option)} onChange = {(e) => {HandleChange(e, 0)}} options = {userMenuOptions} defaultValue = {userMenuOptions[0]} styles = {selectStylesUser}/>
                            </div>
                            <ValueBox style = {{marginTop: "1vmax", marginLeft: "5.5vmax", background: "#404040"}}>
                                <TagLine style = {{color: "white"}}>{currentUserValue}</TagLine>
                            </ValueBox>
                        </div>
                        <div className = "titleFont" style = {{display: "flex", flexDirection: "column"}}>
                            <Row style = {{marginLeft: "10vmax", marginTop: "1vmax"}}>
                                <img src = {selected2} style = {{height: "1.5vmax", marginTop: "0.5vmax"}}/>
                                <TagLine className = "fontLink" style = {{ fontSize: "1vmax", position: "relative", marginLeft: "0.5vmax"}}>Profile Tier: {props.profileData[1]}</TagLine>
                            </Row>
                            <TagLine style = {{marginLeft: "10vmax", marginTop: "2.5vmax", fontSize: "1vmax"}}>Global Data: </TagLine>
                            <div style = {{marginLeft: "10vmax"}}>
                                <Select maxMenuHeight = {150} isOptionSelected={(option, selectValue) => selectValue.some(i => i === option)} onChange = {(e) => {HandleChange(e, 1)}} options = {globalMenuOptions} defaultValue = {globalMenuOptions[0]} styles = {selectStylesGlobal}/>
                            </div>
                            <ValueBox style = {{marginTop: "1vmax", marginLeft: "10vmax", background: "#404040"}}>
                                <TagLine style = {{color: "white"}}>{currentGlobalValue}</TagLine>
                            </ValueBox>
                        </div>
                    </DashboardSectionContainer2>
                </animated.div>
            )} 

        </>
    )
}