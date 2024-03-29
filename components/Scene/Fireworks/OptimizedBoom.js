import {useRef, useEffect, useMemo, useState} from 'react';
import { Color, Matrix4, Object3D, Vector3, BufferAttribute, Quaternion } from 'three';
import { dispose, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { easeInOutQuad } from '../Controllers/CameraController';
import { lerp } from 'three/src/math/MathUtils';
import { useThree } from '@react-three/fiber';
import { getPoint } from './Fireworks2';

export default function OptimizedBoom(props)
{
/*
/////////////////////////////////////////////////////////////////////////////////////
*/
    let ev;

    const TOTAL = props.total;
    const scroll = useScroll();
    const ref = useRef();
    const iteration = useRef(0);
    const animationOutOpacity = useRef(160);
    const animationInOpacity = useRef(160);
    const startingOpacity = useRef(0);
    const timer = useRef(0);
    const movablePositions = useRef(Array.from({ length: TOTAL }, (_, index) => index));
    const dummy = useMemo(() => new Object3D(), []);
    const excluded = useRef(0);
    const exploded = useRef(false)

    let offset;

    let x,y,z;


    const {camera} = useThree();

    const [ColorArray] = useState(() => {
        const colorArray = new Float32Array(props.total * 3);
        const colorMap = new Array(props.total);

        for (let i = 0; i < props.total; i++) {
          const chosenColor = Math.floor(Math.random() * props.colorArray.length);

          const color = new Color(props.colorArray[chosenColor]);
          colorMap[i] = chosenColor;
          color.toArray(colorArray, i * 3);
        }
        
        return { colorArray, colorMap };
      });


    const positions = useMemo(() =>
    {
        let destinations = [];

        CreateDestinations(destinations, TOTAL * 3, ColorArray, props.scales, props.dist);

        return destinations;
    }, [TOTAL]);


    function iterate()
    {
        if(ref.current === undefined) return;

        let i = 0;
        let l = movablePositions.current.length;
        let index; 
        let camZ = camera.position.z + 50; //tweak to modify culling distance
        ev = easeInOutQuad(iteration.current / props.duration);

        while(i < l)
        {
            index = movablePositions.current[i];


            if(index === -1)
            {
                i++;
                continue;
            }

            index *= 3;

            x = lerp(0, positions[index], ev);
            y = lerp(0, positions[index + 1], ev);
            z = lerp(0, positions[index + 2], ev);

            if(z > camZ)
            {
                excluded.current += 1;
                movablePositions.current[i] = -1;
            }
            else
            {
                dummy.position.set(x,y,z);
                dummy.updateMatrix();
                ref.current.setMatrixAt(i, dummy.matrix);
                i++;
            }
            
        }
        //ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.instanceMatrix.needsUpdate = true;
        iteration.current += 1;
    }
/*
/////////////////////////////////////////////////////////////////////////////////////
*/


    useEffect(() =>
    {
        let matrix = new Matrix4();

        for (let i = 0; i < TOTAL; i++) 
        {
          matrix.setPosition(0, 0, 0);
          ref.current.setMatrixAt(i, matrix);
        }

        ref.current.instanceMatrix.needsUpdate = true;
    }, [dummy, TOTAL])


/*
/////////////////////////////////////////////////////////////////////////////////////
*/


    useFrame((_, delta) =>
    {
        if(scroll.offset < 1)
        {
            offset = scroll.offset
        }
        else
        {
            offset = 0;
        }
        /*
            HANDLE OUT OF RANGE
        */
        if(offset < props.offsetLow || offset > props.offsetHigh)
        {
            if(!exploded.current && ref.current.material.opacity > 0) ref.current.material.opacity = 0;
            if(animationOutOpacity.current == 0 && ref.current.material.opacity > 0)
            {
                startingOpacity.current = ref.current.material.opacity;
                animationInOpacity.current = 0;
            }
            
            //CASE: STILL VISIBLE
            if(ref.current.material.opacity > 0)
            {
                ref.current.material.opacity -= delta * .33;
                iterate();
            }

            //CASE: 0 OPACITY BUT VISIBLE FLAG IS TRUE
            else if(animationOutOpacity.current >= 160 && ref.current.visible)
            {
                ref.current.visible = false;
            }   
        }
        /*
            HANDLE DELAY 
        */
        else if(props.delayTimer > timer.current)
        {
            timer.current += delta;
        }
        /*
            EXPLOSION / MAINTAINENCE
        */
        else
        {
            exploded.current = true;
            //set visibility, reset state.
            if(!ref.current.visible) ref.current.visible = true;
            if(ref.current.material.opacity < 1) ref.current.material.opacity += delta * .2;
            if(iteration.current < props.duration) iterate();
            else{ref.current.rotation.y += delta * .02}
        }

    })
/*
/////////////////////////////////////////////////////////////////////////////////////
*/

    return(
        <instancedMesh scale = {props.scale} ref = {ref} {...props} args = {[null, null, (props.total)]} rotation = {[1, 0.5, 0]} frustumCulled = {true}>
            <sphereBufferGeometry args = {[0.5]}>
                <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray.colorArray, 3]}/>
            </sphereBufferGeometry>
            <meshBasicMaterial  toneMapped = {false} vertexColors transparent/>
        </instancedMesh>
    )
}

function CreateDestinations(map, TOTAL, ColorArray, scales, dist)
{
    let x,y,z;

    let count = 0;

    for(let i = 0; i < TOTAL; i+=3)
    {   
        [x,y,z] = getPoint();

        let scale = scales[ColorArray.colorMap[count]];

        map.push(x * Math.random() * dist[0] * scale) ;
        map.push(y * Math.random() * dist[1] * scale) ;
        map.push(z * Math.random() * dist[2] * scale) ;

        count += 1;
    }

}
