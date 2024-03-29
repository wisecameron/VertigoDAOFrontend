import { sRGBEncoding, BackSide } from 'three'
import {Canvas, useThree, useLoader} from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { LavaMoon } from './LavaPlanet'
import { Stars } from './Stars'

import { Bloom, EffectComposer } from '@react-three/postprocessing'
import FlyingVehicle from './FlyingVehicle'


export default function InterfaceScene(props)
{
    const loader = new TextureLoader()
    const lavaTexture = loader.load('cloud.png');
    lavaTexture.encoding = sRGBEncoding;


    return(
    <Canvas {...props}>
        <Stars count = {15000} position = {[1000, -1040, -2500]}/>
        <Stars count = {15000} position = {[1000, -1040, -2500]}/>
        <LavaMoon position = {[0,-100,-100]} scale = {30} texture = {lavaTexture}/>
        <pointLight position = {[0,0,0]} intensity = {1}/>
        <color attach = "background" args = {["black"]} />
    </Canvas>)
}
