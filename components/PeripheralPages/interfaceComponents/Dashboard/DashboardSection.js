import React, { useState} from 'react'
import BalanceBox from '../Misc/BalanceBox'
import '../../../../css/App.css'
import {DashboardSectionContainer} from '../Misc/StyledComponentsSheet'
import style_glow from '../../../../css/glowButton.module.css'
import { GetVERTBalance } from '../../../Web3/Setup/FetchBasicContractData'
import { ViewPendingVertStakingDividends } from '../../../Web3/VertStaking/VertStakingHandler'

import { WeeklyReset, ViewTotalPendingVCash } from '../../../Web3/DarkEnergyStaking/DarkEnergyStakingHandler'
import { RetrieveStakingDividends } from '../../../Web3/VertStaking/VertStakingHandler'

export default function DashboardSection(props)
{
    const [bal, setBal] = useState(0)

    const load = async() =>
    {
        let res = await ViewTotalPendingVCash(props.profileId)
        setBal(res)
    }

    const DarkEnergyClaim = async() =>
    {
        await WeeklyReset(props.profileId)
    }

    load()

    return(
        <DashboardSectionContainer style = {props}>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "3vw", marginTop: "-2vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Dark Energy Balance</b></h1>
                <BalanceBox bal = {props.DEBal}/>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "2vw", marginTop: "-2vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Pending Dark Energy</b></h1>
                <BalanceBox bal = {bal} address = {props.address}/>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "2vw", marginTop: "-2vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Claim Dark Energy</b></h1>
                <button 
                className = {style_glow.button62} 
                style = {{marginTop: "2vh", width: "10vw"}}
                onClick = {() => {DarkEnergyClaim()}}>Submit</button>
            </div>
        </DashboardSectionContainer>
    )
}
export function DashboardSectionVert(props)
{
    const [vertStakingDividends, setStakingDividends] = useState(0)
    const [vertBalance, setVertBalance] = useState(0)

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

    const loadVertBalance = async() =>
    {
        let bal = ""
        await GetVERTBalance().then((res) => {bal = res})
        setVertBalance(bal.toFixed(1))
    }
    loadVertBalance()

    /*
    return(
        <DashboardSectionContainer style = {props} >
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "3vw", marginTop: "-3vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Vertigo Token Balance</b></h1>
                <BalanceBox bal = {vertBalance} address = {props.address}/>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "2vw", marginTop: "-3vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Vertigo Staking Dividends</b></h1>
                <BalanceBox bal = {vertStakingDividends}/>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "2vw", marginTop: "-3vh"}}>
                <h1 className = "nunitosans" style = {{fontSize: "2.6vh", color: "white"}}><b>Claim Tokens</b></h1>
                <button className = {style_glow.button62} onClick = {() => {OnClaimDividends()}} style = {{marginTop: "2vh", width: "10vw"}}>Submit</button>
            </div>
        </DashboardSectionContainer>
    )
    */
}