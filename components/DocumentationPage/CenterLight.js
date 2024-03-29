import {useFrame, useLoader, useThree} from '@react-three/fiber'
import { useRef, useState } from 'react'
import { RGBELoader } from 'three-stdlib'
import * as THREE from 'three'
import { CubeCamera, MeshRefractionMaterial } from '@react-three/drei'
import sky from '../../assets/sky.hdr'
import { Stars } from '@react-three/drei'

export default function CenterLight(props)
{
    //<dodecahedronGeometry args = {[1.75, 0]}/>
    let ref = useRef()
    const [loaded, setLoaded] = useState(false)

    let detail = useRef(8);
    let size = useRef(0.5);
    let speed = useRef(0.005);

    const {camera} = useThree()

    camera.far = 1300;

    useFrame(() =>
    {
        ref.current.rotation.z -= speed.current;

        if(!loaded) 
        {
            detail.current = 0;
            size.current = 1;
            setLoaded(true)
        }

    })

    const texture = useLoader(RGBELoader, sky);

    return(
        <>
            <mesh ref = {ref} {...props} rotation = {[-Math.PI / 2,0, 0]} visible = {true}>
                <dodecahedronGeometry args = {[size.current, detail.current]}/>
                <MeshRefractionMaterial 
                envMap={texture} 
                toneMapped = {false} 
                color = "#303030" 
                bounces = {6} 
                fresnel = {0} 
                ior = {2.4}
                aberrationStrength = {0.5}
                />
            </mesh>

        </>
    )
}

export function CenterLight2(props)
{
    //<dodecahedronGeometry args = {[1.75, 0]}/>
    let ref = useRef(0)


    let detail = useRef(2)
    let size = useRef(0.6)

    let mouseSpeed = useRef(0.0008)

    let Mesh2Mat = new THREE.MeshStandardMaterial({transparent: true, color: "white", opacity: 0.2, side: THREE.DoubleSide})

    const texture = useLoader(RGBELoader, sky)

    const [f, setF] = useState(false)

    useFrame((state) =>
    {
        if(state.clock.getElapsedTime() > 0.5)
        {
            setF(true)
        }
        if(ref.current != 0) ref.current.rotation.z += mouseSpeed.current;
    })

    if(!f)
    {
        return null;
    }

    return(
        <>
            <CubeCamera>
                {(texture) => (
                <mesh ref = {ref} {...props} 
                rotation = {[-Math.PI / 2,0, 0]} 
                onPointerOver = {() => {
                    mouseSpeed.current *= 2
                    }} 
                onPointerLeave = {() => {
                    mouseSpeed.current = 0.0008
                    }}>
                    <octahedronGeometry args = {[size.current,0]} />
                    <MeshRefractionMaterial 
                    envMap={texture} 
                    toneMapped = {false} 
                    color = "white" 
                    bounces = {6} 
                    fresnel = {0} 
                    ior = {2.6}
                    aberrationStrength = {0}
                    />
                </mesh>
                )}
            </CubeCamera>
        </>
    )
}

export function CenterLight3(props)
{
    //<dodecahedronGeometry args = {[1.75, 0]}/>
    let ref = useRef()
    let mouseSpeed = useRef(0.005)

    useFrame(() =>
    {
        ref.current.rotation.y += mouseSpeed.current;
    })

    return(
        <>
            <mesh ref = {ref} {...props} rotation = {[0,0, 0]} 
            onPointerOver = {() => {mouseSpeed.current *= 2}} 
            onPointerLeave = {() => {
                mouseSpeed.current = 0.005}}>
                <torusGeometry args = {[1, 0.3, 18, 50]}/>
                <meshToonMaterial color = "white"/>
            </mesh>
            <pointLight position = {props.position} />

        </>
    )
}