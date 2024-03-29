export default function RoadCaution(props)
{
    return(
        <group {...props}>
            <mesh position = {[2, 5, -300]}>
                <boxGeometry args = {[0.05, 0.05, 600]}/>
                <meshStandardMaterial color = "#d4af37" emissive = "#d4af37" emissiveIntensity={1.3}/>
            </mesh>
            <mesh position = {[-2, 5, -300]}>
                <boxGeometry args = {[0.05, 0.05, 600]}/>
                <meshStandardMaterial color = "#d4af37" emissive = "#d4af37" emissiveIntensity={1.3}/>
            </mesh>
        </group>
    )
}