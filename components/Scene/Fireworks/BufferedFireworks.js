import {useRef, useEffect, useMemo, useState} from 'react';
import { Color, Matrix4, Object3D, Vector3 } from 'three';
import { dispose, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { easeInOutQuad } from '../Controllers/CameraController';
import { lerp } from 'three/src/math/MathUtils';



/*
    Props:

    total
    decayRate : [,,,]
    colorHexArray: [0xffffff, ...,]
    decayStart
    opacityDrop

*/
export default function BufferedFireworks2(props)
{
/*
/////////////////////////////////////////////////////////////////////////////////////
*/
    const TOTAL = props.total;
    const scroll = useScroll();
    const ref = useRef();
    const explodePos = useRef(0);
    const iterations = useRef(0);
    const animationOutOpacity = useRef(160);
    const animationInOpacity = useRef(160);
    const startingOpacity = useRef(0);

    let ev;

    const timer = useRef(0);
    const dummy = useMemo(() => new Object3D(), []);

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

    const zerod = useMemo(() => new Array(TOTAL * 3).fill(0), [TOTAL]);

    const [posMap, setMap] = useState(null);

/*
/////////////////////////////////////////////////////////////////////////////////////
*/

    useEffect(() =>
    {
        setMap(Array.from({length: TOTAL * 3}, () => 0));
        explodePos.current = props.position[1] + props.explodeHeight;
        let i = 0;
        let count = 0;
        let len = TOTAL * 3;

        for(i; i < len; i+=3)
        {
            dummy.position.set(0,0,0);
            dummy.updateMatrix();
            ref.current.setMatrixAt(count, dummy.matrix);
            count += 1;
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [dummy, TOTAL, zerod])

/*
/////////////////////////////////////////////////////////////////////////////////////
*/


    useFrame((_, delta) =>
    {
        let count = 0;
        

        /*
            HANDLE OUT OF RANGE
        */
        if(scroll.offset < props.offsetLow || scroll.offset > props.offsetHigh)
        {
            if(animationOutOpacity.current == 0 && ref.current.material.opacity > 0)
            {
                startingOpacity.current = ref.current.material.opacity;
                animationInOpacity.current = 0;
            }

            if(animationOutOpacity.current < 160 )
            {
                animationOutOpacity.current += delta * 32.5;
                ev = easeInOutQuad(animationOutOpacity.current / 160);

                ref.current.material.opacity = lerp(startingOpacity.current, 0, ev);

                for(let i = 0; i < TOTAL * 3; i+=3)
                {
                    
                    posMap[i] += (positions[i] - posMap[i]) / props.duration;
                    posMap[i + 1] += (positions[i + 1] - posMap[i + 1]) / props.duration;
                    posMap[ i + 2 ] += (positions[i + 2] - posMap[i + 2]) / props.duration;
                    dummy.position.set(posMap[i], posMap[ i + 1], posMap[ i + 2 ]);
                    dummy.updateMatrix();

                    ref.current.setMatrixAt(count, dummy.matrix);
                    count += 1;
                
                }
                ref.current.instanceMatrix.needsUpdate = true;
                iterations.current += 1;
            }
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
            EXPLOSION
        */
        else
        {
            //set visibility, reset state.
            if(!ref.current.visible) ref.current.visible = true;
            if(animationOutOpacity.current != 0) animationOutOpacity.current = 0;
            if(ref.current.material.opacity != 1) ref.current.material.opacity = 1;

            /*
                Handle initial rise
            */
            if(ref.current.position.y < explodePos.current)
            {
                if(ref.current.material.opacity < 1)
                {
                    ref.current.material.opacity = 1;
                }
                ref.current.position.y += delta * 100;

                if(iterations.current === 0)
                {
                    for(let i = 0; i < TOTAL * 3; i+=3)
                    {
                        dummy.position.set(0,0,0);
                        dummy.updateMatrix();
                        ref.current.setMatrixAt(count, dummy.matrix);
                        count += 1;
                    }
                    ref.current.instanceMatrix.needsUpdate = true;
                }
            }

            /*
                Explosion Logic
            */
            else 
            {
                for(let i = 0; i < TOTAL * 3; i+=3)
                {
                    
                    posMap[i] += (positions[i] - posMap[i]) / props.duration;
                    posMap[i + 1] += (positions[i + 1] - posMap[i + 1]) / props.duration;
                    posMap[ i + 2 ] += (positions[i + 2] - posMap[i + 2]) / props.duration;
                    dummy.position.set(posMap[i], posMap[ i + 1], posMap[ i + 2 ]);
                    dummy.updateMatrix();

                    ref.current.setMatrixAt(count, dummy.matrix);
                    count += 1;
                
                }
                ref.current.instanceMatrix.needsUpdate = true;
                iterations.current += 1;
            }

            //handle fade out
            if(iterations.current > props.decayStart)
            {
                ref.current.material.opacity -= props.decayRate;
            }

            //handle reset
            if(iterations.current >= props.duration + props.timeBetween)
            {
                iterations.current = 0;
                
                for(let i = 0; i < posMap.length; i++)
                {
                    posMap[i] = 0;
                }
                ref.current.position.x = (props.position[0] + ((Math.random() > 0.5 ? 1 : - 1) * Math.random() * props.xV));
                ref.current.position.y = (props.position[1] + Math.random() * props.yV);
                ref.current.position.z = (props.position[2] + Math.random() *  props.zV);

                explodePos.current = ref.current.position.y + props.explodeHeight;
                timer.current = 0;
                return;
            }
        }

    })
/*
/////////////////////////////////////////////////////////////////////////////////////
*/

    return(
        <instancedMesh scale = {props.scale} ref = {ref} {...props} args = {[null, null, (props.total)]} rotation = {[1, 0.5, 0]}>
            <sphereBufferGeometry args = {[0.5]}>
                <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray.colorArray, 3]}/>
            </sphereBufferGeometry>
            <meshBasicMaterial  toneMapped = {false} vertexColors transparent />
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

export function getPoint() 
{
    var d, x, y, z;
    do {
        x = Math.random() * 2.0 - 1.0;
        y = Math.random() * 2.0 - 1.0;
        z = Math.random() * 2.0 - 1.0;
        d = x*x + y*y + z*z;
    } while(d > 1.0);
    return [x, y, z];
} 

export function getPoint2() 
{
    var d, x, y, z;
    do {
        x = Math.random() * 2.0 - 1.0;
        y = Math.random() * 2.0 - 1.0;
        z = Math.random() * 2.0 - 1.0;
        d = x*x + y*y + z*z;
    } while(d > 1.0);
    return [x, y, z];
} 


export function GalaxyFireworksLoader(props)
{
    
}