import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import '../../../../css/App.css';
import style_card from '../../../../css/CardStyle.module.css'
import token from '../../../../assets/token.png'
import profile from '../../../../assets/profile.png'
import property from '../../../../assets/property.png'

import diagram from '../../../../assets/diagram.png';

import oneimg from '../../../../assets/one.png';
import twoimg from '../../../../assets/two.png';
import threeimg from '../../../../assets/three.png';
import arrowAroundLogo from '../../../../assets/arrowAroundLogo.png';
import logo from '../../../../assets/logo.png'
import leverageIcon from '../../../../assets/leverageIcon.png';
import usableIcon from '../../../../assets/usableIcon.png';
import trust from '../../../../assets/trust.png';
import integrationicon from '../../../../assets/boostedIntegration.png';
import malleableIcon from '../../../../assets/malleableIcon.png';
import wvert from '../../../../assets/wvert.png'
import development from '../../../../assets/development.png'
import autonomy from '../../../../assets/autonomy.png'
import ownership from '../../../../assets/ownership.png'



import {GiTwoCoins, GiRecycle, GiOpenTreasureChest, GiAbstract013} from 'react-icons/gi'
import {BsDiagram3, BsFillPiggyBankFill} from 'react-icons/bs'

import { MdOutlineSettingsSystemDaydream } from 'react-icons/md'

import { AiOutlineCheck } from 'react-icons/ai'


import Tilt from 'react-parallax-tilt'
import logoPlusIcon from '../../../../assets/logoPlusIcon.png'
import distributionIcon from '../../../../assets/distributionModelIcon.png';
import coreSystemIcon from '../../../../assets/coreSystemIcon.png';

import DEIcon from '../../../../assets/DarkEnergyIcon.png';

import { AiOutlineArrowRight } from 'react-icons/ai'

import { BsLink45Deg } from 'react-icons/bs'
import {RiPlantLine} from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaCoins } from 'react-icons/fa';


import { TagLine, TagLinePg, CommonContainer, Row, QuickContainer } from './SharedStyles';

const TLImg = styled.img`
transform: TranslateZ(60px);

`
const TranslateInner = styled.div`
transform: TranslateZ(40px);
`

/*
    <button 
    className = "nunitosans"
    style = {{
        marginTop: "4vmax",
        borderRadius: "20px",
        height: "4vmax",
        fontSize: "1.2vmax",
        width: "13vmax",
        cursor: "pointer",
        background: "#999999"
    }}><b>Whitepaper</b><AiOutlineArrowRight 
    style = {{fontSize: "1.2vmax",
    position: "absolute",
    marginTop: "0.15vmax", 
    marginLeft: "0.5vmax"}}/> </button>
*/

const CoreSystemText = () =>
{
    return(
        <Row>
        <TagLine style = {{color: "grey",
        fontSize: "1.2vmax", marginTop: "-.7vmax" }} className = "fontLink">Core System
        </TagLine>
        <img src = {coreSystemIcon} style = {{height: "1.2vmax", marginTop: "-.55vmax", marginLeft: "0.5vmax"}} />
    </Row>
    )
}

const Introduction = () =>
{
    return(
        <TagLine style = {{color: "grey",
        fontSize: "1.2vmax", marginTop: "-1vmax" }} className = "fontLink">Introduction
        </TagLine>
    )
}

export function Problem(props)
{
    return(
        <CommonContainer >
            <Row>
                    <QuickContainer className = "titleFont">
                        <TagLine 
                        className = "fontLink" 
                        style = {{fontSize: "2.8vmax", width: "38vmax"}}>
                            The Unseen Limitations of Blockchain
                        </TagLine>
                        <Row style = {{marginTop: "0vmax"}}>
                            <FaCoins style = {{color: "grey", marginTop: "1.55vmax"}}/>
                            <TagLinePg style = {{textAlign: "left", width: "30vmax", marginLeft: "2vmax"}}>
                            Many projects have no real output: their only product is their own assets.
                            </TagLinePg>
                        </Row>

                        <Row style = {{marginTop: ".5vmax"}}>
                            <FaUserAlt style = {{color: "grey", marginTop: "1.55vmax"}}/>
                            <TagLinePg style = {{textAlign: "left", width: "30vmax", marginLeft: "2vmax"}}>
                                Users are primarily leveraged as a source of capital, despite the fact that their 
                                skills and time are far more valuable when properly channeled.
                            </TagLinePg>
                        </Row>

                        <Row>
                            <FaGlobeAmericas style = {{color: "grey", marginTop: "1.55vmax"}}/>
                            <TagLinePg style = {{textAlign: "left", width: "30vmax", marginLeft: "2vmax"}}>
                                Platforms are confined to isolated on-chain ecosystems, limiting external reach.
                            </TagLinePg>
                        </Row>

                    </QuickContainer>

            </Row>
        </CommonContainer>
    )
}

