import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";


export default function RedWall()
{
    const {camera} = useThree()
    const ref = useRef()

    useFrame(() =>
    {
        ref.current.position.x = camera.position.x - .4;
        ref.current.position.y = camera.position.y - 1;
        ref.current.position.z = camera.position.z + .4;
    })

    return(
        <mesh rotation =  {[.3, 1.3, 1.2]} ref = {ref}>
            <planeBufferGeometry args = {[2.3, 2.3]}/>
            <meshBasicMaterial color = "red" />
        </mesh>
    )
}