import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import '../../css/App.css';
import ico from '../../assets/diamond.png';
import card from '../../assets/glasscard.png';
import {CardPicker} from '../Property/cardSelector';
import { animated, useSpring } from 'react-spring';
import { Canvas } from '@react-three/fiber';
import documents_image from '../../assets/documents_image.png';
import rw1 from '../../assets/rw1.png'
import rw2 from '../../assets/rw2.png'
import rw3 from '../../assets/rw3.png'
import { Model, Model2 } from '../DocumentationPage/logoModel';
import style_glow from '../../css/glowButton.module.css';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import FAQ from './FAQ';
import contributorGuideIMG from '../../assets/contributorGuide.png'
import {GiTwoCoins} from 'react-icons/gi';
import style_card from '../../css/CardStyle.module.css'
import simplegraph from '../../assets/simplegraph.png';
import network from '../../assets/network.png';
import Tilt from 'react-parallax-tilt'
import uGuide from '../../assets/userGuideCover.png'
import clickme from '../../assets/usableIcon.png'

const PgStyled = styled.p`
  color: #ffff;
  text-align: left;
  width: 19vw;
  font-size: 2.7vh;
  cursor: default;
`

const PgCen = styled.p`
  color: #ffff;
  text-align: center;
  width: 19vw;
  font-size: 2.5vh;
  cursor: default;
`

const ZPush = styled.div`
  z-index: 100;
  background: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CenterPush = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  width: 100vw;
`

const Left = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background: none;
  width: 100vw;
`

const InnerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100vw;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
`

const QR = styled.div`
  display: flex;
  flexDirection: row;

`

const Row = styled.span`
  width: 100vw;
  display: flex;
  flex-direction: row;
`

const TagLine = styled.h1`
  color: #ffff;
`

const ConGuide = styled.img`
margin-top: 16vmax;
margin-left: 23vmax;
height: 23vmax;
cursor: pointer;
border-radius: 30px;

&:hover
{
  margin-top: 15vmax;
  margin-left: 22.5vmax;
  height: 25vmax;
}
`
const UGGuide = styled.img`
height: 23vmax;
cursor: pointer;
border-radius: 30px;

&:hover
{
  height: 25vmax;
  margin-left: -0.5vmax;
  margin-top: -1vh;
}
`
const LaggingBox = styled.div`
  background: #2e2e2d;
  width: 20vw;
  height: 14vh;
  border-radius: 20px;
  position: "absolute";
  margin-top: 10vh;
  margin-left: 70vw;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const TranslateInner = styled.div`