export function Solution(props)
{
    return(
        <CommonContainer >
            <Row>
                    <QuickContainer className = "titleFont">
                        <TagLine 
                        className = "fontLink" 
                        style = {{fontSize: "2.8vmax"}}>
                            The Utility-Driven DeFi Network
                        </TagLine>

                        <TagLinePg 
                        style = {{width: "51vmax", fontSize: "1.3vmax", marginTop: "1vmax"}}>
                            Our solution is an expansive blockchain network 
                            
                        </TagLinePg>

                        <Row>
                            <img src = {distributionIcon} alt = "distribution model" style = {{height: "4vmax", marginRight: "3vmax", marginTop: "1vmax"}} />
                            <TagLinePg style = {{textAlign: "left", width: "30vmax"}}>
                            Users earn Dark Energy, a secondary non-transferable currency. Dark Energy is staked to earn Vertigo Tokens, or invested within the ecosystem to build passive Dark Energy income. 
                            </TagLinePg>
                        </Row>
                        <Row>
                            <img src = {logoPlusIcon} alt = "dapp integrations " style = {{height: "4vmax", marginLeft: "0.7vmax", marginRight: "1vmax", marginTop: "1vmax", paddingRight: "0.2vmax"}} />
                            <TagLinePg style = {{textAlign: "left", width: "30vmax", marginLeft: "2vmax"}}>
                            Third-party entities can distribute VertigoDAO assets, including Dark Energy. This creates diverse opportunities for user progression while driving new traffic to the service.
                            </TagLinePg>
                        </Row>

                        <button 
                        className = "fontLink"
                        style = {{
                            marginTop: "4vmax",
                            borderRadius: "20px",
                            height: "4vmax",
                            fontSize: "1.2vmax",
                            width: "13vmax",
                            cursor: "pointer"
                        }}>Whitepaper <AiOutlineArrowRight 
                        style = {{fontSize: "1.2vmax",
                        position: "absolute",
                        marginTop: "0.15vmax", 
                        marginLeft: "0.5vmax"}}/> </button>

                    </QuickContainer>

            </Row>
        </CommonContainer>
    )
}

export function WhatDoesItDo(props)
{
    return(
        <>
            <div style = {{background: "#0A64BC", position: "absolute", height: "100vh", width: '100vw', opacity:  0, zIndex: -1}} />
        <CommonContainer >
            <Row>
                    <QuickContainer className = "titleFont">
                        <TagLine 
                        className = "fontLink" 
                        style = {{fontSize: "2.8vmax"}}>
                            Utility-Driven Blockchain Network
                        </TagLine>

                        <TagLinePg 
                        style = {{width: "51vmax", fontSize: "1.3vmax", marginTop: "1vmax"}}>
                            VertigoDAO allows users to earn crypto by engaging with linked content existing across the digital space.
                            
                        </TagLinePg>

                        <Row>
                            <img src = {distributionIcon} alt = "distribution model" style = {{height: "4vmax", marginRight: "3vmax", marginTop: "1vmax"}} />
                            <TagLinePg style = {{textAlign: "left", width: "30vmax"}}>
                                Partnered Web2 and Web3 platforms distribute or employ VertigoDAO assets such as <b className = "fontLink" style = {{color: "orange"}}>Dark Energy</b> to drive 
                                engagement from VertigoDAO users.
                            </TagLinePg>
                        </Row>
                        <Row style = {{marginTop: "1vmax"}}>
                            <img src = {DEIcon} alt = "distribution model" style = {{height: "3.5vmax", marginRight: "3vmax", marginTop: "1vmax"}} />
                            <TagLinePg style = {{textAlign: "left", width: "30vmax"}}>
                                Dark Energy is a non-transferrable secondary token that can be invested in the ecosystem for passive earnings
                                or staked to earn Vertigo Tokens.
                            </TagLinePg>
                        </Row>
                        <Row style = {{marginTop: "1vmax"}}>
                            <img src = {logoPlusIcon} alt = "dapp integrations " style = {{height: "4vmax", marginLeft: "0.7vmax", marginRight: "1vmax", marginTop: "1vmax", paddingRight: "0.2vmax"}} />
                            <TagLinePg style = {{textAlign: "left", width: "30vmax", marginLeft: "2vmax"}}>
                            
                            VertigoDAO is designed to foster rapid expansion, able to incorporate its blockchain-based incentive structure with any digital niche.
                            </TagLinePg>
                        </Row>

                        <button 
                        className = "fontLink"
                        style = {{
                            marginTop: "4vmax",
                            borderRadius: "20px",
                            height: "4vmax",
                            fontSize: "1.2vmax",
                            width: "13vmax",
                            cursor: "pointer"
                        }}>Whitepaper <AiOutlineArrowRight 
                        style = {{fontSize: "1.2vmax",
                        position: "absolute",
                        marginTop: "0.15vmax", 
                        marginLeft: "0.5vmax"}}/> </button>

                    </QuickContainer>

            </Row>
        </CommonContainer>
        </>
    )
}

