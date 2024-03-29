import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import InvertedBuildings, {InvertedBuildingsBottom, InvertedBuildingsIntro, InvertedBuildingsFar} from './Tile/InvertedBuildings'
import { TileStepper } from './Tile/Tile'
import { ConvoySmallNeg, ConvoySmallPos, ConvoyHuge } from './RoadmapConvoy'
import  { RoadSignGLB } from './Acts/Act1/RoadSign'
import { TextHandler } from './Acts/ActText'
import Vehicle from './VehicleManager/Vehicle'


export default function ExperienceScene(props)
{
    const frameloopSetting = (props.graphics > 1) ? 'always':'never';
    //tileStepper is responsible for over half of lag
    return(
        <>
            <Suspense>
                <Canvas  gl={{ alpha: false }} dpr={[1, 1.5]} frameloop = {frameloopSetting}>
                    <fog attach = "fog" args = {['grey', 5]} />
                    <color attach = "background" args = {["grey"]} />
                    <Vehicle />
                    <Environment preset = "city" />
                    <InvertedBuildings xSpan = {45} zSpan = {45} rotation = {[-Math.PI * 0.5, 0, 0]} position = {[0,0,-300]}/>

                    <InvertedBuildings xSpan = {45} zSpan = {45}/>
                    <InvertedBuildingsBottom xSpan = {45} zSpan = {45} rotLeft = {false}/>
                    <InvertedBuildingsFar xSpan = {45} zSpan = {45}  position = {[400,0,0]} rotation = {[-Math.PI * 0.5, 0, -Math.PI * 0.5]}/>
                    <TileStepper x ={0} y = {0}/>
                    <RoadSignGLB position = {[0, 12, -107]} scale = {2}/>
                    <TextHandler />
                    <ConvoySmallPos speed = {0.01} total = {1800} x = {-7} y = {5}/>
                    <ConvoySmallNeg speed = {0.01} total = {1800} x = {3} y = {5}/>

                    <EffectComposer multisampling={8}>
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0} intensity={0.2} />
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0} intensity={1} />
                    </EffectComposer>
                </Canvas>
            </Suspense>
        </>
    )
}
