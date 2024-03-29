import React, {useState} from 'react'
import style_glow from '../../../../css/glowButton.module.css'
import {Center, SmallDataField} from '../Misc/StyledComponentsSheet'
import { GetCurrentContractPassword } from '../../../Web3/Setup/FetchBasicContractData'
import { WeeklyReset, ViewTotalPendingVCash } from '../../../Web3/DarkEnergyStaking/DarkEnergyStakingHandler'
import lock from '../../../../assets/db/lock.png'
import { ConnectProfile } from '../../../Web3/Profile/ProfileHandler'
import styled from 'styled-components'
import submit from '../../../../assets/db/submit.png'
import { MintProfile } from '../../../Web3/Profile/ProfileHandler'
import { MintedCount } from '../../../Web3/Profile/ProfileHandler'
import MintButton from  '../../../../assets/db/mint.png'
import { CheckWhitelisted } from '../../../Web3/Profile/ProfileHandler'
import ClickHere from  '../../../../assets/db/clickhere.png'
import claim from '../../../../assets/db/claim.png'
import discord from '../../../../assets/db/discordicon.png'
import telegram from '../../../../assets/db/tgicon.png'

//props: profileConnected, profileId

const TagLine = styled.h1`
    font-size: 1.1vmax;
    color: white;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const NewDataField = styled.div`
    background: #515151;
    display: flex;
    flex-direction: column;
    width: 15vmax;
    height: 4vmax;
