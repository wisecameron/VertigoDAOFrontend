import {useFrame} from '@react-three/fiber'
import { useRef,  useMemo } from 'react'

import {BoxBufferGeometry, MeshBasicMaterial} from 'three';

export default function FlyingVehicle(props)
{
    const ref = useRef()

    useFrame(() =>
    {
        ref.current.position.z -= 0.05;
    })

    const boxgeo = useMemo(() => new BoxBufferGeometry(2, 2, 10))


    return(
        <group ref = {ref}>
            <mesh geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[0, 12, 10]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[0, -12, 10]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[-7, 0, 25]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[7, 0, 25]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[-14, 0, 50]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>
            <mesh position = {[14, 0, 50]} geometry = {boxgeo}>
                <meshBasicMaterial color = "red"/>
            </mesh>

            <mesh position = {[0, 0, 150]} geometry = {boxgeo}>
                <meshBasicMaterial color = "green"/>
            </mesh>

        </group>
    )

}

function Lasers(props)
{
    const ref = useRef()

    
}