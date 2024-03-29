import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import InFrameChecker from '../../InFrameChecker'

export default function RandomFlierLoader()
{

}

export function RandomFlier(props)
{
    const ref = useRef();

    useFrame(() =>
    {

    })

    return(
        <mesh>
            <boxGeometry args = {[]} />
            <meshBasicMaterial color = "red"/>
        </mesh>
    )

}