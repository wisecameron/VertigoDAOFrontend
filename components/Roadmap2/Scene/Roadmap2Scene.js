import { Canvas, useFrame } from "@react-three/fiber";
import BuildingPlotAlgorithmWrapper from "./Plots/BuildingPlotAlgorithmWrapper";
import Base from "./Base/Base";
import Rain from "./Sky/Rain";
import CameraSettingsWrapper from "./Camera/CameraSettingsWrapper";
import VehicleWrapper from "./Vehicles/VehicleWrapper";
import SkyHandler from "./Sky/SkyHandler";
import AlienPlanet from "./Sky/AlienPlanet";
import MovingLight from "./Sky/MovingLight";
import HelicopterPOV from "./Sky/HelicopterFPS";
import { Scroll, ScrollControls } from "@react-three/drei";
import RoadmapHTMLHandler from "./HTML/RoadmapHTMLHandler";
import { StarsRoadmap } from "./Sky/StarsRoadmap";
import CloudHandler from './Sky/Cloud'
import {EffectComposer, Vignette, Noise} from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";

export default function Roadmap2Scene(props)
{

    //scrollControls settings.
    const pages = 15.25;
    //<fog attach = "fog" color = "black" near={100} far = {1500}/>             <pointLight  intensity = {1} position = {[0, 500, -400]} color = "white"/>


    return(
        <Canvas>
            <BuildingPlotAlgorithmWrapper />
            <VehicleWrapper />
            <Base position = {[0, -15, -4500]} />
            <SkyHandler />
            <MovingLight />
            <CloudHandler />

            <ScrollControls pages={pages} damping = {pages}>
                <CameraSettingsWrapper pages = {pages}/>
                <Scroll html>
                    <RoadmapHTMLHandler pages = {pages}/>
                </Scroll>
            </ScrollControls>


        </Canvas>
    )
}

export function Roadmap2SceneGeneric(props)
{

    //scrollControls settings.
    const pages = 15.25;
    //<fog attach = "fog" color = "black" near={100} far = {1500}/>             <pointLight  intensity = {1} position = {[0, 500, -400]} color = "white"/>


    if(props.vis !== true)
    {
        return null;
    }

    return(
        <>
            <SkyHandler />
            <BuildingPlotAlgorithmWrapper />
            <VehicleWrapper />
            <Base position = {[0, -15, -4500]} />
            <MovingLight />
        </>
    )
}


