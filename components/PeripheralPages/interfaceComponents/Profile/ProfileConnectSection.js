//NEW PAGE

import React, {useState} from "react"
import '../../../../css/App.css'
import { ConnectProfile, MintedCount, MintProfile} from "../../../Web3/Profile/ProfileHandler"
import { GetVERTBalance } from '../../../Web3/Setup/FetchBasicContractData'
import { ViewPendingVertStakingDividends, StakeVert, UnstakeVert } from '../../../Web3/VertStaking/VertStakingHandler'
import { RetrieveStakingDividends, GetTotalTokenPayoutAmount } from '../../../Web3/VertStaking/VertStakingHandler'
import bigBorder from '../../../../assets/db/bigBorder.png'
import styled from "styled-components"
import submit from '../../../../assets/db/submit.png'
import MintButton from  '../../../../assets/db/mint.png'
import ClaimDividends from  '../../../../assets/db/claimdividends.png'
import UserInfoBox from "../Misc/UserInfoBox"
import selected2 from '../../../../assets/db/selected2.png'

const DashboardSectionContainer2 = styled.div`
    display: flex;
    flex-direction: column;
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
`


export default function ProfileConnectSection(props) //setProfileData connected
{
    const [vertStakingDividends, setStakingDividends] = useState(0);
    const [vertBalance, setVertBalance] = useState(0);
    const [desiredStakeVert, setDesiredStakeVert] = useState(0);
    const [desiredUnstakeVert, setDesiredUnstakeVert] = useState(0)

    const HandleChange2 = (event) =>
    {
        setDesiredStakeVert(event.target.value);
    }

    const HandleChangeUnstake = (event) =>
    {
        setDesiredUnstakeVert(event.target.value);
    }

    const loadDividends = async() =>
    {
        if(props.address !== '')
        {
            let res;
            res = await ViewPendingVertStakingDividends(props.address)
            setStakingDividends(res.toFixed(1))
        }
    }

    loadDividends()

    const OnClaimDividends = async() =>
    {
        await RetrieveStakingDividends()
    }

    const HandleStakeVert = async() =>
    {
        await StakeVert(desiredStakeVert);
    }

    const HandleUnstakeVert = async() =>
    {
        console.log(desiredUnstakeVert)
        await UnstakeVert(desiredUnstakeVert)
    }

    const loadVertBalance = async() =>
    {
        let bal = ""
        await GetVERTBalance().then((res) => {bal = res})
        setVertBalance(bal)
    }
    loadVertBalance()

    if(!props.web3Connected)
    {
        return ''
    }

    let LoadBox = (
        <div style = {{marginTop: "2.5vmax"}}>
            <UserInfoBox web3Connected = {props.web3Connected}/>
        </div>
    )

    if(props.loadBox !== undefined)
    {
        if(props.loadBox === "no")
        {
            LoadBox = <div />
        }
    }

    return(
        <div style = {{position: "absolute", zIndex: 20, marginLeft: "1vmax", marginTop: "4vmax"}}>
            {LoadBox}
            <DashboardSectionContainer2 
            style = {{backgroundImage: `url(${bigBorder})`}}>
                <Row className = "fontLink">
                    <img src = {selected2} alt = "style icon" style = {{marginLeft: "5.5vmax", marginTop: "1.5vmax", width: "1.5vmax", height: "1.5vmax"}}/>
                    <TagLine style = {{marginLeft: "0.5vmax", marginTop: "1.5vmax"}}><a style = {{color: "grey"}}>{parseInt(vertBalance).toLocaleString()}</a> VERT</TagLine>
                    <img src = {selected2} alt = "style icon" style = {{marginLeft: "8.35vmax", marginTop: "1.5vmax", width: "1.5vmax", height: "1.5vmax"}}/>
                    <TagLine style = {{marginLeft: "0.5vmax", marginTop: "1.5vmax"}}><a style = {{color: "grey"}}>{parseInt(vertStakingDividends).toLocaleString()}</a> Dividends</TagLine>
                    <img 
                        onClick = {() => {OnClaimDividends()}}
                        src = {ClaimDividends}
                        style = {{width: "9vmax", height: "2vmax", cursor: "pointer", marginLeft: "1vmax", marginTop: "1.25vmax"}}
                        alt = "claim dividends button" />
                </Row>
                <Row style = {{marginTop: "2vmax"}}>
                    <div className = "fontLink" style = {{display: "flex", flexDirection: "column", marginLeft: "2vmax"}}>
                    <TagLine style = {{marginLeft: "3.5vmax", marginTop: "2vmax"}}>Stake</TagLine>
                        <Row style = {{marginTop: "1vmax"}}>
                            <input 
                                type="text" onChange = {(e) => HandleChange2(e)}
                                style = {{width: "10vmax", height: "1vmax", marginLeft: "3.5vmax"}} />
                            <img 
                                onClick = {() => {HandleStakeVert()}}
                                src = {submit} 
                                alt = "submit button"
                                style = {{width: "8vmax", height: "2vmax", cursor: "pointer", marginLeft: "0.5vmax", marginTop: "-0.4vmax"}} />
                        </Row>
                    </div>
                        <div style = {{display: "flex", flexDirection: "column"}} className = "fontLink">
                            <TagLine style = {{marginLeft: "3.2vmax", marginTop: "2vmax"}}>Unstake</TagLine>
                            <Row style = {{marginTop: "1vmax"}}>
                                <input 
                                    type="text" onChange = {(e) => HandleChangeUnstake(e)}
                                    style = {{width: "10vmax", height: "1vmax", marginLeft: "3.2vmax"}} />
                                <img 
                                    onClick = {() => {HandleUnstakeVert()}}
                                    src = {submit} style = {{width: "8vmax", height: "2vmax", cursor: "pointer", marginLeft: "0.5vmax", marginTop: "-.4vmax"}} />
                            </Row>
                        </div>
                </Row>
            </DashboardSectionContainer2>
        </div>
    )
}