import {useLoader, useFrame, useThree} from '@react-three/fiber'
import { useState, useRef, useEffect, useMemo } from 'react'
import { vertexShader, fragmentShader } from './shaders/PlanetShaders';
import { BufferAttribute, DoubleSide, IcosahedronGeometry, ShaderMaterial, SphereGeometry, Vector2, Vector4 } from 'three';
import { easeInOutQuad } from '../../../Scene/Controllers/CameraController';
import { lerp } from 'three/src/math/MathUtils';

export default function ExplodingPlanet(props)
{
    const LIGHT_SPREAD_CAP = 0.25;

    const mouse = useRef(new Vector2())
    const animation = useRef(0);
    const ref = useRef()

    const newY = -15;
    const newZ = -200;


    //menu background
    const DIST_SPANNED = 400;
    const HEIGHT = 400;
    const DEPTHPOS = -100;

    let ev = 0;

    

    /*          Geometry & Material         */
    const [geometry, setGeometry] = useState(null);
    const lightSpread = useRef(false);

    const shaderMat = useMemo(() =>
    {
       return new ShaderMaterial({
            extensions: 
            {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            uniforms: {
                timeCapped: {value: 0},
                time: {value: 0},
                textureMap: {value: props.texture},
                spreadcap: {value: LIGHT_SPREAD_CAP},
                phase2: {value: 0},
                mouseX: {value: mouse.current.x},
                mouseY: {value: mouse.current.y}
            },
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            side: DoubleSide,
            wireframe: false,
        });
    }, [])

    /*          Updated Positions           */
    const handlePositions = useMemo(() =>
    {
        if(geometry === null) return;
        const normals = geometry.getAttribute('normal').array;
        const positions = geometry.getAttribute('position').array;
        let length = positions.length;
    
        let np = new Float32Array(length)
        let menuPositions = new Float32Array(length);
        let randoms = new Float32Array(length / 3);
        const fallTimes = new Float32Array(length / 3);
        let r = 0;
        let fallTime = 0;
        let count = 0;

        for(let i = 0; i < length; i+=3)
        {
            if(count % 3 === 0) r = Math.max(Math.random(), .2);
            if(count % 3 === 0) fallTime = 4 + (Math.random() * 3);
            np[i] = positions[i] + (Math.random() * (normals[i] * .3));
            np[i + 1] = positions[i + 1] + (Math.random() * (normals[i + 1] * .3));
            np[i + 2] = positions[i + 2] + (Math.random() * (normals[i + 2] * .3));

            fallTimes[count] = fallTime;
            randoms[count] = r
            count += 1;
        }

        let moveFactor;
        count = 0;

        for(let i = 0; i < length; i+=3)
        {
            if(count % 3 === 0) moveFactor = Math.random() * 10;

            menuPositions[i] = np[i] * moveFactor
            menuPositions[i + 1] = np[i + 1] * -(moveFactor + 2);
            menuPositions[i + 2] = np[i + 2] * -moveFactor;
            count += 1;
        }


        return {np: np, p: positions, r: randoms, mp: menuPositions, fallTime: fallTimes};
    }, [geometry])

    useEffect(() =>
    {
        const handleMove = (e) =>
        {
            if(ref.current === undefined) return;
            mouse.current.x = ((e.clientX / window.innerWidth) * 2) - 1;
            mouse.current.y = ( -(e.clientY / window.innerHeight) * 2) + 1;

            ref.current.material.uniforms.mouseX.value = mouse.current.x;
            ref.current.material.uniforms.mouseY.value = mouse.current.y;
            ref.current.material.uniforms.mouseX.needsUpdate = true;
            ref.current.material.uniforms.mouseY.needsUpdate = true;
        }

        setGeometry(new IcosahedronGeometry(3, 16, 16));

        window.addEventListener('mousemove',handleMove, false);

        return() =>
        {
            window.removeEventListener('mousemove', handleMove, false);
        }
    }, [])



    useFrame((_, delta) =>
    {
        if(geometry === null) return;
        ref.current.rotation.y += delta * .02;

        if(!lightSpread.current)
        {
            if(ref.current.material.uniforms.timeCapped.value < LIGHT_SPREAD_CAP)
            {
                ref.current.material.uniforms.timeCapped.value = ref.current.material.uniforms.timeCapped.value + (delta *.04);
            }
            else if(!lightSpread.current) lightSpread.current = true;
        }
        else
        {
            if(ref.current.material.uniforms.timeCapped.value  != LIGHT_SPREAD_CAP) ref.current.material.uniforms.timeCapped.value = LIGHT_SPREAD_CAP;
        }

        if(props.page > 0)
        {
            ref.current.material.uniforms.time.value = ref.current.material.uniforms.time.value + delta * .4;
        } 

        if(props.page > 0 && animation.current < 160)
        {
            ev = easeInOutQuad(animation.current / 160);
            animation.current += delta * 30;

            ref.current.position.y = lerp(-100, 60, ev);
            ref.current.position.z = lerp(-300, -200, ev);
        }
    })


    if(geometry === null) return;

    geometry.setAttribute('updatedPosition', new BufferAttribute(handlePositions.np, 3));
    geometry.setAttribute('oldPosition', new BufferAttribute(handlePositions.p, 3));
    geometry.setAttribute('random', new BufferAttribute(handlePositions.r, 1));
    geometry.setAttribute('menuPos', new BufferAttribute(handlePositions.mp, 3));
    geometry.setAttribute('fallTime', new BufferAttribute(handlePositions.fallTime, 1));


    return <mesh ref = {ref} {...props} material = {shaderMat} geometry = {geometry} />

    
}

