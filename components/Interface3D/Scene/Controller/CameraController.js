import { useThree, useFrame } from "@react-three/fiber";
import {useRef} from 'react'
import { easeInOutQuad } from "../../../Scene/Controllers/CameraController";
import { lerp } from "three/src/math/MathUtils";


export default function CameraController(props)
{
    const SPEED = 1;
    const page = useRef(-1);
    const progress = useRef(0);
    const start = useRef(0)
    const startZ = useRef(0)
    let ev;


    const endPositions = [0, 60]
    const endPositionsZ = [0, -10]
    const dockedPositions = [60, 65];
    const ENDLEN = endPositions.length;

    const {camera} = useThree();
    camera.far = 5550;
    camera.updateProjectionMatrix()

    useFrame((_, delta) =>
    {
        if(props.page < 1) return;
        
        if(page.current != props.page)
        {
            progress.current = 0;
            page.current = props.page;
            start.current = camera.position.y;
            startZ.current = camera.position.z

        }
        if(progress.current < 10)
        {
            ev = easeInOutQuad(progress.current / 10);
            progress.current += delta * SPEED;
            camera.position.y = lerp(start.current, endPositions[page.current], ev);
            camera.position.z = lerp(startZ.current, endPositionsZ[page.current], ev);
        }

        if(props.docked === true && camera.position.y < 77.5)
        {
            camera.position.y += delta * 15;
        }

        if(props.docked === false && camera.position.y > 60)
        {
            camera.position.y -= delta * 15;
        }

        if(camera.position.y > 77.5)
        {
            camera.position.y = 77.5;
        }

        if(camera.position.y < 60 && progress.current >= 10)
        {
            camera.position.y = 60;
        }

        if(progress.current >= 10)
        {
            camera.position.z = endPositionsZ[page.current]
        }

    })
}