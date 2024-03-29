import {useFrame} from '@react-three/fiber'
import { useEffect, useMemo, useCallback, useRef } from 'react'
import { Vector2, Color } from 'three';
import { VertexShader, FragmentShader } from './Shaders/bgshaders';
import { VX, FS } from './Shaders/FractalDocPage';

export default function Background(props)
{
    const mesh = useRef()
    const mesh1 = useRef()

    const mousePosition = useRef({x: 0, y: 0});

    const updateMousePosition = useCallback((e) =>
    {
        mousePosition.current = {x: e.pageX, y: e.pageY}
    }, [])

    const dummy =  useMemo(() => new Vector2(0.0, 0.0));

    const uniforms = useMemo(() => ({
        u_resolution: {value: new Vector2(window.innerWidth, window.innerHeight)},
        u_mouse: {value: new Vector2(0.0, 0.0)},
        u_time: {value: 0.0},
        u_colorA: {value: new Color("black")},
        u_colorB: {value: new Color("black")},
        u_bg: {value: new Color("black")},
    }), []);

    useEffect(() =>
    {
        window.addEventListener('mousemove', updateMousePosition, false);

        return() =>
        {
            window.removeEventListener('mousemove', updateMousePosition, false)
        };
    }, [updateMousePosition])

    useFrame((state) =>
    {
        mesh.current.material.uniforms.u_time.value = state.clock.getElapsedTime();

        dummy.setX(mousePosition.current.x);
        dummy.setY(mousePosition.current.y);

        mesh.current.material.uniforms.u_mouse.value = dummy;
    })

    return(
        <>
            <mesh ref = {mesh} {...props}>
                <planeGeometry args = {[10,10,15,10]} />
                <shaderMaterial 
                    vertexShader={VX}
                    fragmentShader = {FS}
                    uniforms = {uniforms}
                    transparent = {true}
                    wireframe = {false}
                />
            </mesh>

        </>
    )
}

export function BackgroundOG(props)
{
    const mesh = useRef()
    const mesh1 = useRef()

    const mousePosition = useRef({x: 0, y: 0});

    const updateMousePosition = useCallback((e) =>
    {
        mousePosition.current = {x: e.pageX, y: e.pageY}
    }, [])

    const dummy =  useMemo(() => new Vector2(0.0, 0.0));

    const uniforms = useMemo(() => ({
        u_resolution: {value: new Vector2(window.innerWidth, window.innerHeight)},
        u_mouse: {value: new Vector2(0.0, 0.0)},
        u_time: {value: 0.0},
        u_colorA: {value: new Color("black")},
        u_colorB: {value: new Color("black")},
        u_bg: {value: new Color("black")},
    }), []);

    useEffect(() =>
    {
        window.addEventListener('mousemove', updateMousePosition, false);

        return() =>
        {
            window.removeEventListener('mousemove', updateMousePosition, false)
        };
    }, [updateMousePosition])

    useFrame((state) =>
    {
        mesh.current.material.uniforms.u_time.value = state.clock.getElapsedTime();

        dummy.setX(mousePosition.current.x);
        dummy.setY(mousePosition.current.y);

        mesh.current.material.uniforms.u_mouse.value = dummy;
    })

    return(
        <>
            <mesh ref = {mesh} {...props}>
                <planeGeometry args = {[10,10,150,100]} />
                <shaderMaterial 
                    vertexShader={VertexShader}
                    fragmentShader = {FragmentShader}
                    uniforms = {uniforms}
                    transparent = {true}
                    wireframe = {true}
                />
            </mesh>

        </>
    )
}