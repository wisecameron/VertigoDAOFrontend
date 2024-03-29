import { Object3D, Color } from 'three'
import { useThree} from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo } from 'react'
import { EffectComposer } from 'three-stdlib'
import { Bloom } from '@react-three/postprocessing'

export function Stars(props)
{
    const ref = useRef()
    const {camera} = useThree()

    camera.position.x = 0;
    camera.position.z = 0;
    camera.position.y = 0;

    camera.far = 5000;
    camera.updateProjectionMatrix();

    const ColorMemoized = useMemo(() => new Color(), []);
    const dummy = useMemo(() => new Object3D(), []);

    const ColorArray = useMemo(() => 
        Float32Array.from(new Array(props.count)
        .fill()
        .flatMap((_, i) => ColorMemoized.setHex(
            (Math.random() < 0.33) ? 0xf5d271 : (Math.random() > 0.5) ? 0x67a2f0 : 0x9da0a3)
            .toArray()))
            ,[props.count, ColorMemoized]
    )


    useEffect(() =>
    {
        let count = 0;

        for(count; count < props.count; count++)
        {
            dummy.position.set((Math.random() > 0.5 ? 1:-1) * Math.random() * 500, Math.random() * 200, (Math.random() > 0.5 ? 1:-1) * Math.random() * 500)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
    }, [])

    useFrame(() =>
    {
        //ref.current.rotation.y += 0.00008;
    })

    camera.far = 8000;

    return(
    <instancedMesh 
    {...props}
    ref = {ref} args = {[null, null, (props.count)]} frustumCulled = {false}>
        <sphereBufferGeometry args = {[0.2,4, 8]} >
            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]} />
        </sphereBufferGeometry>
        <meshBasicMaterial color = "white" vertexColors transparent opacity = {0.7}/>
    </instancedMesh>)
}
