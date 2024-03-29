import {useRef, useEffect, useMemo, useState} from 'react';
import { Color, Matrix4, Object3D, Vector3 } from 'three';
import { dispose, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';




/*
    Props:

    total
    decayRate : [,,,]
    colorHexArray: [0xffffff, ...,]
    decayStart
    opacityDrop

*/
export default function Fireworks(props)
{
    const TOTAL = props.total;
    const xVelocityVariance = props.xVelocityVariance;
    const yVelocityVariance = props.yVelocityVariance;
    const zVelocityVariance = props.zVelocityVariance;
    const scroll = useScroll();
    const ref = useRef();
    const endPos = useRef();
    const iterations = useRef(0);
    const MemoColor = useMemo(() => new Color(), []);


    const [ColorArray] = useState(() => 
    Float32Array.from(new Array(props.total)
    .fill()
    .flatMap((_, i) => MemoColor.set(
        (props.colorArray[Math.floor(Math.random() * props.colorArray.length)]))
        .toArray()))
        ,[props.total, MemoColor]
    )


    const dummy = useMemo(() => new Object3D(), []);

    const positions = useMemo(() =>
    {
        let map = 
        {
            pos: [],
            velX: [],
            velY: [],
            velZ: [],
            dest: []
        };

        CreateStartingPositions(map, TOTAL, xVelocityVariance, yVelocityVariance, zVelocityVariance, ColorArray, MemoColor);

        return map;
    }, [TOTAL]);


    const [posMap, setMap] = useState(JSON.parse(JSON.stringify(positions)));
    useEffect(() =>
    {
        endPos.current = props.position[1] + 200;
        let i = 0;
        let count = 0;
        let len = posMap.pos.length;

        for(i; i < len; i+=3)
        {
            dummy.position.set(posMap.pos[i], posMap.pos[i + 1], posMap.pos[i + 2]);
            dummy.updateMatrix();
            ref.current.setMatrixAt(count, dummy.matrix);
            count += 1;
        }
        ref.current.instanceMatrix.needsUpdate = true;
    }, [dummy, posMap])

    let j;
    let len = 0;
    if(posMap !== 0) len = posMap.pos.length;
    let count = 0;

    useFrame((_, delta) =>
    {

        ref.current.visible = false;
        if(scroll.offset > 0.73 && scroll.offset < 0.79)
        {
            ref.current.visible = true;
            if(iterations.current === 0) ref.current.material.opacity = 1;

            if(ref.current.position.y < endPos.current)
            {
                ref.current.position.y += delta * 200;
            }

            else
            {
                count = 0;
                for(j = 0; j < len; j+=3)
                {
                    MoveParticles(posMap, count, j, dummy);
                    ref.current.setMatrixAt(count, dummy.matrix)
                    UpdatePositions(posMap, props.decayRate, count);
                    count += 1;
                }
                ref.current.instanceMatrix.needsUpdate = true;
                
                if(iterations.current > props.decayStart)
                {
                    ref.current.material.opacity -= props.opacityDrop;
                }
                iterations.current += 1;
        
                if(ref.current.material.opacity <= 0)
                {
                    iterations.current = 0;
                    setMap(JSON.parse(JSON.stringify(positions)));
                    ref.current.position.x = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 1000;
                    ref.current.position.y = 900 + Math.random() * 500
                    ref.current.position.z = 800 - (Math.random() * 1000);
                    endPos.current = ref.current.position.y + 200;
        
                }
            }

            
        }

    })
    

    return(
        <instancedMesh ref = {ref} {...props} args = {[null, null, (props.total)]} rotation = {[1, 0.5, 0]}>
            <sphereGeometry args = {[0.5]}>
                <instancedBufferAttribute attach = "attributes-color" args = {[ColorArray, 3]}/>
            </sphereGeometry>
            <meshBasicMaterial  toneMapped = {false} vertexColors transparent />
        </instancedMesh>
    )
}

function CreateStartingPositions(map, TOTAL, xVelocityVariance, yVelocityVariance, zVelocityVariance, ColorArray, MemoColor)
{
    let x, y, z;
    let VX, VY, VZ;

    var hex = 0;
    let scale;

    for(let i = 0; i < TOTAL * 3; i+= 3)
    {
        x = 0;
        y = 0; 
        z = 0;

        map.pos.push(x);
        map.pos.push(y);
        map.pos.push(z);

        hex = rgbToHex(ColorArray[i], ColorArray[ i + 1 ], ColorArray[i + 2])

        console.log(ColorArray[i].toString(16) + ColorArray[i + 1].toString(16) + ColorArray[i + 2].toString(16))

        
       // 7274750
        // 13737960

        scale = 1;

        if(hex === '#0.a3398c0.58c1990.ce946c')
        {
            scale = 0.5;
        }

        VX = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * xVelocityVariance) * scale;
        VY = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * yVelocityVariance) * scale;
        VZ = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * zVelocityVariance) * scale;
        

        map.velX.push(VX);
        map.velY.push(VY);
        map.velZ.push(VZ);

    }

    return map;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function MoveParticles(map, count, j, dummy)
{ 
    map.pos[j] += map.velX[count];
    map.pos[j + 1] += map.velY[count];
    map.pos[j + 2] += map.velZ[count];

    dummy.position.set(0,0,0);
    dummy.position.set(map.pos[j], map.pos[ j + 1], map.pos[ j + 2 ]);
    dummy.updateMatrix();
}

function UpdatePositions(map, decayRate, j)
{

    let l = decayRate.length;


    if(l === 1)
    {

        map.velX[j] *= decayRate[0];
        map.velY[j] *= decayRate[0];
        map.velY[j] -= 0.5;
        map.velZ[j] *= decayRate[0];
    }
    else
    {
        map.velX[j] *= decayRate[0];
        map.velY[j] *= decayRate[1];
        if(map.velY[j] > 0)
        {
            map.velY[j] -= 0.005;
        }
        else
        {
            map.velY[j] -= 0.003;
        }

        map.velZ[j] *= decayRate[2];
    }

}