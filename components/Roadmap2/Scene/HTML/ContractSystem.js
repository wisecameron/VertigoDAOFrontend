import styled from 'styled-components';
import {CardPicker} from '../../../Property/cardSelector'
import hydra from '../../../../assets/hydra.png';


import token from '../../../../assets/token.png';
import profile from '../../../../assets/profile.png';
import property from '../../../../assets/property.png';
import coreSystemIcon from '../../../../assets/coreSystemIcon.png';
import contrimg from '../../../../assets/contrimg.png';
import card from '../../../../assets/glasscard.png';
import contractSummaries from '../../../../assets/contractSummaries.png'
import { useState } from 'react';

const TagLine = styled.h1`
    color: white;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2vmax;
`

const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    z-index: 1000;
`
const TagLinePg = styled.h2`
    color: white;
    width: 60vw;
    font-size: 1.1vmax;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const QuickContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

const QuickContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

const ClickBox = styled.div`
    width: 5vmax;
    height: 7.5vmax;
    background-size: 95%;
    background-repeat: no-repeat;

    &:hover{
        width: 6vmax;
        height: 8.3vmax;
    }
`

const QuickFree = styled.div`
    display: flex;

`

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

const UserSystemText = () =>
{
    return(
        <Row>
        <TagLine style = {{color: "grey",
        fontSize: "1.2vmax", marginTop: "-1vmax" }} className = "fontLink">Advanced User-Level Features
        </TagLine>
        <img src = {coreSystemIcon} style = {{height: "1.2vmax", marginTop: "-.85vmax", marginLeft: "0.5vmax"}} />
    </Row>
    )
}

export function NewSection(props)
{

    return(
        <CommonContainer className = "titleFont">

            <TagLine className = "orbitron"
            style = {{fontSize: "6vmax"}}>
                Core Features
            </TagLine>

            <TagLinePg 
            style = {{ marginTop: "-1.5vmax"}}
            >
                Core features are included within the smart contract system on launch.
            </TagLinePg>

        </CommonContainer>
    )

}

export function InfiniteConnector(props)
{

    return(
        <CommonContainer className = "titleFont">
            <QuickContainer>
                <TagLine 
                className = "fontLink"
                style = {{fontSize: "3vmax"}}>
                    Infinite Connector
                </TagLine>

                <CoreSystemText />

                <TagLinePg className = "fontLink" style = {{color: "grey", fontSize: "1.6vmax"}}>Elevated Post-Deployment Versatility</TagLinePg>

                <TagLinePg style = {{fontSize: "1.4vmax", width: "50vmax"}}>

                Infinite Connector is a simple development pattern that provides versatility
                using privileged on-demand access to otherwise isolated data and functions.

                </TagLinePg>

            </QuickContainer>

        </CommonContainer>
    )
}

export function ContractSystem(props)
{

    return(
        <CommonContainer className = "titleFont" style = {{marginTop: "4vmax"}}>
            <QuickContainer>
                <TagLine 
                className = "fontLink"
                style = {{fontSize: "3vmax"}}>
                    Core Smart Contract System
                </TagLine>

                <CoreSystemText />

                <TagLinePg
                style = {{marginTop: "2vmax", width: "46vmax", textAlign: "center", textJustify: "center", fontSize: "1.4vmax"}}>
                    The Token, Profile, and Property smart contracts 
                    are aided by unique on-chain storage solutions to provide
                    a versatile foundation for the full VertigoDAO ecosystem.
                </TagLinePg>
            </QuickContainer>
            <img src = {contractSummaries} style = {{marginTop: "5vmax"}}/>
            <QuickContainerRow style = {{marginTop: "4vmax"}} className = "titleFont">
                <Col>
                    <ClickBox style = {{backgroundImage: `url(${token})`, cursor: "pointer"}}/>
                    <TagLine style = {{fontSize: "1.5vmax"}}>Token</TagLine>
                </Col>
                <Col
                style = {{marginLeft: "12vmax"}}
                >
                    <ClickBox style = {{backgroundImage: `url(${profile})`, cursor: "pointer"}}/>
                    <TagLine style = {{fontSize: "1.5vmax"}}>Profile</TagLine>
                </Col>
                <Col 
                style = {{marginLeft: "12vmax"}}>
                    <ClickBox style = {{backgroundImage: `url(${property})`, cursor: "pointer"}}/>
                    <TagLine style = {{fontSize: "1.5vmax"}}>Property</TagLine>
                </Col>
            </QuickContainerRow>


        </CommonContainer>
    )
}

