import {useFrame} from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import ActText from '../ActText'

export default function RoadSign(props)
{
    const ref = useRef()

    const BoxGeo = useMemo(() => <boxGeometry args = {[1,1,1]} />, [])
    const SignPoleMaterial = useMemo(() => <meshBasicMaterial color = "#393939"/>, [])

    useFrame(() =>
    {
        ref.current.rotation.x += 0
    })

    return(
        <>
            <group position = {[0, 12, -107]} ref = {ref}>
                <mesh scale = {[15, 5, 3]}>
                    {BoxGeo}
                    <meshPhongMaterial color = "#121212"  shininess = {30}/>
                </mesh>
                <mesh position = {[-9,0,0]} scale = {[4, 0.5, 1]}>
                    {BoxGeo}
                    {SignPoleMaterial}
                </mesh>
                <mesh position = {[-11,-5,0]} scale = {[0.5, 10.3, 0.5]}>
                    {BoxGeo}
                    {SignPoleMaterial}
                </mesh>
                <mesh position = {[9,0,0]} scale = {[4, 0.5, 1]}>
                    {BoxGeo}
                    {SignPoleMaterial}
                </mesh>
                <mesh position = {[11,-5,0]} scale = {[0.5, 10.3, 0.5]}>
                    {BoxGeo}
                    {SignPoleMaterial}
                </mesh>
            </group>
            <ActText 
            textData = {[{text: 'Vertigo Metaverse', size: 0.9, height: 0.2}]}
            posX = {-6.6}
            posZ = {-105}
            bottom = {9.5}
            />
        </>
    )
}

export function RoadSignGLB(props)
{
    const SignLoaded = useLoader(GLTFLoader, '/glb/Neon_Sign_DAO.glb')

    return(<primitive object = {SignLoaded.scene} {...props} />)
}