export function WhyDoesItMatter(props)
{
    return(
            <CommonContainer style = {{marginTop: "29vmax"}}>
                <QuickContainer className='titleFont' style = {{background: "none", padding: "3vmax", width: "100vmax"}}>

                    <TagLine 
                    className = "fontLink"
                    style = {{fontSize: "4vmax"}}>Key Solutions</TagLine>


        
                    <div style = {{display: "flex", flexDirection: "column", textAlign: "left", alignItems: "left", width: "50vmax", marginTop: "2vmax", transformStyle: "preserve-3d"}}>
                        <Tilt className = {style_card.Tilt}
                            perspective={1000}
                            glareEnable={false}
                            glareMaxOpacity = {0.2}
                            scale = {1.02}
                            gyroscope={false}
                            glareBorderRadius = "20px"
                            >
                                <div style = {{background: "#171a24", borderRadius: "30px", paddingLeft: "3vmax", paddingRight: "3vmax"}}>
                                    <Row>
                                        
                                        <TagLine style = {{color: "grey"}} className = "fontLink">Inclusive</TagLine>
                                        <TagLinePg style = {{marginLeft: "3vmax", marginTop: "1.8vmax", width: "34vmax"}}>
                                        
                                            Most cryptocurrency projects offer little to people who have not purchased
                                            their associated token.  Buying tokens is risky, so most people choose not to participate at all.

                                        </TagLinePg>
                                    </Row>
                                    <Row style = {{marginTop: "1vmax"}}>
                                        <TLImg src = {DEIcon} style = {{color: "#2d3247", fontSize: "3vmax", marginTop: "-2vmax", marginLeft: "1.5vmax", height: "5vmax"}}/>
                                        <TagLinePg style = {{marginLeft: "4.4vmax", marginTop: "1vmax", width: "32vmax"}}>
                                        
                                            VertigoDAO provides an open, utility-driven ecosystem that encourages 
                                            everybody to participate and provides them with the tools to establish 
                                            themselves on the blockchain.
                                            
                                        </TagLinePg>
                                    </Row>
                                </div>
                            </Tilt>

                            <Tilt className = {style_card.Tilt}
                                perspective={1000}
                                glareEnable={false}
                                glareMaxOpacity = {0.2}
                                scale = {1.02}
                                gyroscope={false}
                                glareBorderRadius = "20px"
                                >
                                <div style = {{background: "#25293b", borderRadius: "30px", paddingLeft: "3vmax", marginTop: "2vmax", paddingRight: "3vmax"}}>
                                    <TranslateInner>
                                        <Row >
                                            <TagLine style = {{color: "grey"}} className = "fontLink">Malleable</TagLine>
                                            <TagLinePg style = {{marginLeft: "2vmax", marginTop: "1.8vmax", width: "32vmax"}}>
                                            
                                                Smart contracts are immutable after deployment.  Developers 
                                                are constrained to a narrow set of tools when extending
                                                low-level logic and data structures.  This makes it difficult to 
                                                accomodate variable market demands.
                                            </TagLinePg>
                                        </Row>
                                    </TranslateInner>
                                    <Row>
                                        <img src = {malleableIcon} style = {{color: "#52fa5e", fontSize: "3vmax", marginTop: "-1.5vmax", marginLeft: "0.5vmax", height: "5vmax"}}/>
                                        <TagLinePg style = {{marginLeft: "2.5vmax", marginTop: "1.8vmax", width: "37vmax"}}>
                                        
                                            VertigoDAO is fundamentally versatile, employing a modular smart contract system.
                                            Storage and integration solutions cooperate to create a 
                                            virtual development layer, providing unique tools that 
                                            allow our ecosystem to comfortably operate beyond the blockchain.
                                        </TagLinePg>
                                    </Row>
                                </div>
                            </Tilt>

                            <Tilt className = {style_card.Tilt}
                                perspective={1000}
                                glareEnable={false}
                                glareMaxOpacity = {0.2}
                                scale = {1.02}
                                gyroscope={false}
                                glareBorderRadius = "20px"
                                >
                                <div style = {{background: "#171a24", borderRadius: "30px", paddingLeft: "3vmax", marginTop: "2vmax", paddingRight: "3vmax"}}>
                                    <Row >
                                        <TagLine style = {{color: "grey", paddingRight: "1.7vmax"}} className = "fontLink">Usable</TagLine>
                                        <TagLinePg style = {{marginLeft: "2vmax", marginTop: "1.8vmax", width: "32vmax"}}>
                                            
                                            VertigoDAO has already concluded development and testing for 
                                            the launch-day smart contract system.  You can explore the core system
                                            by visting the "Interface" tab while using the Sepolia test network.
                                        </TagLinePg>
                                    </Row>
                                    <Row>
                                        <img src = {usableIcon} style = {{color: "#52fa5e", marginTop: "-2vmax", marginLeft: "2vmax", height: "5vmax"}}/>
                                        <TagLinePg style = {{marginLeft: "4.5vmax", marginTop: "1.8vmax", width: "37vmax"}}>
                                        
                                            While VertigoDAO is built to integrate new DAPPs into the ecosystem, 
                                            the core system contains numerous DeFi utilities in addition to the outlined
                                            progression system.
                                        </TagLinePg>
                                    </Row>
                                </div>
                            </Tilt>

                            <Tilt className = {style_card.Tilt}
                                perspective={1000}
                                glareEnable={false}
                                glareMaxOpacity = {0.2}
                                scale = {1.02}
                                gyroscope={false}
                                glareBorderRadius = "20px"
                                >
                                <div style = {{background: "#25293b", borderRadius: "30px", paddingLeft: "3vmax", marginTop: "2vmax", paddingRight: "3vmax"}}>
                                    <Row >
                                        <TagLine style = {{color: "grey", paddingRight: "2.9vmax"}} className = "fontLink">Trust</TagLine>
                                        <TagLinePg style = {{marginLeft: "2vmax", marginTop: "1.8vmax", width: "32vmax"}}>
                                        
                                            Good intentions are a lousy guarantee.  VertigoDAO maintains limited team
                                            powers, favoring open-ended system expansion.  Anyone can integrate their DAPP, but
                                            the VertigoDAO team chooses who to endorse with official support.

                                        </TagLinePg>
                                    </Row>
                                    <Row>
                                        <img src = {trust} style = {{color: "#52fa5e", height: "6vmax", marginTop: "-2vmax", marginLeft: "1vmax",}}/>
                                        <TagLinePg style = {{marginLeft: "3.5vmax", marginTop: "1.8vmax", width: "37vmax"}}>
                                        
                                            ▶ Administrative tasks are handled autonomously, removing the need for abusable centralized authority.  <br/><br/>
                                            ▶ Over 90% of tokens minted are immediately distributed to the community.  <br/><br/>
                                            ▶ Tokens are only minted through the autonomous Dark Energy staking pool. <br/><br/>

                                        </TagLinePg>
                                    </Row>
                                </div>
                            </Tilt>

                    </div>




                </QuickContainer>
        </CommonContainer>
    )

}

