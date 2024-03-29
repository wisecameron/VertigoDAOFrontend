import React, {useRef} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { ConvoyLongMobile2 } from './Convoy'
import * as THREE from 'three'


export default function MoonMobile()
{
    const MoonTexture = useLoader(TextureLoader, 'moon.jpg')
    const sun2 = useLoader(TextureLoader, 'sun.png')
    const sunemis2 = useLoader(TextureLoader, 'mobilesunemis.png')
    const sunrough2 = useLoader(TextureLoader, 'sunrough.png')
    const sunnorm2 = useLoader(TextureLoader, 'sunnorm.png')
    const sundis2 = useLoader(TextureLoader, 'sundis.png')

    const ref = useRef(0)
    const ref2 = useRef(0)

    MoonTexture.encoding = THREE.sRGBEncoding

    sun2.encoding = THREE.sRGBEncoding
    sunemis2.encoding = THREE.sRGBEncoding
    sunrough2.encoding = THREE.sRGBEncoding
    sunnorm2.encoding = THREE.sRGBEncoding

    useFrame(() =>
    {
        if(ref.current !== undefined && ref.current !== null)
        {
            ref.current.rotation.y -= 0.0002
        }
        if(ref2.current !== undefined && ref2.current !== null)
        {
            ref2.current.rotation.x -= 0.0001;
        }
    })

    const lightPos = [-6900, 3000, -900]

    return(
        <>
            <pointLight intensity = {0.3} position  = {lightPos} receiveShadow = {true} color = "#e8f1ff"/>

            <mesh 
                ref = {ref}
                position = {[500, 2330, -900]}
                rotation = {[0,0,-1.3]}
                scale = {1}
            >
                <meshPhongMaterial 
                map = {MoonTexture} 
                shininess = {50}
                />
                <sphereGeometry args = {[700, 512, 256]} />
            </mesh>

            <mesh position = {[-5500, 2300, -9800]} 
                rotation = {[2, 0, 0]} 
                castShadow = {true}
                scale = {6}
                ref = {ref2}
            >
                    <meshPhongMaterial 
                    map = {sun2} 
                    emissiveMap = {sunemis2}
                    emissive = "#1d1135"
                    normalMap = {sunnorm2} 
                    roughnessMap = {sunrough2} 
                    displacementMap = {sundis2}
                    roughness = {6}
                    emissiveIntensity = {45}
                    shininess = {50}/>
                <sphereGeometry args = {[200, 256, 128]} />
            </mesh>

        </>
    )   
}

export function DEPlanetMobile()
{

    const sun2 = useLoader(TextureLoader, 'sun.png')
    const sunemis2 = useLoader(TextureLoader, 'mobilesunemis.png')
    const sunrough2 = useLoader(TextureLoader, 'sunrough.png')
    const sunnorm2 = useLoader(TextureLoader, 'sunnorm.png')
    const sundis2 = useLoader(TextureLoader, 'sundis.png')
    sun2.encoding = THREE.sRGBEncoding
    sunemis2.encoding = THREE.sRGBEncoding
    sunrough2.encoding = THREE.sRGBEncoding
    sunnorm2.encoding = THREE.sRGBEncoding

    const ref2 = useRef(0)

    useFrame(() =>
    {
        if(ref2.current !== undefined && ref2.current !== null)
        {
            ref2.current.rotation.x -= 0.002;
        }
    })

    const lightPos = [-6900, 3000, -900]

    return(
        <>
            <pointLight intensity = {0.3} position  = {lightPos} receiveShadow = {true} color = "#e8f1ff"/>

            <mesh position = {[-5200, 2300, -9800]} 
                rotation = {[2, 0, 0]} 
                castShadow = {true}
                scale = {6}
                ref = {ref2}
            >
                    <meshPhongMaterial 
                    map = {sun2} 
                    emissiveMap = {sunemis2}
                    emissive = "#1d1135"
                    normalMap = {sunnorm2} 
                    roughnessMap = {sunrough2} 
                    displacementMap = {sundis2}
                    roughness = {6}
                    emissiveIntensity = {80}
                    shininess = {50}/>
                <sphereGeometry args = {[200, 256, 128]} />
            </mesh>

            <ConvoyLongMobile2 
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