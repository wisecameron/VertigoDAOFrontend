import React from 'react'
import { useThree } from '@react-three/fiber';
import '../../../css/App.css'
import { DEPlanetMobile } from './MoonMobile';

export default function DarkPlanetMobileScene(props)
{
    const {camera} = useThree();

    camera.position.x = -3900
    camera.position.y = 3000
    camera.position.z = -11800
    camera.lookAt(-5000, 2300, -7800)
    camera.far = 19000;

    return(<DEPlanetMobile />)

}