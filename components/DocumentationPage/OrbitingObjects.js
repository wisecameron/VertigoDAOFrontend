import { useRef, useState } from "react";
import {useFrame} from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import orbitron from '../../assets/Orbitron_Regular.json'
import { TextureLoader } from 'three'
import { GlassCoin } from "../LoadedModels/GlassCoin";
import {useLoader} from '@react-three/fiber'
import {Model} from './logoModel'


export default function OrbitingObject(props)
{
    const ref = useRef()
    const ref2 = useRef()
    const [hovered, setHovered] = useState(false)

    const imgloaded = useLoader(TextureLoader, props.img)

    useFrame((t) =>
    {
        ref.current.position.x = 15 * Math.cos((t.clock.elapsedTime / 3) + props.tOffset) + 0
        ref.current.position.z = 15 * Math.sin((t.clock.elapsedTime / 3) + props.tOffset) - 20
        ref2.current.position.x = 15 * Math.cos((t.clock.elapsedTime / 3) + props.tOffset) + props.offsetX - (hovered ? props.hoverOffset:0)
        ref2.current.position.z = 15 * Math.sin((t.clock.elapsedTime / 3) + props.tOffset) - 20

    })

    const HandleHover = () =>
    {
        setHovered(!hovered)
    }

    const HandleClick = () =>
    {
        window.open(props.url, "_blank")
    }

    extend({ TextGeometry })

    const font = new FontLoader().parse(orbitron);
    let text = props.textData;

    return(
        <>
            <group 
            {...props} 
            ref = {ref} 
            scale = {0.5} 
            onPointerOver = {() => {HandleHover()}} 
            onPointerLeave = {() => {HandleHover()}}
            onClick = {() => {HandleClick()}}
            >
                <Model color = {(hovered) ? "#d2a6ff" : "white"}/>
            </group>
            
            <mesh 
            position = {[0,(hovered) ? -4 : -3,-10]} 
            ref = {ref2}
            >
                <textGeometry args = {[text, {font, size: (hovered) ? 0.6 : 0.3, height: 0.05}]}/>
                <meshStandardMaterial color = {"white"} metalness = {1}/>
            </mesh>
        </>
    )
}

export function VertigoText(props)
{
    extend({ TextGeometry })

    const font = new FontLoader().parse(orbitron);

    return(
        <mesh {...props} >
            <textGeometry args = {["Vertigo", {font, size: 1.0, height: 0.05}]} />
            <meshBasicMaterial />
        </mesh>
    )
}