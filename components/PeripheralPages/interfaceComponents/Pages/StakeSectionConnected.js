//NEW PAGE

import React, {useState} from "react"
import '../../../../css/App.css'
import { ConnectProfile, MintedCount, MintProfile, CheckWhitelisted } from "../../../Web3/Profile/ProfileHandler"
import { GetVERTBalance } from '../../../Web3/Setup/FetchBasicContractData'
import { ViewPendingVertStakingDividends, StakeVert } from '../../../Web3/VertStaking/VertStakingHandler'
import { RetrieveStakingDividends } from '../../../Web3/VertStaking/VertStakingHandler'
import bigBorder from '../../../../assets/db/bigBorder.png'
import styled from "styled-components"
import submit from '../../../../assets/db/submit.png'
import ClaimDividends from  '../../../../assets/db/claimdividends.png'
import ClickHere from  '../../../../assets/db/clickhere.png'
import UserInfoBox from "../Misc/UserInfoBox"

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

const Row = styled.div`
    display: flex;
    flex-direction: row;
`


export default function StakeSectionConnected(props) //setProfileData connected
{
    const [vertStakingDividends, setStakingDividends] = useState(0);
    const [vertBalance, setVertBalance] = useState(0);
    const [whitelisted, setWhitelisted] = useState(0);
    const [desiredStakeVert, setDesiredStakeVert] = useState(0);


    const HandleChange2 = (event) =>
    {
        setDesiredStakeVert(event.target.value)
    }

    const loadDividends = async() =>
    {
        if(props.address !== '')
        {
            let res;
            res = await ViewPendingVertStakingDividends(props.address)
            setStakingDividends(res.toFixed(1))

            res = await CheckWhitelisted();
            setWhitelisted(parseInt(res));
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

    const loadVertBalance = async() =>
    {
        let bal = ""
        await GetVERTBalance().then((res) => {bal = res})
        setVertBalance(bal)
    }
    loadVertBalance()

    let WhitelistShow = (
        <>
            <TagLine style = {{marginLeft: "3vmax", marginTop: "5.7vmax", cursor: "pointer", color: "grey"}}>Get Whitelisted</TagLine>
            <img src = {ClickHere} style = {{width: "1.5vmax", height: "1.5vmax", marginTop: "5.4vmax"}}/>
        </>
    )

    if(whitelisted > 0)
    {
        WhitelistShow = (
            <TagLine style = {{marginLeft: "3vmax", marginTop: "5.7vmax", cursor: "pointer", color: "green"}}>You Are Whitelisted!</TagLine>
        )
    }

    return(
        <>
            <DashboardSectionContainer2 
            style = {{backgroundImage: `url(${bigBorder})`}}>
            <div className = "fontLink" style = {{display: "flex", flexDirection: "column"}}>
                <TagLine style = {{marginLeft: "5vmax", marginTop: "2vmax", fontSize: "1vmax"}}><i>Vertigo Token Balance</i></TagLine>
                <TagLine style = {{marginLeft: "5.5vmax", marginTop: "1vmax"}}>{parseInt(vertBalance).toLocaleString()} Vert</TagLine>
                <TagLine style = {{marginLeft: "5.5vmax", marginTop: "1vmax"}}>Stake Vertigo Tokens</TagLine>
                <Row>
                <input 
                    type="text" onChange = {(e) => HandleChange2(e)}
                    style = {{width: "12vmax", height: "1vmax", marginLeft: "5.5vmax"}} />
                     <img 
                        onClick = {() => {HandleStakeVert()}}
                        src = {submit} style = {{width: "7vmax", height: "2vmax", cursor: "pointer", marginLeft: "0.9vmax", marginTop: "-0.3vmax"}} />
                </Row>
            </div>
            <div className = "fontLink" style = {{display: "flex", flexDirection: "column"}}>
                <TagLine style = {{marginLeft: "3vmax", marginTop: "2vmax", fontSize: "1vmax"}}><i>Vertigo Staking Dividends</i></TagLine>
                <Row>
                    <TagLine style = {{marginLeft: "3.5vmax", marginTop: "1vmax"}}>{parseInt(vertStakingDividends).toLocaleString()} Vert</TagLine>
                    <img 
                        onClick = {() => {OnClaimDividends()}}
                        src = {ClaimDividends} style = {{width: "7vmax", height: "2vmax", cursor: "pointer", marginLeft: "2vmax", marginTop: "0.7vmax"}} />
                </Row>
            </div>
            </DashboardSectionContainer2>
            <UserInfoBox />
        </>
    )
}