export function Storage()
{

    return(
        <>

            <CommonContainer className = "titleFont" style = {{marginTop: "45vmax"}}>
                <Row>
                    <div style = {{display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", marginLeft: "12vmax"}}>
                        <TagLine className = "fontLink" style = {{fontSize: "3vmax"}}>
                            Hydra Storage System
                        </TagLine>

                        <CoreSystemText />

                        <TagLinePg style = {{fontSize: "1.5vmax", marginTop: "0vmax", color: "#9fa3c9"}}>
                            <i>Secure, versatile, and efficient. </i>
                        </TagLinePg>

                        <TagLinePg style = {{width: "40vmax"}}>
                            Our advanced storage solution remedies numerous technical limitations posed
                            by the Solidity language and its unique operating environment, while 
                            optimizing gas costs.
                            <br/><br/>
                            Many projects fail to innovate beyond the bounds of their initial concept 
                            due to the rigidity of deployed smart contracts.  Hydra makes data storage open-ended and modular, 
                            removing these classic roadblocks.
                            

                        </TagLinePg>

                        <Row>
                            <div>
                                <TagLine style = {{marginLeft: "3vmax", marginTop: "3vmax"}}>
                                    Technical Highlights
                                </TagLine>

                                <TagLinePg style = {{width: "30vmax", marginLeft: "3vmax", marginTop: "0vmax"}}>
                                ▶ Sorted bit packing optimizes storage costs. <br/><br/>
                                ▶ New queries can be added post-deployment.<br/><br/>
                                ▶ The storage contract can be cycled at any time, 
                                delegating new entries to a fresh instance with the same bitmap. <br/><br/>
                                ▶ Old contracts remain alive after cycling, allowing for
                                massive, yet streamlined datasets. <br/><br/>
                                ▶ The multimod function can greatly reduce storage costs 
                                by grouping changes in like bitmap pages. 

                                </TagLinePg>
                            </div>
                            <Col2 style = {{marginLeft: "5vmax", marginTop: "8vmax"}}>
                                <img src = {contrimg} style = {{width: "12vmax", height: "15vmax", border: "1px solid grey", cursor: "pointer"}}/>
                                <TagLine className = "titleFont" style = {{fontSize: "1.4vmax", cursor: "pointer"}}>Source Code</TagLine>
                            </Col2>
                        </Row>

                    </div>
                    <img src = {hydra} style = {{height: "15vmax", marginLeft: "-18vmax", marginTop: "7vmax"}}/>

                </Row>

            </CommonContainer>
        </>
    )
}

export function PremiumProperties()
{
    return(
        <>
            <CommonContainer className = "titleFont" style = {{marginTop: "-1vmax"}}>
                <Row>
                    <div style = {{marginTop: "3.5vmax", marginLeft: "7vmax", textAlign: "left"}}>
                        <CardPicker isVCash = {true} index = {4} />
                    </div>

                    <div style = {{display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", marginLeft: "6vmax", marginTop: "1vmax"}}>
                        <TagLine className = "fontLink" style = {{fontSize: "3vmax"}}>
                            Virtual Real Estate
                        </TagLine>

                        <TagLinePg style = {{fontSize: "1.5vmax", marginTop: "0vmax", width: "30vmax"}}>
                            <i>Dark Energy-generating NFTs with unique integrated utility.</i>
                        </TagLinePg>

                        <TagLinePg style = {{width: "30vmax"}}>
                                <b className = 'fontLink'>Properties Enhance Income</b><br/> Each property adds a bonus to the income generated by a user's Profile NFT, permanently rewarding participation with linked content.<br/><br/>
                                <b className = 'fontLink'>Property Types</b><br/>
                                There are "Default" and "Premium" Properties.  Default Properties are acquired sequentially and are linked to user Profiles.  <br/><br/>Premium Properties have limited supply and are linked to ETH addresses.  Premium bonuses can be rented to others for $VERT.
                        </TagLinePg>

                    </div>
                </Row>
            </CommonContainer>
        </>
        
    )
}

export function Profiles()
{
    const [page, setPage] = useState(0);

    const ChangePage = (up) =>
    {
        if(up == 1 && page < 2)
        {
            setPage(page + 1);
        }
        else if(up == 0 && page > 0)
        {
            setPage(page - 1);
        }
    }

    return(
        <CommonContainer className = "titleFont" style = {{marginTop: "-4vmax"}}>
            <Row>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", marginLeft: "20vmax"}}>
                    <TagLine className = "fontLink" style = {{fontSize: "4vmax"}}>
                        Profile NFTs
                    </TagLine>
                    <UserSystemText />


                    <TagLinePg style = {{fontSize: "1.5vmax", marginTop: "0vmax", color: "#9fa3c9", width: "30vmax"}}>
                        <i>Key to the VertigoDAO ecosystem.</i>
                    </TagLinePg>
                    <TagLinePg style = {{width: "30vmax"}}>
                        Profiles contain user progress as a 
                        tradeable tokenized asset and 
                        provide an array of benefits as users progress.
                    </TagLinePg>

                    <TagLinePg style = {{width: "25vmax"}}>
                    ▶ Profiles are upgradable and start at Tier III.
                    <br/><br/>
                    ▶ Ownership is required to access the ecosystem.  
                    <br/><br/>
                    </TagLinePg>
                </div>

                <div 
                style = {{
                    marginTop: "4vmax",
                    marginLeft: "7vmax", 
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>

                    <img src = {card}  style = {{width: "20vmax"}} alt = "profile NFT card" />

                    <Col>
                        <TagLine style = {{marginLeft: "-12vmax", fontSize: "1.8vmax", color: "grey"}} className = "orbitron">Tier III Profile</TagLine>
                        <TagLine style = {{fontSize: "1.4vmax", marginLeft: "-12vmax"}}>Base Income: </TagLine>

                    </Col>

                </div>

            </Row>

        </CommonContainer>
    )
}