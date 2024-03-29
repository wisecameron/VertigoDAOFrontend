import React from 'react'
import Tile from '../../Tile/Tile'
import {ConvoySmallNeg, ConvoySmallPos} from '../../RoadmapConvoy'
import RoadSign from './RoadSign'
import InvertedBuildings, {InvertedBuildingsBottom} from '../../Tile/InvertedBuildings'

//OPTIMIZED: RoadSign, 

export default function Act1SceneProps(props)
{
    return(
        <group rotation = {[0,0,0]}>
            <Tile startPosStreetLight = {-2} endPosStreetLight = {10} />
            <RoadSign />
            <ConvoySmallNeg total = {600} hops = {0} speed = {0.1}/>
            <ConvoySmallPos hops = {0} total = {1800} speed = {0.01} />
        </group>
    )
}