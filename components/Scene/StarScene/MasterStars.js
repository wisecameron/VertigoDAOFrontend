import { Object3D, Color } from 'three'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo, useState } from 'react'

/*
    Props: 
    total, colorArray
*/

export function MasterStars(props)
{
    const ref = useRef();
    const timer = useRef(0);

    const dummy = useMemo(() => new Object3D(), []);

    const [ColorArray] = useState(() => {
        const colorArray = new Float32Array(props.count * 3);

        for (let i = 0; i < props.count; i++) {
          const chosenColor = Math.floor(Math.random() * props.colorArray.length);

          const color = new Color(props.colorArray[chosenColor]);
          color.toArray(colorArray, i * 3);
        }
        
        return colorArray;
      });


    useEffect(() =>
    {
        let count = 0;
        let c = props.count;
        if(props.graphics === 1)
        {
            c = 0;
        }
        else if(props.graphics === 2)
        {
            c *= .5
        }

        for(count; count < c; count++)
        {
            dummy.position.set((Math.random() > 0.5 ? 1:-1) * Math.random() * 10000, Math.random() * 8000, (Math.random() > 0.5 ? 1:-1) * Math.random() * 10000)
            dummy.updateMatrix()
            ref.current.setMatrixAt(count, dummy.matrix)
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [props.graphics, props.count])

    useFrame((_, delta) =>
    {
        if(props.vis && props.graphics > 1)
        {
            if(!ref.current.visible)
            {
                timer.current = 0;
                ref.current.visible = true;
            }
            if(timer.current < 3)
            {
                timer.current += delta;
            }
            else if(ref.current.material.opacity < 1)
            {
                ref.current.material.opacity += delta * .3;
            }
        }
        else
        {

            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .6;
            }
            else if(ref.current.visible)
            {
                ref.current.visible = false;
            }
        }

        ref.current.rotation.y += 0.00008;
    })


    return(
    <instancedMesh 
    {...props}
    ref = {ref} args = {[null, null, (props.count)]} frustumCulled = {false} visible = {false}>
        <sphereBufferGeometry args = {[2,4, 8]} >
            <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]} />
        </sphereBufferGeometry>
        <meshBasicMaterial color = "white" vertexColors transparent opacity = {0.7}/>
    </instancedMesh>)
}