import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import AlphaShape from './AlphaShape';
import OrbitingObject, { OrbitingModel } from './OrbitingObjects';
import CenterLight from './CenterLight';
import SpinRing from './SpinRing';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import DistanceObject from './DistanceObjects';
import FallingLine from './FallingLines';
import { TextureLoader } from 'three'
import {useLoader} from '@react-three/fiber'
import Fireworks, { FireworkHandler } from '../Scene/Fireworks/Fireworks';

import wpfrontpage from '../../assets/wpfrontpage.png'
import profileimg from '../../assets/profile.png'
import propimg from '../../assets/property.png'
import tokenimg from '../../assets/token.png'
import tokenomics from '../../assets/tokenomics.png'
import deck from '../../assets/deck.png'

import { GlassCoin } from '../LoadedModels/GlassCoin';

import { CenterLight2 } from './CenterLight';
import { useState } from 'react';

import Background, { BackgroundOG } from './background';

import { VertigoText } from './OrbitingObjects';


export default function DocScene(props)
{
    //<CenterLight position = {[0,0, -15]} scale = {0.5}/>
    /*
                    <OrbitingObject 
                    position = {[0,0,-10]} 
                    tOffset = {0} 
                    offsetX = {-1.25} 
                    textData = "Whitepaper"
                    hoverOffset = {1.25}
                    url = "https://drive.google.com/file/d/1VscKC7Luowxel8mS4N6_uMJgC7DZOuoH/view?usp=share_link"
                    img = {wpfrontpage}
                    />

                                        <FireworkHandler 
                        instances = { 2 }  
                        total = { 1000 } 
                        decayRate = { [1,1,1] } 
                        decayStart = { 50 } 
                        opacityDrop = { 0.005 } 
                        timeWait = { 500 }
                        xVelocityVariance = { .3 }
                        yVelocityVariance = { .1 }
                        zVelocityVariance = { .1 } />
    */


    return(
        <>
            <Suspense>
                <Canvas>
                    <pointLight intensity = {1} />
                    <CenterLight2 position = {[0,0, -15]} scale = {12}/>
                    <AlphaShape position = {[0,0, -100]} scale = {0} color = "#212121"/>
                    <Background scale = {140} position = {[0,0,-400]}/>
                    <VertigoText scale = {0.5} position = {[-3,0, 5]} />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {0} 
                    offsetX = {-1.25} 
                    textData = "Whitepaper"
                    hoverOffset = {1.25}
                    url = "https://drive.google.com/file/d/1VscKC7Luowxel8mS4N6_uMJgC7DZOuoH/view?usp=share_link"
                    img = {wpfrontpage}
                    hoverColor = {'white'}
                    />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {1} 
                    offsetX = {-1.4} 
                    textData = "Tokenomics"
                    hoverOffset = {1.25}
                    url = "https://drive.google.com/file/d/1N8lKU4lBOslGg6v71PyvGkyaQ7DkYis7/view?usp=share_link"
                    img = {tokenomics}
                    hoverColor = {'#118C4F'}
                    />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {2} 
                    offsetX = {-3} 
                    textData = "VertigoToken.sol Overview"
                    hoverOffset = {3}
                    url = "https://drive.google.com/file/d/10X0E_fB0pPYzAFDQpVislRFD4yP2RzVo/view?usp=share_link"
                    img = {tokenimg}
                    hoverColor = {'#fc7608'}
                    />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {3} 
                    offsetX = {-3.5} 
                    textData = "VertigoProperty.sol Overview"
                    hoverOffset = {3.5}
                    url = "https://drive.google.com/file/d/1Ltev55lPxLNOIdxEMuKdY4Z_qg3I6Xsp/view?usp=share_link"
                    img = {propimg}
                    hoverColor = {'#fc7608'}
                    />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {4} 
                    offsetX = {-3} 
                    textData = "VertigoProfile.sol Overview"
                    hoverOffset = {3}
                    url = "https://drive.google.com/file/d/1gRlej1GjyrxgRz33cFF7_nehg0kAA-yK/view?usp=share_link"
                    img = {profileimg}
                    hoverColor = {'#fc7608'}
                    />
                    <OrbitingObject 
                    position = {[0,-1,-10]} 
                    tOffset = {5} 
                    offsetX = {-1.25} 
                    textData = "Pitch Deck"
                    hoverOffset = {1.25}
                    url = "https://google.com"
                    img = {deck}
                    hoverColor = {'#0A64BC'}
                    />
                    <DistanceObject scale = {0} posX = {30} offset = {0} coef = {0.03} rot = {true}/>
                    <DistanceObject scale = {0}  posX = {-10} offset = {0} coef = {0.03} rot = {false}/>
                </Canvas>
            </Suspense>
        </>
    )
}



/*
Original



*/