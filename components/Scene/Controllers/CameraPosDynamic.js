import { useFrame, useThree } from '@react-three/fiber'
import React, { useState } from 'react'
import { useGLTF, useScroll, FirstPersonControls } from '@react-three/drei'


export default function SetCameraPosDynamic(props)
{
    const [pos, setPos] = useState(0);
    const scroll = useScroll();
    const {camera} = useThree();

    useFrame(() =>
    {
        setPos(Math.round(((props.pages * scroll.offset) + Number.EPSILON) * 10) / 10);
    })

    if(pos > 5 && pos < 6)
    {
        camera.lookAt(-5500, 2300, -9800);
        return(
            <>
              <FirstPersonControls
                lookVertical = {false}
                lookSpeed = {0.01} 
            />
            </>
        )
    }
}
