import { useRef } from "react";
import { useEffect } from "react";
import * as THREE from 'three'

export default function Act1Residential(props)
{
    const ref = useRef()
    const dummy = new THREE.Object3D()
    let buildings = props.buildings !== undefined ? props.buildings : 3;

    let startingX = buildings 

    useEffect(() =>
    {
        for(let i = 0; i < 50; i++) //rows
        {
            //populate rows
            for(let j = 0; j < buildings; j++)
            {

            }
        }
    })
    
}