`

export default function Feed(props)
{
    const [password, setPassword] = useState("")
    const [pendingDarkEnergy, setPending] = useState("")
    const [val, setVal] = useState('');
    const [updated, setUpdated] = useState("")
    const [whitelisted, setWhitelisted] = useState(0);

    const LoadWhitelisted = async() =>
    {
        let res = await CheckWhitelisted();
        setWhitelisted(parseInt(res));
    }

    LoadWhitelisted()

    //Connect profile
    const HandleClick = async() =>
    {
        let profileData = await ConnectProfile(parseInt(val))
        props.setProfileData(profileData)

        if(profileData.length > 0)
        {
            props.setProfileConnected(true)
            props.setProfileId(val)
        }
    }

    const HandleChange = (event) =>
    {
        setVal(event.target.value)
    }

    const Mint = async() =>
    {
        await MintProfile()

        let current = await MintedCount()
        alert(`Your profile ID: ${current}`);
        return current;
    }

    let WhitelistShow = (
        <>
            <TagLine style = {{marginLeft: "1vmax", marginTop: "1.5vmax", cursor: "pointer", color: "grey"}}>Get Whitelisted</TagLine>
            <img src = {ClickHere} style = {{width: "1.5vmax", height: "1.5vmax", marginTop: "1.5vmax"}}/>
        </>
    )

    if(whitelisted > 0)
    {
        WhitelistShow = (
            <TagLine style = {{marginLeft: "1vmax", marginTop: "1.5vmax", cursor: "pointer", color: "green"}}>You Are Whitelisted!</TagLine>
        )
    }

    if(!props.web3Connected)
    {
        return(<div/>)
    }



    if(props.profileConnected === false)
    {
        //Lock -> add vertigo token staking.
        return(
            <div 
            className = "fontLink"
            style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2vmax"}}>
                <h1 style = {{fontSize: "4vh", color: "white", textAlign: "center"}}>Profile Data</h1>
                <img src = {lock} style = {{width: "5vmax"}} />

                <div style = {{display: "flex", flexDirection: "column", marginTop: "2.4vmax", alignItems: "center"}}>
                    <TagLine>Enter Your Profile ID</TagLine>
                    <input 
                    type="text" onChange = {(e) => HandleChange(e)}
                    style = {{width: "12vmax", height: "1vmax"}} />
                    <img 
                        onClick = {() => {HandleClick()}}
                        src = {submit} 
                        alt = "submit profile ID button"
                        style = {{width: "8vmax", height: "2vmax", cursor: "pointer", marginLeft: "0vmax", marginTop: "0.8vmax"}} />
                </div>

                <div style = {{marginTop: "0.5vmax", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <TagLine style = {{marginTop: "3.2vmax"}}>Mint A Profile NFT</TagLine>
                    <img 
                        onClick = {() => {Mint()}}
                        alt = "Mint profile button"
                        src = {MintButton} style = {{width: "8vmax", height: "2vmax", cursor: "pointer", marginLeft: "0vmax", marginTop: "0vmax"}} />
                </div>
                <Row>
                    {WhitelistShow}
                </Row>
            </div>
        )
    }

    const loadDefaultPayment = async() =>
    {
        await WeeklyReset(props.profileId)
    }

    const loadPassword = async() =>
    {
        let res;
        res = await GetCurrentContractPassword()
        setPassword(parseInt(res))
    }

    const loadDarkEnergyPending = async() =>
    {
        let res;
        res = await ViewTotalPendingVCash(props.profileId);
        setPending(parseInt(res) + ((password === parseInt(props.password) || parseInt(props.profileData[1]) === 3) ? 0 : 150))
        setUpdated(parseInt(props.password) === password)
    }

    loadPassword()
    loadDarkEnergyPending()

    const isUpdated = parseInt(props.password) === password;

    let PayoutText = (!isUpdated) ? `Claim ${parseInt(pendingDarkEnergy).toLocaleString()} Dark Energy Income and Update Profile` : `Claim ${parseInt(pendingDarkEnergy).toLocaleString()} Dark Energy`

    return(
        <Center className = "fontLink">
            <NewDataField style = {{marginTop: "5.6vmax", textAlign: "left"}}>
                <div style = {{marginLeft: "0.6vmax"}}>
                    <h1  style = {{fontSize: "0.9vmax", color: "white"}}>Multiplier</h1>
                    <h1  style = {{fontSize: "0.8vmax", color: "white", textAlign: "right", marginRight: "1vmax"}}>{parseInt(props.multiplier) / 1000}x</h1>
                </div>
            </NewDataField>
            <NewDataField style = {{marginTop: "0.5vmax"}}>
                <div style = {{marginLeft: "0.6vmax"}}>
                    <h1  style = {{fontSize: "0.9vmax", color: "white", }}>Dark Energy Income</h1>
                    <h1  style = {{fontSize: "0.9vmax", color: "white", textAlign: "right", marginRight: "1vmax"}}>{parseInt(props.income).toLocaleString()}</h1>
                </div>
            </NewDataField>
            <NewDataField style = {{marginTop: "0.5vmax"}}>
                <div style = {{marginLeft: "0.6vmax"}}>
                    <h1 style = {{fontSize: "0.9vmax", color: "white", }}>Dark Energy Staked</h1>
                    <h1  style = {{fontSize: "0.9vmax", color: "white", textAlign: "right", marginRight: "1vmax"}}>{parseInt(props.staked)}</h1>
                </div>
            </NewDataField>
            <h1 style = {{fontSize: "1vmax", color: "white", marginTop: "5vh", textAlign: "center", width: "13vw"}} className = "fontLink">{PayoutText}</h1>
            <img src = {claim}
            alt = "claim dark energy button"
            onClick = {() => {loadDefaultPayment()}}
            style = {{marginTop: "0.5vmax", cursor: "pointer", width: "14vmax"}} />

            <div style = {{marginTop: "2vmax", display: "flex", flexDirection: "column", width: "15vmax"}}>
                <h1 style = {{textAlign: "right", justifyContent: "right", color: "white", fontSize: "1vmax"}}>Join our community!</h1>
                <Row style = {{justifyContent: "right"}}>
                    <img src = {discord} alt = 'discord icon' style = {{width: "1.75vmax", height: "1.5vmax", marginRight: "0.5vmax", cursor: "pointer"}}/>
                    <img src = {telegram} alt = 'telegram icon' style = {{width: "1.75vmax", height: "1.5vmax", cursor: "pointer"}}/>
                </Row>
            </div>
        </Center>
        )
}