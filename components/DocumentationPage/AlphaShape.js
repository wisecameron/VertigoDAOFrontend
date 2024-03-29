import alphamappng from '../../assets/alphamapblackwhite.png'
import React, {useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'


export default function AlphaShape(props)
{
    const ref = useRef(0)

    useFrame(() =>
    {
        ref.current.material.alphaMap.offset.y += 0.00005;
    })

    //e37b7b

    var map = new THREE.TextureLoader().load(alphamappng)
    var mat = new THREE.MeshPhongMaterial({color: `${props.color}`, transparent: true, side: THREE.DoubleSide})
    mat.alphaMap = map;
    mat.alphaMap.magFilter = THREE.NearestFilter;
    mat.alphaMap.wrapT = THREE.RepeatWrapping;
    mat.alphaMap.repeat.y = 1;
    

    return(
        <>
            <mesh ref = {ref} {...props} material = {mat} rotation = {[0,0,-1]}>
                <dodecahedronGeometry args = {[1, 0]}/>
            </mesh>
        </>
    )
}