transform: TranslateZ(40px);
`

export default function HTMLHandler(props)
{
  const scroll = useScroll()
  const  [page, setPage] = useState(0)

  let offset;

  useFrame(() =>
  {
    offset = scroll.offset;
    if(offset > 1 || offset < 0) offset = 0;

    if(offset < 0.16)
    {
      if(page != 0)
      {
        setPage(0);
      }
    }
    else if(offset < .34)
    {

      if(page.current != 1)
      {
        setPage(1);
      }
    }
    else if(offset < .50)
    {
      if(page.current != 2)
      {
        setPage(2);
      }
    }
    else if(offset < .72)
    {
      if(page.current != 3)
      {
        setPage(3);
      }
    }
    else if(offset < .88)
    {
      if(page.current != 4)
      {
        setPage(4);
      }
    }
    else
    {
      if(page.current != 5)
      {
        setPage(5);
      }
    }
  })

  return(
    <>
    <div style = {{height: "800vh", width: "100vw", position: "absolute", background: "#0c0521", opacity: 0.}} />
      <TextBoxLocked vis = {page === 0}/>
      <TagLine2 vis = {page === 1} />
      <Text3 vis = {page === 2} />
      <Text4 vis = {page === 3} />
      <Text5 vis = {page === 4} />
      <Text6 vis = {page === 5} />
    </>
  )
}

function Text6(props)
{


  const TitleStyles = useSpring({
    from: {opacity: 0, textAlign: "left", marginTop: "0vh", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.6vmax"},
    to: {opacity: (props.vis) ? 1 : 0, textAlign: "left", marginTop: "0vh", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.6vmax"},
    config: {duration: (props.vis) ? 800 : 400},
    delay: (props.vis) ? 0 : 200
  })

  const TextStyles2 = useSpring({
    from: {fontSize: "1.5vmax", width: "35vmax", marginLeft: "0vmax", opacity: 0, marginTop: "0vmax"},
    to: {fontSize: "1.5vmax", width: "35vmax", marginLeft: "0vmax", opacity: (props.vis) ? 1:0, textAlign: "left", marginTop: "0vmax"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 1000 : 200
  })

  const ButtonStyles = useSpring({
    from: {width: "15vmax", marginLeft: "0vmax", opacity: 0, cursor: "pointer"},
    to: {width: "15vmax", marginLeft: "0vmax", opacity: (props.vis) ? 1 : 0, cursor: "pointer"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 1600 : 200
  });

  const IMGStyles1 = useSpring({
    from: {width: "5vmax", cursor: "pointer", opacity: 0},
    to: {width: "5vmax", cursor: "pointer", opacity: (props.vis) ? 1 : 0},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 2200 : 200
  })

  const IMGStyles2 = useSpring({
    from: {width: "3vmax", cursor: "pointer", opacity: 0, height: "2.9vmax", marginTop: "0.1vmax"},
    to: {width: "3vmax", cursor: "pointer", opacity: (props.vis) ? 1 : 0,  height: "2.9vmax", marginTop: "0.1vmax"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 2800 : 200
  })

  const Filter = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ? 1 : 0},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 2800 : 200

  })

  const FAQStyle = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ? 1 : 0, width: "20vmax"},
    config: {duration: (props.vis) ? 800 : 0, width: "20vmax"},
    delay: (props.vis) ? 3200 : 200

  })

  return(
    <>
    <div style = {{marginTop: "705vh"}}/>

    <QR>
      <div style = {{marginLeft: "20vmax"}}>
        <Tilt 
        className = {style_card.Tilt}
        perspective={1000}
        glareEnable={false}
        glareMaxOpacity = {0.2}
        scale = {1.02}
        gyroscope={false}
        glareBorderRadius = "20px"
        style = {{width: "30vmax",background: "none"}}>
          
          <div style = {{
            display: "flex",
            flexDirection: "column",
            transformStyle: "preserve-3d", 
            width: "33vmax",
            marginLeft: "0vw"}}
            >
              <TagLine
              as = {animated.h1}
              className = {`${style_card.ZT2} + ' ' + fontLink`} 
              style = {TitleStyles}
              ><span style = {{color: "white"}}>Join the VertigoDAO Community</span>
              </TagLine>

              <PgStyled as = {animated.p} className = {style_card.ZT} style = {TextStyles2}>
                
                <b>Become an early adopter! </b>  Don't miss out on the lastest news, opportunities, and future token airdrop events!

              </PgStyled>

              <div style = {{display: "flex", flexDirection: "row", transformStyle: "preserve-3d"}}>
                <animated.button className={`${style_card.ZT} + ' ' + ${style_glow.glowingButton}`} style = {ButtonStyles}>Get Whitelisted</animated.button>
                <animated.img src = {telegram} className = {style_card.ZT}  alt = "telegram" style = {IMGStyles1} onClick = {() => window.open("https://t.me/+PoJAgEc_uJ05NDkx")}/>
                <animated.img src = {discord} className = {style_card.ZT} alt = "discord" style = {IMGStyles2} onClick = {() => window.open("https://discord.gg/PrtYEWSeMR")}/>
              </div>
          </div>
        </Tilt>
        </div>
      </QR>
    </>
  )
}


function Text5(props)
{

  const Top = useSpring({
    from: {marginTop: "20vh", fontSize: "1.2vmax", color: "#ababab", opacity: 0},
    to: {marginTop: "20vh", fontSize: "1.2vmax", color: "#ababab", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: 0
  })

  const BG = useSpring({
    from: {width: "100vw", height: "300vmax", marginTop: "470vh", background: "black", position: "absolute", opacity: 0, zIndex: -5},
    to: {width: "100vw", height: "300vmax", marginTop: "470vh", background: "black", position: "absolute", opacity: (props.vis) ?  0.5 :0, zIndex: -5 }, 
    config: {duration: (props.vis) ? 1400 : 200},
    delay: (props.vis) ? 0 : 200
  })

  const TitleStyles = useSpring({
    from: {opacity: 0, textAlign: "left", marginTop: "0vh", fontSize: "2.8vmax", width: "40vmax", marginLeft: "0.6vmax"},
    to: {opacity: (props.vis) ? 1 : 0, textAlign: "left", marginTop: "0vh", fontSize: "2.8vmax", width: "40vmax", marginLeft: "0.6vmax"},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 400 : 200
  })

  const TopText = useSpring({
    from: {width: "50vw", color: "#dedede", marginTop: "-1vmax", opacity: 0},
    to: {width: "50vw", color: "#dedede", marginTop: "-1vmax", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 800 : 200
  })

  const T1 = useSpring({
    from: {marginLeft: "0.4vmax", opacity: 0},
    to: {marginLeft: "0.4vmax", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 1200 : 200
  })

  const T2 = useSpring({
    from: {marginLeft: "0.4vmax", opacity: 0},
    to: {marginLeft: "0.4vmax", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 1600 : 200
  })

  const P1 = useSpring({
    from: {color: "#dedede", marginTop: "-0.6vmax", opacity: 0},
    to: {color: "#dedede", marginTop: "-0.6vmax", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 2000 : 200
  })

  const P2 = useSpring({
    from: {color: "#dedede", marginTop: "-0.6vmax", opacity: 0},
    to: {color: "#dedede", marginTop: "-0.6vmax", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: (props.vis) ? 2400 : 200
  })

  const TGuideS = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ?  1 :0, marginLeft: "-0vw", display: "flex", flexDirection: "column", marginTop: "4vmax"},
    config: {duration: (props.vis) ? 800 : 200, marginLeft: "-0vw", display: "flex", flexDirection: "column", marginTop: "4vmax"},
    delay: (props.vis) ? 2800 : 200
  })

  const t = useSpring({
    from: {},
    to: {},
    config: {},
    delay: 0
  })






  return(
    <>
      <animated.div style = {BG} />
      <Left style = {{marginTop: "570vh",
        marginLeft: "10vmax",
        justifyContent: "left", display: "flex", textAlign: "left", flexDirection: "column", alignItems: "left"}}>

      <Tilt 
      className = {style_card.Tilt}
      perspective={1000}
      glareEnable={false}
      glareMaxOpacity = {0.2}
      scale = {1.02}
      gyroscope={false}
      glareBorderRadius = "20px"
      style = {{width: "50vmax"}}
      >
          <div style = {{transformStyle: "preserve-3d"}}>
            <TagLine style = {Top} as = {animated.h1}>Understanding VertigoDAO</TagLine>
            <TagLine
            as = {animated.h1}
            className = {`${style_card.ZT2} + ' ' + fontLink`}
            style = {TitleStyles}
            >Web3 Without Limits</TagLine>

            <PgStyled style = {TopText} as = {animated.p}>
              
              The VertigoDAO ecosystem is a modular system of protocols on and off the blockchain, synergising 
              to provide a next-generation DeFi platform driven by digital engagement and free from many 
              traditional Web3 limitations.  Our technology is open to the public, allowing anybody to 
              empower their content through Web3 integration and expand their digital presence in a community-governed DeFi ecosystem
              spanning across the web.
              

            </PgStyled>
          </div>
        </Tilt>


            <QR >

              <Tilt 
                  className = {style_card.Tilt}
                  perspective={1000}
                  glareEnable={false}
                  glareMaxOpacity = {0.2}
                  scale = {1.02}
                  gyroscope={false}
                  glareBorderRadius = "20px"
                >
                  <div style = {{display: "flex", flexDirection: "column", marginTop: "3vmax", transformStyle: "preserve-3d"}}>

                    <TagLine className = {`${style_card.ZT2} + ' ' + fontLink`} as = {animated.h1} style = {T1}>Hydra Storage System</TagLine>

                    <PgStyled  as = {animated.p} style = {P1}>

                    Separates data from contract logic while providing
                      numerous optimizations related to efficiency and post-deployment versatility.


                    </PgStyled>

                  </div>
                </Tilt>
                <Tilt 
                  className = {style_card.Tilt}
                  perspective={1000}
                  glareEnable={false}
                  glareMaxOpacity = {0.2}
                  scale = {1.02}
                  gyroscope={false}
                  glareBorderRadius = "20px"
                >
                  <div style = {{display: "flex", flexDirection: "column", marginLeft: "4vmax", marginTop: "3vmax", transformStyle: "preserve-3d"}}>

                    <TagLine className = {`${style_card.ZT2} + ' ' + fontLink`} as = {animated.h1} style = {T2}>Integration Suite</TagLine>

                    <PgStyled as = {animated.p} style = {P2}>

                      Tools on and off the blockchain that provide open-ended integration and 
                      simple pre-configured routines for basic tasks such as rewarding social media engagement.


                    </PgStyled>

                  </div>
              </Tilt>
              <animated.div style = {TGuideS}>
                <Canvas style = {{height: "20vmax", cursor: "pointer", background: "none", width: "8vmax"}} onClick = {() => window.open("https://drive.google.com/file/d/1BWgp6Gbu0VOzrMHyG00_pg7pFA2_Uls6/view?usp=sharing")}>
                  <Model scale = {0.5}/>
                </Canvas>
                <QR style = {{marginTop: "-7vmax", marginLeft: "0vmax"}}>
                  <PgStyled className = "fontLink" style = {{fontSize: "1vmax"}}><b>Platform Overview</b></PgStyled>
                </QR>
              </animated.div>
            </QR>


      </Left> 
    </>
  )
}



function Text4(props)
{
  const Top = useSpring({
    from: {marginTop: "20vh", fontSize: "1.2vmax", color: "#ababab", opacity: 0},
    to: {marginTop: "20vh", fontSize: "1.2vmax", color: "#ababab", opacity: (props.vis) ?  1 :0},
    config: {duration: (props.vis) ? 800 : 200},
    delay: 0
  })

  const TitleStyles = useSpring({
    from: {opacity: 0, textAlign: "left", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.4vmax"},
    to: {opacity: (props.vis) ? 1 : 0, textAlign: "left", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.4vmax", marginTop: "0vh"},
    config: {duration: (props.vis) ? 800 : 400},
    delay: (props.vis) ? 400 : 200
  })

  const TextStyles2 = useSpring({
    from: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: 0},
    to: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: (props.vis) ? 1:0, textAlign: "left"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 800 : 200
  })

  const TextStyles3 = useSpring({
    from: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: 0, color: "#dedede"},
    to: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: (props.vis) ? 1:0, textAlign: "left", color: "#dedede"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 1200 : 200
  })

  const TextStyles4 = useSpring({
    from: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: 0, color: "#dedede"},
    to: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: (props.vis) ? 1:0, textAlign: "left", color: "#dedede"},
    config: {duration: (props.vis) ? 800 : 0},
    delay: (props.vis) ? 1600 : 200
  })

  const style3 = useSpring({
    from: {opacity: 0},
    to: { opacity: (props.vis) ? 1:0},
    config: {duration: (props.vis) ? 800:0},
    delay: (props.vis) ? 2000:200
  })




  return(
    <>

      <Left style = {{marginTop: "410vh",
        marginLeft: "-22vmax",
        justifyContent: "left", display: "flex", textAlign: "left", alignItems: "left"}}>
        <div style ={{display: "flex", flexDirection: "row", marginLeft: "32.4vmax"}}>
            <Tilt 
              className = {style_card.Tilt}
              perspective={1000}
              glareEnable={false}
              glareMaxOpacity = {0.2}
              scale = {1.02}
              gyroscope={false}
              glareBorderRadius = "20px"
              >
              <div style = {{transformStyle: "preserve-3d"}}>
                <TagLine as = {animated.h1} style = {Top}>Central Goals</TagLine>
                <TagLine
                as = {animated.h1}
                className = {`${style_card.ZT2} + ' ' + fontLink`} 
                style = {TitleStyles}
                ><span style = {{color: "white"}}>

                  Democratizing Digital Engagement

                </span>
                </TagLine>
                    <PgStyled as = {animated.p} className = "titleFont" style = {TextStyles2}>
                      <span style = {{color: "#adadad"}}>
                      
                        Our ecosystem empowers digital content while fostering meaningful growth and participation.
                      
                      </span>
                    </PgStyled>

                    <PgStyled as = {animated.p} className = "titleFont" style = {TextStyles3}>
                    <br/>
                      <b style = {{color: "white"}}> </b> <br/><br/>
                        The internet has endless users, but their interest remains fleeting and elusive.  VertigoDAO
                        provides an accessible and consistent way to get your content seen and used in practice.
                        
                      <br/><br/>
                      <animated.span style = {TextStyles4}>
                      <b style = {{color: "white"}}>It's Really Simple</b><br/><br/>
                      No need to worry about mastering all of our technology.  What matters is that 
                      you can connect reward distribution to your existing content, or use pre-built systems covering
                      common goals such as social media engagement.
                      </animated.span>
                  </PgStyled>
                </div>
            </Tilt>
            <ConGuide as = {animated.img}  src = {contributorGuideIMG} style = {style3} alt = "basic diagram of the vertigodao ecosystem" onClick = {() => window.open("https://drive.google.com/file/d/171i_NseTd6qbB_4xwgERoiuufvmiE2xZ/view?usp=sharing")} />
          </div>
      </Left>
    </>
  )
}


function Text3(props)
{


  const TitleStyles = useSpring({
    from: {opacity: 0, fontSize: "2.2vmax", width: "40vmax", transformStyle: "preserve-3d"},
    to: {opacity: (props.vis) ? 1 : 0, fontSize: "2.2vmax", width: "40vmax", transformStyle: "preserve-3d"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: 0
  })

  const TextStyles2 = useSpring({
    from: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: 0, color: "#adadad"},
    to: {fontSize: "1.3vmax", width: "35vmax", marginTop: "0vh", opacity: (props.vis) ? 1:0, textAlign: "left", color: "#adadad"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: (props.vis) ? 400 : 100
  })

  const M = useSpring({
    from: {opacity : 0 },
    to: { opacity : (props.vis) ? 1 : 0, marginLeft: "-10vmax"},
    config: {duration: (props.vis) ? 800 : 100, marginLeft: "-10vmax", marginTop: "5vmax"},
    delay: (props.vis) ? 1600 : 0
  })
  const A = useSpring({
    from: {opacity : 0, color: "#dedede" },
    to: { opacity : (props.vis) ? 1 : 0, fontSize: "1.2vmax", color: "#dedede"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: (props.vis) ? 800 : 0
  })

  const A2 = useSpring({
    from: {opacity : 0, color: "white" },
    to: { opacity : (props.vis) ? 1 : 0, fontSize: "1.2vmax", color: "white"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: (props.vis) ? 800 : 0
  })

  const B = useSpring({
    from: {opacity : 0 , color: "#dedede"},
    to: { opacity : (props.vis) ? 1 : 0, fontSize: "1.2vmax", color: "#dedede"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: (props.vis) ? 1200 : 0
  })

  const B2 = useSpring({
    from: {opacity : 0, color: "white" },
    to: { opacity : (props.vis) ? 1 : 0, fontSize: "1.2vmax", color: "white"},
    config: {duration: (props.vis) ? 800 : 100},
    delay: (props.vis) ? 1200 : 0
  })

  const imgStyle = useSpring({
    from: { opacity: 0},
    to: {opacity : (props.vis) ? 1 : 0, position: "absolute",marginTop: "12vmax", marginLeft: "43vmax", cursor: "pointer", height: "25vmax"},
    config: {duration: (props.vis) ? 800 : 100, position: "absolute",marginTop: "12vmax", marginLeft: "43vmax", cursor: "pointer", height: "25vmax"},
    delay: (props.vis) ? 1600 : 0

  })

  return(
    <Row>
      <CenterPush style = {{marginTop: "300vh", marginLeft: "-14.4vmax"}}>
        <div style = {{display: "flex", flexDirection: "row"}}>
          <Tilt 
          className = {style_card.Tilt}
          perspective={1000}
          glareEnable={false}
          glareMaxOpacity = {0.2}
          scale = {1.02}
          gyroscope={false}
          glareBorderRadius = "20px"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}>
            <div style = {{ display: "flex", flexDirection: "column", transformStyle: "preserve-3d",  marginTop: "20vh", marginLeft: "-10vmax", cursor: 'grab', zIndex: 5}}>
                <TagLine
                as = {animated.h1}
                className =  {`${style_card.ZT2} + ' ' + fontLink`}
                style = {TitleStyles}
                ><span style = {{color: "white", transformStyle: "preserve-3d", marginLeft: "0.6vmax"}} className={style_card.ZT2}>
                  DeFi Without Limits
                </span>
                </TagLine>
                <PgStyled as = {animated.p} className = "titleFont" style = {TextStyles2}>
                  
                  VertigoDAO is an advanced DeFi ecosystem that rewards users for engaging with its own linked network of Web2 and Web3 content.

                </PgStyled>

                <div style = {{display: "flex", flexDirection: "row", marginTop: "0vmax"}}>
                  <div style = {{display: "flex", flexDirection: "column", marginLeft: "0vmax", marginTop: "-0.8vmax"}}>
                  <PgStyled className = "titleFont" style = {{fontSize: "1.5vmax", width: "30vmax", marginTop: "2vh", opacity: 1, textAlign: "left"}}>
                      <animated.b  style = {A2}>Accessible Blockchain Progression</animated.b>
                    </PgStyled>
                    <PgStyled className = "titleFont" style = {{fontSize: "1.5vmax", width: "35vmax", marginTop: "-1.5vmax", opacity: 1, textAlign: "left"}}>

                      <animated.span style = {A}>

                      Users build their status on the platform through engagement and by contributing content to the VertigoDAO integrated network.  

                      </animated.span>
                    </PgStyled>
                    <PgStyled className = "titleFont" style = {{fontSize: "1.5vmax", width: "25vmax", marginTop: "2vh", opacity: 1, textAlign: "left"}}>
                      <animated.b  style = {B2}>Open and Decentralized Ecosystem</animated.b>
                    </PgStyled>
                    <PgStyled className = "titleFont" style = {{fontSize: "1.5vmax", width: "35vmax", marginTop: "-1.5vmax", opacity: 1, textAlign: "left"}}>

                      <animated.span style = {B}>
                        
                      VertigoDAO can provide integrated DeFi rewards for any event you can track. Anyone can become a content contributor and gain promotion on the central platform pending community approval.

                      </animated.span>
                    </PgStyled>
                  </div>
                </div>
                </div>
              </Tilt>
            <animated.img src = {network} style = {imgStyle}/>
          </div>
      </CenterPush>

    </Row>
  )
}


export function LagginBox()
{
  const [toggled, setToggled] = useState(true)

  return(
    <LaggingBox>
      <span onClick = {() => {setToggled(!toggled)}} />
      <p className = "nunitosans"><strong>Tip</strong>&nbsp; Decrease your graphics setting to increase framerate!</p>
    </LaggingBox>
  )
}


function TextBoxLocked(props) 
{
  let ret = ""


  const TopTextStyles = useSpring({
    from: {fontSize: "3.2vmin", opacity: 0},
    to: {fontSize: "3.2vmin", opacity: 1},
    config: {duration: 800},
    delay: 1400
  })
  
  const pgStyles = useSpring({
    from: {opacity: 0, fontSize: "2.4vmin", marginLeft: "1vmax", color: "#dedede"},
    to: {opacity: 1, fontSize: "2.4vmin", marginLeft: "1vmax", color: "#dedede"},
    config: {duration: 800},
    delay: 2000
  })
  const pgStyles2 = useSpring({
    from: {opacity: 0, fontSize: "2.4vmin", marginLeft: "1vmax", color: "#dedede"},
    to: {opacity: 1, fontSize: "2.4vmin", marginLeft: "1vmax", color: "#dedede"},
    config: {duration: 800},
    delay: 2600
  })


  const buttonStyles = useSpring({
    from: {width: "24vw", opacity: 0},
    to: {cursor: "pointer", width: "24vw", opacity: 1, marginTop: "0.5vmax"},
    config: {duration: 800},
    delay: 3000
  })

  const icon1 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 800},
    delay: 1800
  })

  const icon2 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 800},
    delay: 2400
  })

  return (
    <ZPush style = {{marginLeft: "10.6vmax", opacity: 1, marginTop: "43vmin"}}>

        <Tilt 
          className = {style_card.Tilt}
          perspective={1000}
          glareEnable={false}
          glareMaxOpacity = {0.2}
          scale = {1.02}
          gyroscope={false}
          glareBorderRadius = "20px"
        >
          <div style = {{display: "flex", flexDirection: 'column', transformStyle: "preserve-3d"}}>
            <PgStyled className = {`${style_card.ZT2} + ' ' + fontLink`} style = {{width: "20vw"}}>
                <animated.b  style = {TopTextStyles}>The Blockchain Ecosystem That Works For You</animated.b> 
            </PgStyled>

            <PgStyled className = 'titleFont' style = {{width: "24vw", background: "none", marginTop: "-0.3vmax"}}>
              
              <span style = {{display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <animated.span style = {icon1}>
                  <AiOutlineUser style = {{fontSize: "1.5vmax", color: "#adadad"}}/>
                </animated.span>

                <animated.span style = {pgStyles}>

                  Become a DeFi tycoon by engaging with content across the web.

                </animated.span>
              </span>
              <br/><br/>
              <span style = {{display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <animated.span style = {icon2}>
                  <BsBriefcase style = {{fontSize: "1.5vmax", color: "#adadad"}}/>
                </animated.span>
                <animated.span style = {pgStyles2}>                       
                Drive users to your Web2 or Web3 content by linking with the
                VertigoDAO network.
                </animated.span><br/>
              </span>
            </PgStyled>

            <animated.button 
            className = "ConnectButton"
            style = {buttonStyles} >

            <a 
            href = "https://t.me/+PoJAgEc_uJ05NDkx" 
            className = "orbitron"
            target = "_blank"
            rel = "noreferrer"
            style = {{textDecoration: "none", color: "white"}}>Join Our Telegram</a></animated.button>

        </div>
      </Tilt>

    </ZPush>
  );

}

function TagLine2(props)
{


  const TitleStyles = useSpring({
    from: {opacity: 0, textAlign: "left", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.6vmax"},
    to: {opacity: (props.vis) ? 1 : 0, textAlign: "left", fontSize: "2.2vmax", width: "35vmax", marginLeft: "0.6vmax"},
    config: {duration: (props.vis) ? 800 : 400},
    delay: 0
  })

  const BStyle = useSpring({
    from: {opacity : 0, color: "#adadad", fontSize: "1.2vmax" },
    to: { opacity : (props.vis) ? 1 : 0, fontSize: '1.2vmax'},
    config: {duration: 800},
    delay: (props.vis) ? 800 : 0
  })


  const CStyle = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ? 1:0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    config: {duration: (props.vis) ? 800 : 0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    delay: (props.vis) ? 1200 : 0

  })

  const DStyle = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ? 1:0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    config: {duration: (props.vis) ? 800 : 0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    delay: (props.vis) ? 1600 : 0

  })

  const EStyle = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.vis) ? 1:0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    config: {duration: (props.vis) ? 800 : 0, display: "flex", flexDirection: "row", marginTop: "1vmax", transformStyle: "preserve-3d"},
    delay: (props.vis) ? 2000 : 0

  })


  return(
    <>
      <Left style = {{marginTop: "160vh",
        marginLeft: "-19.4vw",
        justifyContent: "left", display: "flex", textAlign: "center", alignItems: "center"}}>
          <Tilt 
          className = {style_card.Tilt}
          perspective={1000}
          glareEnable={false}
          glareMaxOpacity = {0.2}
          scale = {1.02}
          gyroscope={false}
          glareBorderRadius = "20px"
          >
            <div style = {{display: "flex", flexDirection: "column", marginTop: "20vh", transformStyle: "preserve-3d"}}>
              <TagLine
              as = {animated.h1}
              className = {`${style_card.ZT2} + ' ' + fontLink`}
              style = {TitleStyles}
              ><span style = {{color: "white"}}>Unite the Web Around Your Goals</span>
              </TagLine>
              

              <animated.div style = {CStyle}>
                  <PgStyled className = {`${style_card.ZT} + ' ' + titleFont`} style = {{ fontSize: "1.4vmax", width: "35vmax", marginTop: "-2vh", marginLeft: "0vmax", textAlign: "left", color: "#dedede"}}>
                      The digital landscape is more populated than ever, yet it remains difficult to convert passive scrolling to active engagement.
                  </PgStyled>
              </animated.div>

              <animated.div style = {DStyle}>
                  <PgStyled className = {`${style_card.ZT} + ' ' + titleFont`} style = {{ fontSize: "1.4vmax", width: "35vmax", marginTop: "-2vh", marginLeft: "0vmax", textAlign: "left",  color: "#dedede"}}>
                      Users are encouraged to participate, but rarely see an enticing reason to do so.
                  </PgStyled>
              </animated.div>


              <animated.div style = {EStyle}>
                  <PgStyled className = {`${style_card.ZT} + ' ' + titleFont`} style = {{ fontSize: "1.4vmax", width: "35vmax", marginTop: "-2vh", marginLeft: "0vmax", textAlign: "left",  color: "#dedede"}}>
                  What if we used DeFi to bridge the gap between content creators and users, 
                  aligning their interests in a concrete and consistent way?
                  </PgStyled>
              </animated.div>
            </div>

        </Tilt>
      </Left>
    </>
  )
}

/*
  * permanent passive token income, 

*/

function TagLine3(props)
{
  const TitleStyles = useSpring({
    from: {marginTop: "20vh", fontSize: "7vmin", textAlign: "left", opacity: 0},
    to: {marginTop: "20vh", fontSize: "7vmin", textAlign: "left", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 1200 : 200},
    delay: (props.pos >= 2.8) ? 1100 : 0
  })

  const TextStyles = useSpring({
    from: {fontSize: "3.5vmin", width: "30vw", textAlign: "left", marginTop: "-4vh", opacity: 0},
    to: {fontSize: "3.5vmin", width: "30vw", textAlign: "left", marginTop: "-4vh", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 800 : 200},
    delay: (props.pos >= 2.8) ? 1300 : 125
  }) 

  const TextStylesBottom = useSpring({
    from: {fontSize: "2.5vmin", width: "45vw", textAlign: "left", marginTop: "0vh", opacity: 0},
    to: {fontSize: "3vmin", width: "45vw", textAlign: "left", marginTop: "0vh", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 800 : 400},
    delay: (props.pos >= 2.8) ? 1500 : 125
  }) 
  const DEStyles = useSpring({
    from: {fontSize: "2.5vmin", width: "40vw", textAlign: "left", opacity: 0},
    to: {fontSize: "2.5vmin", width: "40vw", textAlign: "left", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 1500 : 400},
    delay: (props.pos >= 2.8) ? 2100 : 125
  }) 
  const VTStyles = useSpring({
    from: {fontSize: "2.5vmin", width: "40vw", textAlign: "left", opacity: 0},
    to: {fontSize: "2.5vmin", width: "40vw", textAlign: "left", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 1500 : 400},
    delay: (props.pos >= 2.8) ? 2600 : 125
  }) 

  const Card1Style = useSpring({
    from: {marginTop: "15vh", marginLeft: "100vw", opacity: 0},
    to: {marginTop: "15vh", marginLeft: (props.pos >= 2.8) ? "5vw" : "100vw", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 900 : 400},
    delay: 0
  })

  const Card2Style = useSpring({
    from: {marginTop: "15vh", marginLeft: "100vw", opacity: 0},
    to: {marginTop: "15vh", marginLeft: (props.pos >= 2.8) ? "11vw" : "100vw", opacity: (props.pos >= 2.8) ? 1:0},
    config: {duration: (props.pos >= 2.8) ? 900 : 400},
    delay: 0
  })
//Acquire &amp; Upgrade<br/> <span style = {{color: "white"}}>Virtual Real Estate.</span>
  return(
    <>
      <CenterPush style = {{marginTop: "300vh", zIndex: 1, opacity: (1 - ((props.pos - 3.3) / (3.6 - 3.3)))}}>
        <Row>
          <animated.div style = {Card2Style}>
            <CardPicker index = {3} isVCash = {false} />
          </animated.div>
          <animated.div style = {Card1Style}>
            <CardPicker index = {0} isVCash = {true} />
          </animated.div>
          <div style = {{marginLeft: "4vw", marginTop: "-7vh"}}>

            <TagLine 
            as = {animated.h1}
            className = "fontLink" 
            style = {TitleStyles}
            >Acquire &amp; Upgrade<br/> <span style = {{color: "white"}}>Virtual Real Estate.</span>
            </TagLine>

            <PgStyled 
            as = {animated.p}
            className = "titleFont"
            style = {TextStyles}><b  style = {{color: "#c3bdfc"}}>Secure a lifetime of Dark Energy income with Property NFTs.</b><br/>  
            <animated.span style = {TextStylesBottom}><br/>Build Dark Energy income to boost your token-earning potential!</animated.span>
            </PgStyled>
            <Row style = {{ marginTop: "0vh" }} className = "titleFont">
              <PgStyled>
                <animated.span className = "fontLink" style = {DEStyles}><b style = {{color: "#ac74d6", fontSize: "3.2vh"}}>Dark Energy Property</b><br/> Income boost, purchased<br/> with Dark Energy.</animated.span>
              </PgStyled>
              <PgStyled>
                <animated.span className = "fontLink" style = {VTStyles}><b style = {{color: "#eba134", fontSize: "3.2vh"}}>Vertigo Token Property</b><br/> Income multiplier, purchased with Vertigo Tokens.</animated.span>
              </PgStyled>
            </Row>
          </div>
        </Row>
      </CenterPush>
    </>
  )
}

function TagLine4(props)
{
  const TitleStyles = useSpring({
    from: {opacity: 0, textAlign: "left", marginTop: "20vh", fontSize: "6.5vmin", width: "50vw", marginLeft: "-30vw"},
    to: {opacity: (props.pos > 4.8) ? 1 : 0, textAlign: "left", marginTop: "20vh", fontSize: "6.5vmin", width: "50vw", marginLeft: (props.pos > 4.8) ? "0vw" : "-30vw"},
    config: {duration: (props.pos > 4.8) ? 800 : 400},
    delay: (props.pos > 4.8) ? 0 : 200
  })

  const TextStyles2 = useSpring({
    from: {fontSize: "3vmin", width: "40vw", marginTop: "-3vh", marginLeft: "0vw", opacity: 0},
    to: {fontSize: "3vmin", width: "40vw", marginTop: "-3vh", marginLeft: "0vw", opacity: (props.pos > 4.8) ? 1:0},
    config: {duration: (props.pos > 4.8) ? 800 : 0},
    delay: (props.pos > 4.8) ? 1000 : 200
  })

  const TextStyles3 = useSpring({
    from: {fontSize: "2.8vmin", width: "30vw", marginTop: "-2vh", marginLeft: "0vw", opacity: 0},
    to: {fontSize: "2.8vmin", width: "30vw", marginTop: "-2vh", marginLeft: "0vw", opacity: (props.pos > 4.8) ? 1:0},
    config: {duration: (props.pos > 4.8) ? 800 : 0},
    delay: (props.pos > 4.8) ? 1500 : 200
  })
  const TextStyles4 = useSpring({
    from: {fontSize: "2.8vmin", width: "30vw", marginTop: "-40vh", marginLeft: "0vw", opacity: 0},
    to: {fontSize: "2.8vmin", width: "30vw", marginTop: "-40vh", marginLeft: "0vw", opacity: (props.pos > 4.8) ? 1:0, color: "white"},
    config: {duration: (props.pos > 4.8) ? 800 : 0},
    delay: (props.pos > 4.8) ? 2000 : 200
  })
  const TextStyles5 = useSpring({
    from: {fontSize: "2.8vmin", width: "30vw", marginTop: "-40vh", marginLeft: "0vw", opacity: 0},
    to: {fontSize: "2.8vmin", width: "30vw", marginTop: "-40vh", marginLeft: "0vw", opacity: (props.pos > 4.8) ? 1:0, color: "white"},
    config: {duration: (props.pos > 4.8) ? 800 : 0},
    delay: (props.pos > 4.8) ? 2500 : 200
  })
  //opacity: (1 - ((props.pos - 4.1) / (4.7 - 4.1))),
  return(
    <>
      <Left style = {{marginTop: "480vh",
        opacity: (1 - ((props.pos - 5.6) / (6.1 - 5.6))),
        marginLeft: "10vw",
        justifyContent: "left"}}>

        <TagLine
        as = {animated.h1}
        className = "fontLink" 
        style = {TitleStyles}
        ><span style = {{color: "white"}}>Bridge To The Blockchain</span>
        </TagLine>
            <PgStyled as = {animated.p} className = "titleFont" style = {TextStyles2}>
              <a style = {{color: "#c3bdfc"}}>
              VertigoDAO features a modular design, simplifying integration while providing support for
              entities across the digital space.</a>
               <br/> 
              <animated.span style = {TextStyles3}><br/>
              
              <b className = "fontLink">Integrated Rewards </b> 

              &nbsp;Partners gain access to our incentive structure, allowing them 
              to drive user interest from the blockchain.
              </animated.span>

              <br/>

              <animated.span style = {TextStyles4}><br/><b className = "fontLink">Loose Integration </b>
              &nbsp;Linked entities do not need to modify their existing platform, making it easy
              to leverage blockchain for additional traffic and utility.
              </animated.span>

              <animated.span style = {TextStyles5}><br/><br/><b className = "fontLink">Checks And Balances </b> 
              &nbsp;Most ecosystem upkeep is performed automatically, greatly reducing 
              administrative powers. 
              </animated.span>
            </PgStyled>
      </Left>
    </>
  )
}


function CTA(props)
{
  const TitleStyles = useSpring({
    from: {fontSize: "9vmin", marginBottom: "2vh", justifyContent: "left", textAlign: 'left', opacity: 0, color: "white"},
    to:   {fontSize: "9vmin", marginBottom: "2vh", justifyContent: "left", textAlign: 'left', opacity: (props.pos >= 8.3) ? 1:0, color: "white"},
    config: {duration: (props.pos >= 8.3) ? 1800 : 200},
    delay: 0
  })

  const AccessStyles = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 8.3) ? 1:0, color: "yellow"},
    config: {duration: (props.pos >= 8.3) ? 800 : 200},
    delay: (props.pos >= 8.3) ? 300 : 0
  })

  const AccessStyles2 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 8.3) ? 1:0, fontSize: "3vmin"},
    config: {duration: (props.pos >= 8.3) ? 800 : 200},
    delay: (props.pos >= 8.3) ? 600:0
  })

  
  const ButtonStyles1 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 8.3) ? 1:0, background: "none", marginTop: "4vh"},
    config: {duration: (props.pos >= 8.3) ? 2800 : 200},
    delay: (props.pos >= 8.3) ?900:0
  })

  const ButtonStyles2 = useSpring({
    from: {opacity: 0, marginLeft: "2vw"},
    to: {opacity: (props.pos >= 8.3) ? 1:0, marginLeft: "2vw", marginTop: "4vh"},
    config: {duration: (props.pos >= 8.3) ? 2800 : 200},
    delay: (props.pos >= 8.3) ?1200:0
  })

  const IMGStyles = useSpring({
    from: {opacity: 0, marginLeft: "49vw", marginTop: "-51vh", width: "30vw"},
    to: {opacity: (props.pos >= 8.3) ? 1:0, marginLeft: "49vw", marginTop: "-51vh", width: "30vw"},
    config: {duration: (props.pos >= 8.3) ? 1800 : 200},
    delay: (props.pos >= 8.3) ?1500:0
  })
  

  return(
    <Left style = {{marginTop: "800vh", opacity: (1 - ((props.pos - 8.5) / (9.1 - 8.5))), marginLeft: "0vw", alignItems: "center", justifyContent: "center"}}>
      <TagLine as = {animated.div} className = "fontLink" 
      style = {TitleStyles}
      ><strong>Get Whitelisted Now</strong>
      </TagLine>
      <TagLine className = "titleFont"
      style = {{fontSize: "4vmin", textAlign:"center"}}>
        <animated.span className = "fontLink" style = {AccessStyles}>Limited Tier II Profiles are available!</animated.span> <br/><br/>
        <animated.span className = "titleFont" style = {AccessStyles2}>Join our telegram community and enter your username<br/> and ETH address on the whitelist form.</animated.span> 
      </TagLine>
      <Row style = {{alignItems: "center", justifyContent: "center"}}>
        <animated.a href="#" className="btn2" style = {ButtonStyles1}><span>Telegram</span></animated.a>
        <animated.a href="#" className="btn2" style = {ButtonStyles2}><span>Whitelist</span></animated.a>
      </Row>

    </Left>
  )
}

function VertDescriptor(props)
{

  const TitleStyles = useSpring({
    from: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "center", opacity: 0},
    to: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "center", opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: 400
  })

  const SpanStyle1 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0, fontSize: "2.5vh"},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 600 : 0
  })

  const SpanStyle2 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 800 : 0
  })

  const SpanStyle3 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 1000 : 0
  })

  const SpanStyle4 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 1200 : 0
  })

  const SpanStyle5 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 1400 : 0
  })

  const SpanStyle6 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 800 : 200},
    delay: (props.pos >= 9.1) ? 1600 : 0
  })

  const VIDStyles = useSpring({
    from: {position: "absolute", height: "34vmax", marginLeft: "-76vmax", marginTop: "15vmax", opacity: 0},
    to: {position: "absolute", height: "34vmax", marginLeft: "-76vmax", marginTop: "15vmax", opacity: (props.pos >= 9.1) ? 1:0},
    config: {duration: (props.pos >= 9.1) ? 1800 : 200},
    delay: (props.pos >= 9.1) ? 0 : 0
  })

  const StakeTitleStyles = useSpring({
    from: {fontSize: "6vmin", width: "45vw", color: "white", textAlign: "left", opacity: 0},
    to: {fontSize: "6vmin", width: "45vw", color: "white", textAlign: "left", opacity: (props.pos >= 10) ? 1:0},
    config: {duration: (props.pos >= 10) ? 800 : 200},
    delay: 0
  })

  const StakeLongGameStyles = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 10) ? 1:0, fontSize: "4vmin", color: "#c3bdfc"},
    config: {duration: (props.pos >= 10) ? 800 : 200},
    delay: (props.pos >= 10) ? 300 : 0
  })

  const StakeTextStyles = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos >= 10) ? 1:0},
    config: {duration: (props.pos >= 10) ? 800 : 200},
    delay: (props.pos >= 10) ? 600 : 0
  })

  const StakeImageStyles = useSpring({
    from: {opacity: 0, position: "absolute", marginLeft: "91vw", marginTop: "2vh", width: "18vw"},
    to: {opacity: (props.pos >= 10) ? 1:0, position: "absolute", marginLeft: "91vw", marginTop: "2vh", width: "18vw"},
    config: {duration: (props.pos >= 10) ? 800 : 200},
    delay: (props.pos >= 10) ? 900 : 0
  })


  return(
    <>
      <CenterPush style = {{marginTop: "875vh", marginLeft: "10vw", opacity: (1 - ((props.pos - 9.5) / (10 - 9.5)))}}>
        <animated.div style = {VIDStyles}>
          <Canvas>
            <Model scale = {0.4} rotation = {[0.4,0,0]}/>
          </Canvas>
        </animated.div>
        <TagLine as = {animated.div} className = "fontLink" style = {TitleStyles}>
          Vertigo Token
        </TagLine>
        <InnerRow style = {{width: "65vw", marginLeft: "7vw", marginTop: "2vh"}} className = "titleFont">
          <Center>
            <animated.span style = {SpanStyle1}>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Deflationary</b></PgCen>
              <PgCen style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Fewer tokens are distributed after each weekly event. </PgCen>
            </animated.span>
          </Center>
          <Center>
            <animated.span style = {SpanStyle2}>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Bu<span style = {{letterSpacing: "3px"}}>rn</span> Events</b></PgCen>
              <PgCen style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Built-in burning mechanisms prevent developer hoarding.</PgCen>
            </animated.span>
          </Center>
          <Center>
            <animated.span style = {SpanStyle3}>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Integrated</b></PgCen>
              <PgCen  style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Vertigo tokens have important features within the ecosystem.</PgCen>
            </animated.span>
          </Center>
        </InnerRow>
        <InnerRow style = {{width: "65vw", marginLeft: "7vw"}} className = "titleFont">
          <Center>
            <animated.span style = {SpanStyle4}>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Autonomous</b></PgCen>
              <PgCen  style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Ecosystem operation is handled without intervention.</PgCen>
            </animated.span>
          </Center>
          <Center>
            <animated.span style = {SpanStyle5}>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Expandable</b></PgCen>
              <PgCen  style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Fluid contract structure enables endless innovation.</PgCen>
            </animated.span>
          </Center>
          <Center>
            <animated.span style = {SpanStyle6 }>
              <PgCen className = "fontLink" style = {{fontSize: "3vmin"}}><b>Weekly Distribution</b></PgCen>
              <PgCen  style = {{marginTop: "-1vh", fontSize: "2.2vh"}}>Take part in token events by staking Dark Energy.</PgCen>
            </animated.span>
          </Center>
        </InnerRow>
      </CenterPush>
      <CenterPush style = {{marginTop: "955vh", marginLeft: "-17.5vw", opacity: (1 - ((props.pos - 10.1) / (10.8 - 10.1)))}}>
        <TagLine as = {animated.h1} className = "fontLink" style = {StakeTitleStyles}>
          Vertigo Token Staking
          </TagLine>
        <PgStyled className = "titleFont" style = {{width: "45vw",marginTop: "-1vh"}}>
          <animated.b style = {StakeLongGameStyles}>Play the long game. </animated.b><br/><br/><animated.span style = {StakeTextStyles}>When a user stakes to the Vertigo Token staking pool,
           7.5% of those tokens are distributed proportionally to current stakers.  This also occurs when unstaking
           from the pool.</animated.span>

        </PgStyled>
        <animated.img src = {ico} alt = "staked vertigo token" style = {StakeImageStyles} />
      </CenterPush>
    </>
  )
}

function Documentation(props)
{
  //7.2
  const TitleStyles = useSpring({
    from: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "left", opacity: 0},
    to: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "left", opacity: (props.pos > 11.3) ? 1 : 0},
    config: {duration: (props.pos > 11.3) ? 800 : 200},
    delay: 0
  })

  const CoreDocumentStyles = useSpring({
    from: {opacity: 0, marginLeft: "2vw"},
    to: { opacity: (props.pos > 11.3) ? 1 : 0, marginLeft: "2vw"},
    config: {duration: (props.pos > 11.3) ? 800 : 200},
    delay: (props.pos > 11.3) ? 400 : 0
  })

  const CoreDocumentStyles2 = useSpring({
    from: {opacity: 0, marginLeft: "2vw"},
    to: { opacity: (props.pos > 11.3) ? 1 : 0, marginLeft: "2vw"},
    config: {duration: (props.pos > 11.3) ? 800 : 200},
    delay: (props.pos > 11.3) ? 800 : 0
  })

    const IMGStyles = useSpring({
      from: {width: "25vw", marginLeft: "69.8vw", marginTop: "-6.5vh", position: "fixed", opacity: 0},
      to: { width: "25vw", marginLeft: "69.8vw", marginTop: "-6.5vh", position: "fixed", opacity: (props.pos > 11.3) ? 1 : 0},
      config: {duration: (props.pos > 11.3) ? 800 : 200},
      delay: (props.pos > 11.3) ? 1200 : 0
  })


  return(
    <>
      <CenterPush style = {{marginTop: "1055vh", marginLeft: "-12.3vw", opacity: 1}}>
        <TagLine as = {animated.h1} className = "fontLink" style = {TitleStyles}>
          Documentation
        </TagLine>
        <Row style = {{marginLeft: "12.3vw", marginTop: "-5vh"}}>
        
          <Center>
            <Center as = {animated.div} style = {CoreDocumentStyles}>
              <TagLine className = "fontLink" style = {{marginLeft: "16.2vw"}}>Key Documents</TagLine>
              <a 
                href = "https://drive.google.com/file/d/1VscKC7Luowxel8mS4N6_uMJgC7DZOuoH/view?usp=sharing"
                target = "_blank" 
                rel = "noreferrer"
                className = "titleFont" style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;Whitepaper
              </a>
              <a
                href = "https://drive.google.com/file/d/1N8lKU4lBOslGg6v71PyvGkyaQ7DkYis7/view?usp=sharing"
                target = "_blank" 
                rel = "noreferrer"
                className = "titleFont" style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;Tokenomics
              </a>
              <a 
                href = "https://drive.google.com/file/d/1XqlJb41xgbfReSwuFlHLSsenW-9heht6/view?usp=sharing"
                target = "_blank" 
                rel = "noreferrer"
                className = "titleFont" style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;Post-Launch Development Specification
              </a>
            </Center>
            <Center as = {animated.div} style = {CoreDocumentStyles2}>
              <TagLine className = "fontLink" style = {{marginLeft: "16vw"}}>Contract Overview</TagLine>

              <a 
              target = "_blank" 
              rel = "noreferrer"
              href = "https://drive.google.com/file/d/10X0E_fB0pPYzAFDQpVislRFD4yP2RzVo/view?usp=share_link"
              className = "nunitosans" 
              style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf", marginTop: "-1vh"}}>
              &#x2022;VertigoToken.sol
              </a>

              <a 
              target = "_blank" 
              rel = "noreferrer"
              href = "https://drive.google.com/file/d/1Ltev55lPxLNOIdxEMuKdY4Z_qg3I6Xsp/view?usp=sharing" 
              className = "nunitosans" 
              style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;VertigoProperty.sol
              </a>

              <a 
              target = "_blank" 
              rel = "noreferrer"
              href = "https://drive.google.com/file/d/1gRlej1GjyrxgRz33cFF7_nehg0kAA-yK/view?usp=sharing" 
              className = "nunitosans" 
              style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;VertigoProfile.sol
              </a>

              <a 
              target = "_blank" 
              rel = "noreferrer"
              href = "https://drive.google.com/file/d/1_69mCfJbU8fYSTSIyHSQHLBLejDZJ9AA/view?usp=share_link" 
              className = "nunitosans" 
              style = {{marginLeft: "16vw", fontSize: "3.5vmin", width: "40vw", color: "#bfbfbf"}}>
              &#x2022;Core System: Sequence Diagram
              </a>

            </Center>
          </Center>
          
            <animated.img 
            src = {documents_image} 
            style = {IMGStyles} />
        </Row>
        <PgStyled>

        </PgStyled>

      </CenterPush>
    </>
  )
}


function ProfileCardDescriptor(props)
{
  //7.2
  const TitleStyles = useSpring({
    from: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "left", opacity: 0, marginLeft: "-30vmax"},
    to: {fontSize: "8vmin", width: "55vw", color: "white", textAlign: "left", opacity: (props.pos > 7.1) ? 1 : 0, marginLeft: (props.pos > 7.1) ? "0vmax" : "-30vmax"},
    config: {duration: (props.pos > 7.1) ? 800 : 200},
    delay: 0
  })

  const IMGStyles = useSpring({
    from: {position: "absolute", marginLeft: "100vw", marginTop: "-13vh", width: "28vw", opacity: 0},
    to: {position: "absolute", marginLeft: (props.pos > 7.1) ? "69vw" : "100vw", marginTop: "-23vh", width: "28vw", opacity: (props.pos > 7.1) ? 1 : 0},
    config: {duration: (props.pos > 7.1) ? 800:0},
    delay: (props.pos > 7.1) ? 1800:0
  })

  const IMGText = useSpring({
    from: {position: "absolute", marginTop: "25vh", marginLeft: "73vw", opacity: 0, fontSize: "2.3vh"},
    to: {position: "absolute", marginTop: "25vh", marginLeft: "73vw", width: "30vw", opacity: (props.pos > 7.1) ? 1 : 0, fontSize: "2.3vh"},
    config: {duration: (props.pos > 7.1) ? 800:0},
    delay: (props.pos > 7.1) ? 2800:0
  })

  const MiniTitleStyles = useSpring({
    from: {opacity: 0, fontSize: "3vmin", marginTop: "-3vh", textAlign: "left", width: "34vw", marginBottom: "4vh"},
    to: {opacity: (props.pos > 7.1) ? 1 : 0, fontSize: "3vmin", marginTop: "-3vh", textAlign: "left", width: "34vw", marginBottom: "4vh", marginLeft: "-21vmax"},
    config: {duration: (props.pos > 7.1) ? 800 : 200},
    delay: (props.pos > 7.1) ? 1000:0
  })

  const SpanStyle1 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos > 7.1) ? 1 : 0, fontSize: "2.7vmin"},
    config: {duration: (props.pos > 7.1) ? 800 : 200},
    delay: (props.pos > 7.1) ? 1300:0
  })

  const SpanStyle2 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos > 7.1) ? 1 : 0, fontSize: "2.7vmin"},
    config: {duration: (props.pos > 7.1) ? 800 : 200},
    delay: (props.pos > 7.1)? 1600:0
  })

  const SpanStyle3 = useSpring({
    from: {opacity: 0},
    to: {opacity: (props.pos > 7.1) ? 1 : 0, fontSize: "2.7vmin"},
    config: {duration: (props.pos > 7.1) ? 800 : 200},
    delay: (props.pos > 7.1) ? 1900:0
  })

  return(
    <>
      <CenterPush style = {{marginTop: "715vh", marginLeft: "-12.3vw", opacity: (1 - ((props.pos - 7.7) / (8.2 - 7.7)))}}>
        <animated.img src = {card} alt = "profile" style = {IMGStyles} />
        <PgStyled as = {animated.p} style = {IMGText} className = "titleFont">Tier II Profiles are difficult to obtain naturally, providing a significant advantage in the VertigoDAO economy. </PgStyled>
        <TagLine as = {animated.h1} className = "fontLink" style = {TitleStyles}>
          The Key To Your Journey
        </TagLine>
        <TagLine 
        className = "titleFont" 
        as = {animated.h1}
        style = {MiniTitleStyles}>
          <b style = {{color: "#c3bdfc"}}>Profile NFTs provide access to the ecosystem. They are easy to obtain and track all of your progress as a tokenized asset.</b>
        </TagLine>
          <PgStyled 
          className = "titleFont"
          style = {{ width: "37vw", marginLeft: "-18vw", marginTop: "0vh"}}>
            <animated.span style = {SpanStyle1}><b>Data encapsulation.</b> 
            &nbsp;Your profile stores all of your progress, including Dark Energy balance and Property ownership.
            </animated.span>    

            <br/><br/><animated.span style = {SpanStyle2}><b>Tiered Profiles. </b> 
            Tier II Profile owners can access Properties, earning Dark Energy passively.  <br/><br/>
            <animated.span style = {SpanStyle3}>Tier III Profiles will be freely redeemable after future updates, but must be upgraded
            before the owner can purchase Properties.</animated.span>
            </animated.span>
          </PgStyled>
      </CenterPush>
    </>
  )
}

export function ConditionalImageRender(props)
{
    if(props.pos < 1)
    {
        return(
            <img src = {props.img}
            style = {
              {width: "6vw", 
                height: "6vh", 
                opacity: (1), 
                cursor: "pointer"}
            } 
            alt = "telegram logo"/>
        )
    }
    return null;
}
