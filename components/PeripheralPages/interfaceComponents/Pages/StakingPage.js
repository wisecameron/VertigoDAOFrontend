import React, {useState} from 'react'

import style_glow from '../../../../css/glowButton.module.css'
import '../../../../css/App.css'

import styled from 'styled-components'

import bigBorder from '../../../../assets/db/bigBorder.png'
import smallBorder from '../../../../assets/db/smallBorder.png'
import selected2 from '../../../../assets/db/selected2.png'

import { StakeDarkEnergy, WeeklyReset } from '../../../Web3/DarkEnergyStaking/DarkEnergyStakingHandler'
import { StakeVert, UnstakeVert, GetUserVertStaked, ViewPendingVertStakingDividends, RetrieveStakingDividends } from '../../../Web3/VertStaking/VertStakingHandler'

import { TagLine } from './SupportingComponents/StyledComponents/StakingPageStyles'
import { DashboardSectionContainer2, InfoBoxContainer, Row } from './SupportingComponents/StyledComponents/CommonStyles'

import ProfileConnectSection from '../Profile/ProfileConnectSection'

import submit from '../../../../assets/db/submit.png'

import {Canvas} from '@react-three/fiber'
import CenterLight from '../../../DocumentationPage/CenterLight'


export default function StakingPage(props)
{
    const [UserVertDividends, setDivs] = useState(-100)
    const [UserStakedVert, setStaked] = useState(0)
    const [DarkEnergyInput, setDEInput] = useState(0)
    const [TokenInput, setTokenInput] = useState(0)

    const EnergyInput = (event) =>
    {
        setDEInput(event.target.value)
    }



    const load = async() =>
    {
        if(UserVertDividends === -100)
        {
            let divs = await ViewPendingVertStakingDividends()
            let staked = await GetUserVertStaked()

            divs = parseInt(divs)
            divs /= 1e18;

            staked = parseInt(staked)
            staked /= 1e18;

            setDivs(divs.toFixed(1))
            setStaked(staked.toFixed(1))
        }
    }

    const StakeDarkEnergyAsync = async() =>
    {
        if(DarkEnergyInput > 0)
        {
            await StakeDarkEnergy(props.profileId, DarkEnergyInput)
        }
    }

    load()

    return(
        <>
            <div style = {{marginTop: "2.5vmax"}}>
                <InfoBoxContainer className = "fontLink" style = {{backgroundImage: `url(${smallBorder})`}}>
                    <Row style = {{marginTop: "1.3vmax",}}>
                        <img style = {{width: "1.5vmax", height: "1.5vmax", marginLeft: "5.1vmax"}} src = {selected2} alt = "styled icon" />
                        <TagLine style = {{marginLeft: "0.5vmax",  fontSize: "1vmax", marginTop: "0.1vmax"}}>Dark Energy Staking</TagLine>
                    </Row>
                    <div style = {{width: "20vmax", height: "20vmax", position: "absolute", marginLeft: "33vmax", marginTop: "-5vmax"}}>

                    </div>
                    <TagLine style = {{fontSize: '1.1vmax', marginLeft: "6vmax", marginTop: "1.3vmax"}}>Stake</TagLine>
                    <Row style = {{marginLeft: "6vmax"}}>
                        <input 
                            type="text" onChange = {(e) => EnergyInput(e)}
                            style = {{width: "10vmax", height: "1vmax"}} />
                        <img src = {submit}
                        style = {{width: "7vmax", height: "2vmax", cursor: "pointer", marginLeft: "0.5vmax", marginTop: "-0.4vmax"}} 
                        onClick = {() => {StakeDarkEnergyAsync()}}
                        />
                    </Row>

                </InfoBoxContainer>

                <ProfileConnectSection 
                loadBox = "no"
                connected = {true} 
                web3Connected = {true}
                />
            </div>
        </>
    )


    /*
    return(
        <StakingContainer>
            <StakeSection>
                <Title className='fontLink' >Vertigo Token Staking</Title>
                <Row style = {{marginTop: "2vh"}}>
                    <StakeBox>
                        <Title className = "fontLink" style = {{fontSize: "3vh"}}>{UserStakedVert}</Title>
                        <SmallTitle className = "fontLink" style = {{marginTop: "-1vh"}}>Staked</SmallTitle>
                    </StakeBox>
                    <StakeBox style = {{marginLeft: "2vw"}}>
                        <Title className = "fontLink" style = {{fontSize: "3vh"}}>{UserVertDividends}</Title>
                        <SmallTitle className = "fontLink" style = {{marginTop: "-1vh"}}>Dividends</SmallTitle>
                    </StakeBox>
                </Row>
                <input 
                onInput={(event) => {TInput(event)}}
                style = {{marginTop: "4vh", borderRadius: "5px"}}></input>
                <Row style = {{marginTop: "4vh"}}>
                    <button className={style_glow.button62} 
                    onClick = {() => {StakeV()}}
                    style = {{width: "7vw", background: "#404040"}}>Stake</button>
                    <button className={style_glow.button62} 
                    style = {{marginLeft: "2vw", width: "7vw", background: "#404040"}}
                    onClick = {() => {UnstakeV()}}>Unstake</button>
                </Row>
                <button 
                className={style_glow.button62} 
                style = {{marginTop: "4vh"}}
                onClick = {() => {GetVertStakingDividends()}}>Capture Dividends</button>
            </StakeSection>
            <StakeSection style = {{marginLeft: "5vw"}}>
                <Title className='fontLink'>Dark Energy Staking</Title>
                <StakeBox style = {{marginTop: "2vh"}}>
                    <Title className = "fontLink" style = {{fontSize: "3vh"}}>{props.DarkEnergyStaked}</Title>
                    <SmallTitle className = "fontLink" style = {{marginTop: "-1vh"}}>Staked</SmallTitle>
                </StakeBox>
                <input 
                style = {{marginTop: "4vh", borderRadius: "5px"}}
                onInput={(event) => {EnergyInput(event)}}></input>
                <button className={style_glow.button62} 
                onClick = {() => {StakeDarkEnergyAsync()}}
                style = {{width: "7vw", background: "#404040", marginTop: "4vh"}}>Stake</button>
                <button 
                className={style_glow.button62} 
                onClick = {() => {WeeklyResetAsync()}}
                style = {{marginTop: "4vh"}}>Capture Dividends</button>
            </StakeSection>
        </StakingContainer>
    )*/
}