export function HowDoRewardsWork(props)
{
    return(
        <CommonContainer>
            <QuickContainer className='titleFont'>
            
                <TagLine 
                className = "fontLink" 
                style = {{fontSize: "2.8vmax"}}>
                    How Do Users Earn Rewards?
                </TagLine>
                <Introduction />
                <Row >
                    <img src = {oneimg} alt = "one " style = {{height: "1.6vmax", marginRight: "3vmax", marginTop: "1.4vmax"}}/>
                    <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                        All users receive a base Dark Energy income, making progression accessible to everybody.
                    </TagLinePg>
                </Row>

                <Row>
                <img src = {twoimg} alt = "two " style = {{height: "1.6vmax", marginRight: "3vmax", marginTop: "1.4vmax"}}/>
                    <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                        Users can stake their Dark Energy to earn Vertigo Tokens, which are distributed 
                        weekly, following a flat deflationary curve.  Staked Dark Energy is burned.
                    </TagLinePg>
                </Row>

                <Row>
                    <img src = {threeimg} alt = "three " style = {{height: "1.6vmax", marginRight: "3vmax", marginTop: "1.4vmax"}}/>
                    <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                        The pool resets at the end of the week, distributing Vertigo Tokens to all stakers
                        based on the amount they staked compared to the total.
                    </TagLinePg>
                </Row>

                <TagLinePg style = {{width: "38vmax", textAlign: "center", marginTop: "3vmax"}}>
                Users permanently increase their Dark Energy income by acquiring
                    select integrated assets.  Dark Energy can also be obtained 
                    by engaging with integrated experiences.
                    </TagLinePg>



            </QuickContainer>
        </CommonContainer>
    )
}

