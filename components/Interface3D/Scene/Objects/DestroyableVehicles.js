import { useFrame } from "@react-three/fiber"
import { useEffect } from "react"
import { useMemo, useRef } from "react"
import { Object3D } from "three"



/*

Props: Total, spanX, spanY, spanZ, scale

*/
export default function DestroyableVehicles(props)
{
    const Color = useMemo(() => new THREE.Color(), [])

    const ColorArray = useMemo(() => 
    Float32Array.from(new Array(props.total)
    .fill()
    .flatMap((_, i) => Color.setHex(
        (Math.random() > 0.95) ? 0xff0000 : (Math.random() > 0.45) ? 0xccbae3 : 0xe89797)
        .toArray()))
        ,[props.total, Color]
    )

    /* Returns: {startPos, endPos, speed} */
    const PositionManager = useMemo(() =>
    {

    }, [])

    const dummy = useMemo(() =>
    {
        return new Object3D();
    },[])

    const ref = useRef()

    useEffect(() =>
    {

    }, [])

    useFrame(() =>
    {

    })



}