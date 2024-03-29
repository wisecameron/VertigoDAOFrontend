import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../../../css/App.css'
import {CardPicker} from '../../Property/cardSelector'
import {animated, useSpring} from 'react-spring'
import button4 from '../../../assets/aperButton.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { Row } from '../../Roadmap2/Scene/HTML/SharedStyles'

const SceneContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    overflow: scroll;
    zIndex: 100;
    textAlign: "left";
    height: "440vh";
`

const TagLine = styled.div`
    color: "white";
    z-index: 100;
`

const TagLine2 = styled.h1`
    font-size: 8vmin;
    color: "white";
`

export default function MobileHTML(props)
{
    //Access Pass Whitelisting Styles
    const {_, scrollY} = useWindowScrollPositions()

    if(1===2) console.log(_); //wack error fix


    const AccessPassTopHeadingStyles = useSpring({
        from: {color: "white", zIndex: 100, textAlign: "left", opacity: 0, fontSize: "6vmin"},
        to: {color: "white", zIndex: 100, textAlign: "left", opacity: 1, fontSize: "6vmin", marginTop: "35vmin"},
        config: {duration: 800},
        delay: 600
    })

    const AccessPassTagLine1Styles = useSpring({
        from: {fontSize: "4vmin", opacity: 0, color: "white", marginLeft: "5vmin"},
        to: {fontSize: "4vmin", opacity: 1, marginTop: "-2vmin", color: "white", width: "70vmin", marginLeft: "5vmin"},
        config: {duration: 800},
        delay: 1000
    })
    
    const Icon1Styles = useSpring({
        from: {opacity: 0, marginTop: "3vmin"},
        to: {opacity: 1, marginTop: "3vmin"},
        config: {duration: 800},
        delay: 1000
    })

    const Icon2Styles = useSpring({
        from: {opacity: 0, marginTop: "5vmin"},
        to: {opacity: 1, marginTop: "5vmin"},
        config: {duration: 800},
        delay: 1000
    })

    const AccessPassTagLine2Styles = useSpring({
        from: {fontSize: "4vmin", opacity: 0, color: "white", marginLeft: "5vmin"},
        to: {fontSize: "4vmin", opacity: 1, marginTop: "0vmin", color: "white", width: "70vmin", marginLeft: "5vmin"},
        config: {duration: 800},
        delay: 1400
    })

    //*******************************

    //Form button styles
    const Button1Styles = useSpring({
        from: {color: "white", background: "none", border: "none", borderRadius: "5px", opacity: 0, padding: "2vmin"},
        to: {color: "white", background: "none", border: "none", borderRadius: "5px", opacity: 1, padding: "2vmin"},
        config: {duration: 800},
        delay: 1400
    })


    const IMGButtonStyles = useSpring({
        from: {width: "4.3vmax", height: "4vmax", opacity: 0, marginTop: "0.3vh"},
        to: {width: "4.3vmax", height: "4vmax", opacity: 1, marginTop: "0.3vh"},
        config: {duration: 800},
        delay: 1800
    })

    //*******************************

    //Better Way To Earn Crypto Section Styles

    const BetterWayTL1Styles = useSpring({
        from: {marginTop: "2vh", opacity: 0, color: "white"},
        to: {marginTop: "2vh", opacity: (scrollY > 250) ? 1:0, width: "80vw", color: "white", fontSize: "6.5vmin"},
        config: {duration: scrollY > 250 ? 600 : 200},
        delay: scrollY > 250 ? 0 : 0
    })

    const BetterWayTL2Styles = useSpring({
        from: {marginTop: "2vmin", fontSize: "4vmin", opacity: 0, color: "white"},
        to: {marginTop: "2vmin", fontSize: "4vmin", opacity: (scrollY > 250) ? 1:0, width: "80vw", color: "white"},
        config: {duration: scrollY > 250 ? 600 : 200},
        delay: scrollY > 250 ? 400 : 0
    })

    const BetterWayTL3Styles = useSpring({
        from: {marginTop: "2vmin", fontSize: "4vmin", opacity: 0, color: "white"},
        to: {marginTop: "2vmin", fontSize: "4vmin", opacity: (scrollY > 250) ? 1:0, width: "80vw", color: "white"},
        config: {duration: scrollY > 250 ? 600 : 200},
        delay: scrollY > 250 ? 800 : 0
    })
    const BetterWayTL4Styles = useSpring({
        from: {marginTop: "64vmin", fontSize: "4vmin", opacity: 0, color: "white"},
        to: {marginTop: "64vmin", fontSize: "4vmin", opacity: (scrollY > 250) ? 1:0, width: "80vw", color: "white"},
        config: {duration: scrollY > 250 ? 600 : 200},
        delay: scrollY > 250 ? 1200 : 0
    })
    const BetterWayTL5Styles = useSpring({
        from: {marginTop: "2vmin", fontSize: "4vmin", opacity: 0, color: "white"},
        to: {marginTop: "2vmin", fontSize: "4vmin", opacity: (scrollY > 250) ? 1:0, width: "80vw", color: "white"},
        config: {duration: scrollY > 250 ? 600 : 200},
        delay: scrollY > 250 ? 1600 : 0
    })
    //*******************************

    //Properties Section
    const PropertiesTitleStyles = useSpring({
        from: {textAlign: "left", marginTop: "40vmin", opacity: 0, color: "white"},
        to: {textAlign: "left", marginTop: "40vmin", opacity: scrollY > 1000 ? 1 : 0, fontSize: "7vmin", color: "white"},
        config: {duration: scrollY > 1000 ? 600 : 200},
        delay: 0
    })

    const PropertiesTitle2Styles = useSpring({
        from: {marginTop: "-2vmin", opacity: 0, color: "white"},
        to: {marginTop: "-2vmin", opacity: scrollY > 1000 ? 1 : 0, color: "white"},
        config: {duration: scrollY > 1000 ? 600 : 200},
        delay: scrollY > 1000 ? 400 : 0
    })

    const PropertiesTitle3Styles = useSpring({
        from: {marginTop: "3vmax", opacity: 0, color: "white"},
        to: {marginTop: "3vmax", opacity: scrollY > 1000 ? 1 : 0, color: "white"},
        config: {duration: scrollY > 1000 ? 600 : 200},
        delay: scrollY > 1000 ? 1400 : 0
    })

    const CardLeftStyles = useSpring({
        from: {opacity: 0},
        to: {opacity: scrollY > 1000 ? 1 : 0},
        config: {duration: scrollY > 1000 ? 600 : 200},
        delay: scrollY > 1000 ? 800 : 0
    })

    const CardRightStyles = useSpring({
        from: {opacity: 0},
        to: {opacity: scrollY > 1000 ? 1 : 0, marginLeft: "14vmin"},
        config: {duration: scrollY > 1000 ? 600 : 200},
        delay: scrollY > 1000 ? 1000 : 0
    })

     //*******************************

     //Ecosystem Section
     const EcoHeader = useSpring({
        from: { width: "100vw", opacity: 0, color: "white"},
        to: { color: "white", width: "100vw", opacity: (scrollY > 1500) ? 1 :0},
        config: {duration: (scrollY > 1500) ? 600 : 200},
        delay: 0
    })

    const EcoHeader2 = useSpring({
        from: {fontSize: "4vmin", width: "80vw", opacity: 0, color: "white"},
        to: {fontSize: "4vmin", width: "80vw", opacity: (scrollY > 1500) ? 1 :0, color: "white"},
        config: {duration: (scrollY > 1500) ? 600 : 200},
        delay: (scrollY > 1500) ? 400 : 0
    })

    const EcoText1 = useSpring({
        from: {opacity: 0, fontSize: "4vmin", width: "80vw", color: "white"},
        to: {opacity: (scrollY > 1500) ? 1 :0, fontSize: "4vmin", width: "80vw", color: "white"},
        config: {duration: (scrollY > 1500) ? 600 : 200},
        delay: (scrollY > 1500) ? 800 : 0
    })

    const EcoText2 = useSpring({
        from: {opacity: 0, fontSize: "4vmin", width: "80vw", color: "white"},
        to: {opacity: (scrollY > 1500) ? 1 :0, fontSize: "4vmin", width: "80vw", color: "white"},
        config: {duration: (scrollY > 1500) ? 600 : 200},
        delay: (scrollY > 1500) ? 1200 : 0
    })

    const EcoText3 = useSpring({
        from: {opacity: 0, fontSize: "4vmin", width: "80vw", color: "white"},
        to: {opacity: (scrollY > 1500) ? 1 :0, fontSize: "4vmin", width: "80vw", color: "white"},
        config: {duration: (scrollY > 1500) ? 600 : 200},
        delay: (scrollY > 1500) ? 1600 : 0
    })

     //*******************************


    let FormButtons = (
        <>
            <div style = {{display: "flex", flexDirection: "row", zIndex: 100, marginTop: "15vh", marginLeft: "14vmin"}}>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "left"}}>
                    <a 
                    href = "http://www.google.com"
                    target = "_blank" 
                    rel = "noreferrer">
                        <animated.button style = {Button1Styles} className = "titleFont">Join Our Telegram</animated.button>
                    </a>
                </div>
                <a 
                href = "http://www.google.com"
                target = "_blank" 
                rel = "noreferrer"><animated.img src = {button4} alt = "button" style = {IMGButtonStyles}/></a>
            </div>
        </>
    )

    let AccessPass = ( 
        <div style = {{marginLeft: "3vmax", zIndex: 100}}>
            <animated.p className = "fontLink" style = {AccessPassTopHeadingStyles}>The Blockchain Economy That Works For You</animated.p>

            <Row>
                <animated.span style = {Icon1Styles}>
                    <AiOutlineUser style = {{color: "grey"}} />
                </animated.span>
                <TagLine className = "titleFont" as = {animated.h1} style = {AccessPassTagLine1Styles}>
                    <strong>
                    Become a DeFi tycoon by engaging with content across the web!.
                    </strong>
                </TagLine>
            </Row>

            <Row>
                <animated.span style = {Icon2Styles}>
                    <BsBriefcase style = {{color: "grey"}} />
                </animated.span>
           
                <TagLine className = "titleFont" as = {animated.h1} style = {AccessPassTagLine2Styles}>
                    <strong>
                        Drive users to your Web2 or Web3 platform by integrating with the
                        VertigoDAO network.

                    </strong>
                </TagLine>
            </Row>


            
        </div>
    )

    let BetterWayToEarnCryptoText = (
        <div style = {{marginLeft: "-6vmin", zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", marginTop: "36vmax"}}>
            <TagLine2 as = {animated.h1} className = "fontLink" style = {BetterWayTL1Styles}>Built for Individuals and Enterprises</TagLine2>
            <animated.p className = "titleFont" style = {BetterWayTL2Styles}>
            <b>Our network is designed to drive results across the digital space.</b>
            </animated.p>
            <animated.p className = "titleFont" style = {BetterWayTL3Styles}>
            <b className = "titleFont">Users </b>
                build persistent token income through effort and engagement alone.
            </animated.p>
            <animated.p className = "titleFont" style = {BetterWayTL4Styles}>
            <b className = "titleFont">Partners </b>
                drive motivated traffic directly to your targeted content.
            </animated.p>
            <animated.p className = "titleFont" style = {BetterWayTL5Styles}>
            <b className = "titleFont">VertigoDAO </b> is an engagement-driven DeFi ecosystem that integrates reward distribution with 
            content across the Web2 and Web3 space.

            </animated.p>
        </div>
    )


    let Properties = (
        <>
            <div style = {{marginTop: "5vh", zIndex: 100, width: "80vw", display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", marginLeft: "3vmax"}}>
                <TagLine2 
                as = {animated.h1} 
                className = "fontLink" 
                style = {PropertiesTitleStyles}>Powered By User Engagement</TagLine2>
                <animated.p className = "titleFont" style = {PropertiesTitle2Styles}><b>The VertigoDAO ecosystem is united by its central token economy. </b></animated.p>
                <animated.p className = "titleFont" style = {PropertiesTitle3Styles}>
                     <b className = 'titleFont'>Grow your p</b><br/>
                     Invest reward currency to build permanent passive rewards.<br/><br/>
                     <b>Do What You Enjoy</b><br/>
                     Choose from a growing range of linked experiences to find opportunities that best match your interests and skills!
                </animated.p>

                <div style = {{display: "flex", flexDirection: "row"}}>
                    
                </div>

            </div>
        </>
    )

    let EcosystemSection = 
    (
        <>
            <div style = {{zIndex: 100, width: "90vw", display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", marginTop: "20vmax", marginLeft: "3vmax", overflowX: "hidden"}}>
                <TagLine2 as = {animated.h1} className = "fontLink" style = {EcoHeader}><b>Innovative Technology</b></TagLine2>
                <TagLine2 as = {animated.h1} className = "nunitosans" style = {EcoHeader2}>The VertigoDAO network is grounded by a collection of smart contracts 
                called the "core system," providing unique capabilities and optimized efficiency.</TagLine2>

                <animated.p style = {EcoText1} className = "nunitosans">
                <b className = "fontLink">Storage Solution </b>
                We built the Hydra Storage System, an innovative smart contract solution providing enhanced flexibilty and efficiency.
                </animated.p>

                <animated.p style = {EcoText2} className = "nunitosans">
                <b className = "fontLink">Integration Layers </b>
                    Hydra allows us to create security and access layers, providing far-reaching integration capabilities through the 
                    adoption of specialized protocols.

                </animated.p>

                <animated.p style = {EcoText3} className = "nunitosans">
                <b className = "fontLink">Autonomous Operation </b>

                    Core system upkeep is managed autonomously, reducing the amount of necessary administrator privileges. Likewise, integration 
                    will constantly move closer to self-service as new integration protocols are introduced.

                </animated.p>
            </div>
        </>
    )

    return(
        <SceneContainer>
            {AccessPass}
            {FormButtons}
            {BetterWayToEarnCryptoText}
            {Properties}
            {EcosystemSection}
            <p 
            style = {{zIndex: 1000, textAlign: "left", marginTop: "5vh", width: "80vw", marginLeft: "3vmax", fontSize: "1.5vmax"}}
            className = "titleFont"
            ><b> Connect on a computer for the intended experience.</b></p>
        </SceneContainer>
    )
}

export const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })
 
    useEffect(() => {
     function updatePosition() {
         setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
     }
 
     window.addEventListener('scroll', updatePosition)
     updatePosition()
 
     return () => window.removeEventListener('scroll', updatePosition)
    }, [])
 
    return scrollPosition
 }

