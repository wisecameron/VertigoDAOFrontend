import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

/*
            <group position = {[-23, 15, -100 - (props.pos * 50)]} rotation = {[0, 0, 0]}>
                <mesh position = {[0, -2.5, 0]}>
                    <boxGeometry args = {[.5, 5, .5]}/>
                    <meshStandardMaterial shininess={30} color = "#101010"/>
                </mesh>
                <mesh position = {[2, -1, 0]}>
                    <boxGeometry args = {[2, 1, .5]}/>
                    <meshPhongMaterial emissive="yellow" emissiveIntensity = {1}/>
                </mesh>
            </group>
            <group position = {[23, 15, -100 - (props.pos * 50)]} rotation = {[0, Math.PI, 0]}>
                <mesh position = {[0, -9.5, 0]}>
                    <boxGeometry args = {[.5, 10, .5]}/>
                    <meshPhongMaterial color = "grey" shininess={30} />
                </mesh>
                <mesh position = {[2, -5, -0]}>
                    <boxGeometry args = {[2, 1, .5]}/>
                    <meshPhongMaterial emissive="yellow" emissiveIntensity = {1} />
                </mesh>
            </group>
*/

export function StreetLight(props) //vehicleZ -- if vehicle position within [] of streetlight, add pointLight 
{
    return(
        <>
            <group position = {[-23, 15, -100 - (props.pos * 100)]} rotation = {[0, 0, 0]}>
                <mesh position = {[0, -2.5, 0]}>
                    <boxGeometry args = {[.5, 5, .5]}/>
                    <meshStandardMaterial shininess={30} color = "#101010"/>
                </mesh>
                <mesh position = {[2, -1, 0]}>
                    <boxGeometry args = {[2, 1, .5]}/>
                    <meshPhongMaterial emissive="white" emissiveIntensity = {14}/>
                </mesh>
            </group>
            <group position = {[23, 15, -100 - (props.pos * 100)]} rotation = {[0, Math.PI, 0]}>
                <mesh position = {[0, -9.5, 0]}>
                    <boxGeometry args = {[.5, 10, .5]}/>
                    <meshPhongMaterial color = "grey" shininess={30} />
                </mesh>
                <mesh position = {[2, -5, -0]}>
                    <boxGeometry args = {[2, 1, .5]}/>
                    <meshPhongMaterial emissive="white" emissiveIntensity = {14} />
                </mesh>
            </group>
        </>
    )
}

export function StreetLightLoader(props)
{
    let ReturnValues = []
    const lightLoaded = useLoader(GLTFLoader, 'glb/Light_Pole.glb')

    for(let i = props.startPos; i < props.maxPos; i++)
    {
        ReturnValues.push(<StreetLight pos = {i} key = {i} />)
    }

    return ReturnValues
}