export function HowDoesGovernanceWork(props)
{
    return(
        <CommonContainer style = {{marginTop: "36vmax"}}>
            <QuickContainer className='titleFont'>

                <TagLine 
                className = "fontLink" 
                style = {{fontSize: "2.8vmax"}}>
                    Optimized Governance
                </TagLine>

                <CoreSystemText />

                <TagLinePg
                style = {{width: "48vmax", fontSize: "1.5vmax", marginTop: "2vmax", textAlign: "left", marginLeft: "5vmax"}}>
                    Users want a voice in the decision-making process, not to carry the full burden of innovation.
                </TagLinePg>
                
                <Row style = {{marginTop: "2vmax"}}>
                    <div style = {{display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "6vmax"}}>

                        <img src = {wvert} style = {{width: "7vmax", height: "1.5vmax", marginTop: "2vmax"}}/>
                        <img src = {development} style = {{width: "12vmax", marginTop: "4.2vmax", height: "1.5vmax"}}/>
                        <img src = {ownership} style = {{width: "10vmax", marginTop: "4.2vmax", height: "1.5vmax"}}/>
                        <img src = {autonomy} style = {{width: "10vmax", marginTop: "4.2vmax"}}/>


                    </div>

                    <div style = {{display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "7vmax"}}>
                        <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                            <b style = {{color: "orange"}} className = "fontLink">Wrapped Vertigo Tokens</b> (WVERT) will be introduced post-launch, allowing 
                            the community to vote on developer proposals.
                        </TagLinePg>
                        <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                            Community DAPPs can easily be integrated into the ecosystem, 
                            even distributing native rewards with the <b style = {{color: "orange"}} className = "fontLink">Dark Energy Grants</b> system.
                        </TagLinePg>
                        <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                            Our weekly distribution system distributes 90% of new tokens to the community and 
                            supports many avenues for token burning.
                        </TagLinePg>
                        <TagLinePg style = {{width: "30vmax", textAlign: "left"}}>
                            Most system upkeep is handled autonomously, minimizing required administrative powers.
                        </TagLinePg>
                    </div>
                </Row>


            </QuickContainer>
        </CommonContainer>
    )
}

