import RoadEdges from "../Acts/Act1/RoadEdges";
import RoadCaution from "../Acts/Act1/RoadCaution";
import { StreetLightLoader } from "../Acts/Act1/Streetlights";
import {useFrame, useThree} from '@react-three/fiber'
import { useState } from "react";

export function TileStepper(props)
{
    const {camera} = useThree()
    const [Tile1Limit, setTile1Limit] = useState(-500);
    const [Tile2Limit, setTile2Limit] = useState(-1100);

    let currZ = 0;

    
    useFrame(() =>
    {
        currZ = camera.position.z;

        if(currZ < Tile1Limit - 100)
        {
            setTile1Limit(Tile2Limit - 600)
        }
        else if(currZ < Tile2Limit - 100)
        {
            setTile2Limit(Tile1Limit - 600)
        }
    })
    

    return(
        <>
            <Tile position = {[props.x,props.y,Tile1Limit + 600]} hops = {1} startPosStreetLight = {-2} endPosStreetLight = {4}/>
            <Tile position = {[props.x,props.y,Tile2Limit + 600]} hops = {2} startPosStreetLight = {-2} endPosStreetLight = {4}/>
        </>
    )
}

//

export default function Tile(props)
{
    return(
        <>
            <group {...props} frustumCulled = {true}>
                <RoadCaution />
                <RoadEdges color = {"#75E6DA"}/>
                <StreetLightLoader startPos = {props.startPosStreetLight} maxPos = {props.endPosStreetLight} />


            </group>
        </>
    )
}