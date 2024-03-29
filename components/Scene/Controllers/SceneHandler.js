import { useFrame } from "@react-three/fiber";
import { BuildingLoader, BuildingLoader2 } from "../InitialScene/BuildingScene";
import { useRef, useState } from "react";
import { useScroll } from "@react-three/drei";
import Fireworks2 from "../Fireworks/Fireworks2";
import FireworksManager from "../Fireworks/FireworkManager";
import Planet from "../Section2/Planet";
import Stars from "../Section2/Stars";
import Trails from "../Section2/Trails";
import RedWall from "../Section2/RedWall";
import Explosion from "./Explosion";
import Scene5Manager from "../Scene5/Scene5Manager";
import Scene5Planet from "../Scene5/Scene5Planet";
import { ConvoyOpt } from "../Scene5/ConvoyOpt";
import Nebula from "../Scene5/Nebula";
import { MasterStars } from "../StarScene/MasterStars";
import Atmosphere from "../StarScene/Atmosphere";
import { Roadmap2SceneGeneric } from "../../Roadmap2/Scene/Roadmap2Scene";

/*
    scene
    graphics


*/
export default function SceneHandler(props)
{
    const scroll = useScroll();

    const [scene, setScene] = useState(0);

    let offset;

    useFrame((_, delta) =>
    {
        if(document.hidden) return;
        
        offset = scroll.offset;
        if(offset > 1) offset = 0;

        if(offset < 0.16)
        {
            if(!(scene === 1)) setScene(1);
        }
        else if(offset < .34)
        {
            if(!(scene === 2)) setScene(2);
        }
        else if(offset < .52)
        {
            if(!(scene === 3)) setScene(3);
        }
        else if(offset < .70)
        {
            if(!(scene === 4)) setScene(4);
        }
        else if(offset < .88)
        {
            if(!(scene === 5)) setScene(5);
        }
        else
        {
            if(!(scene === 6)) setScene(6);
        }
    })

    return(
        <>
            <BuildingLoader graphics = {props.graphics} vis = {scene === 1} lightVis = {scene === 1 || scene === 2 || scene === 3} corrupted = {false} wait = {6.4} lightCol = "#b042f5"/>
            <Planet vis = {scene === 2 || scene === 3 || scene === 4} scene = {scene} graphics = {props.graphics}/>
            <Stars total = {4000} vis = {scene === 2 || scene === 3} position = {[-12000, 31000, -2000]} graphics = {props.graphics}/>
            <Trails vis = {scene === 2} graphics = {props.graphics}/>
            <Explosion vis = {true} graphics = {props.graphics}/>
            <Scene5Planet vis = {scene === 5} position = {[4900,1500,-8500]} scene = {scene} />
            <ConvoyOpt total = {2000} vis =  {scene === 5} graphics = {props.graphics} position = {[-5000, 0, 900]} neg = {true}/>
            <ConvoyOpt total = {2000} vis =  {scene === 5} graphics = {props.graphics} position = {[-200000, 2000, -17500]} />
            <MasterStars colorArray = {["#7db7ff", "#8d54ff", "#ffffff", "#a87dff"]} count = {1000} vis = {scene === 5} position = {[0, -2500, 0]} graphics = {props.graphics}/>
            <Nebula vis = {scene === 5} position = {[-5000,-15000,-28000]}/>
            <Roadmap2SceneGeneric vis = {scene === 6}/>
        </>
    )
}