export function GrantSystem()
{
    return(
        <CommonContainer style = {{marginTop: "34vmax"}}>
            <QuickContainer className = "titleFont">

                <TagLine className = "fontLink" style = {{fontSize: "2.8vmax"}}>
                    Dark Energy Grants
                </TagLine>

                <CoreSystemText />

                <TagLinePg style = {{width: "50vmax", fontSize: "1.3vmax"}}>
                    Dark Energy Grants are a smart contract feature that 
                    provide approved entities with Dark Energy minting 
                    privileges. Providers can mint and distribute a set amount of Dark Energy each week,
                    with each unit costing Vertigo Tokens.
                    
                </TagLinePg>

                <Row style = {{marginTop: "2vmax"}}>

                    <div style = {{display: "flex", flexDirection: "column", textAlign: "center", marginLeft: "0vmax", alignItems: "center"}}>
                        <img src = {arrowAroundLogo} style = {{marginTop: "1.7vmax", width: "5vmax"}}/>
                        <TagLinePg className = "fontLink" style = {{fontSize: "1.6vmax", marginTop: "1.9vmax", color: "#9fa3c9"}}>
                            
                            Grow Your Reach

                        </TagLinePg>

                        <TagLinePg style = {{fontSize: "1vmax", marginTop: "0vmax", width: "25vmax"}}>
                            
                            Dark Energy Grants allow external projects to easily
                            drive user interest on the blockchain by integrating Dark Energy rewards
                            as a unique incentive structure.

                        </TagLinePg>

                    </div>

                    <div style = {{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", marginLeft: "-30vmax"}}>
                        <img src = {leverageIcon} style = {{marginTop: "2vmax", width: "5vmax"}}/>
                        <TagLinePg className = "fontLink" style = {{fontSize: "1.6vmax", marginTop: "2vmax", color: "#9fa3c9"}}>
                            
                            Leverage the Blockchain

                        </TagLinePg>

                        <TagLinePg style = {{fontSize: "1vmax", marginTop: "0vmax", width: "25vmax"}}>
                            
                            Our integration tools make complex blockchain applications more approachable, while 
                            our ecosystem provides a fertile environment for growth and innovation.

                        </TagLinePg>
                    </div>

                </Row>

                <TagLinePg style = {{width: "50vmax", fontSize: "1.4vmax"}}>

                    
                </TagLinePg>
                <TagLine className = "fontLink" style = {{fontSize: "3vmax", marginTop: "5vmax"}}>Grant Approval Procedure</TagLine>
                <img src = {diagram} style = {{width: "40vmax", marginTop: "3vmax"}}/>
                
                <TagLine className = "fontLink" style = {{fontSize: "3vmax", marginTop: "7vmax"}}>
                    
                    Trickle-Down Tokenomics

                </TagLine>

                <TagLinePg style = {{fontSize: "1.2vmax", marginTop: "0vmax", width: "45vmax"}}>
                    
                    Community-based DAPPs can receive free grants through voter approval.  Conversely, Sponsored Grants
                    are approved by the administration and cost the sponsor $VERT on each mint. These tokens 
                    are allocated to the Vertigo Token Staking pool and distributed to the community in addition
                    to the expected sum.

                </TagLinePg>
                <div style = {{position: "absolute", background: "#101010", width: "50vmax", height: "68vmax", zIndex: -5, marginTop: "46vmax", borderRadius: "20px", opacity: 0.8}}/>

            </QuickContainer>
        </CommonContainer>
    )
}

export function OpenDevelopment()
{
    return(
        <>

            <CommonContainer style = {{marginTop: "-3vmax"}}>
                <QuickContainer className = "titleFont">

                    <TagLine style = {{fontSize: "2.8vmax"}} className='fontLink'>Partner With VertigoDAO</TagLine>
                    <Introduction />

                    <TagLinePg style = {{fontSize: "1.4vmax", width: "50vmax"}}>
                    Leverage our advanced suite of integration tools to drive 
                    user engagement from the blockchain without changing existing protocols.
                    
                    </TagLinePg>

                    <Row style = {{marginTop: "3vmax"}}>
                        <BsLink45Deg style = {{color: 'silver', fontSize: "2.5vmax", marginTop: "0.2vmax"}}/>
                        <TagLinePg style = {{fontSize: "1vmax", width: "30vmax", textAlign: "left", marginLeft: "1vmax"}}>
                            VertigoDAO supports Web2 and Web3 entities.
                        </TagLinePg>
                    </Row>

                    <Row style = {{marginTop: "1.5vmax"}}>
                        <BsDiagram3 style = {{color: 'silver', fontSize: "2.5vmax", marginTop: "0.7vmax"}}/>
                        <TagLinePg style = {{fontSize: "1vmax", width: "30vmax", textAlign: "left", marginLeft: "1vmax"}}>
                            Our open-ended asset integration system allows partners to design their own experience 
                            without arbitrary limitations.
                        </TagLinePg>
                    </Row>

                    <Row style = {{marginTop: "1.5vmax"}}>
                        <RiPlantLine style = {{color: 'silver', fontSize: "2.5vmax", marginTop: "0.2vmax"}}/>
                        <TagLinePg style = {{fontSize: "1vmax", width: "30vmax", textAlign: "left", marginLeft: "1vmax"}}>
                        Specialized incubation services promote rapid growth.
                        </TagLinePg>
                    </Row>

                    <TagLinePg style = {{fontSize: "1.4vmax", width: "50vmax", marginTop: "5vmax"}}>

                    The VertigoDAO ecosystem cohesively aligns user and partner interests, 
                    creating a powerful environment that promotes mutual benefit.
                    
                    </TagLinePg>


                </QuickContainer>
            </CommonContainer>
        </>
    )
}