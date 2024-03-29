import MoonMobile from '../StarScene/MoonMobile';
import React from 'react'
import { useThree } from '@react-three/fiber';
import '../../../css/App.css'
import { ConvoyLongMobile } from '../StarScene/Convoy';


export default function MobileMoonScene(props)
{
    const {camera} = useThree();

    camera.position.x = 1600
    camera.position.y = 2700
    camera.position.z = 1870
    camera.lookAt(500, 2330, -900)
    camera.far = 19000;

    return(
        <>
          <MoonMobile />
          <ConvoyLongMobile
                total = {2000} 
                x = {-100500} 
                y = {2700} 
                z = {1000} 
                dir = {1} 
                scaleFactor = {0.5}
                speedFactor = {0.5}
              />
              <ConvoyLongMobile 
                total = {2000} 
                x = {-5000} 
                y = {2800} 
                z = {-5400} 
                dir = {-1} 
                speedFactor = {0.25}
              />
        </>
    )
}