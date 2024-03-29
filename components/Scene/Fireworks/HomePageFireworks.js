import Fireworks from "./Fireworks" 
import { FireworkHandler } from "./Fireworks"

export function HomePageFireworks(props)
{

    const colorArray = ["#6f00ff", "#d19fe8"]

    return(
        <>
            <Fireworks 
            total = {1000} 
            position = {[600, 1100, 800]}
            colorArray= {colorArray}
            decayRate = { [0.97,0.97,0.97] } 
            decayStart = { 100 }
            opacityDrop = { 0.005 }
            instances = {2}
            xVelocityVariance = { 8 }
            yVelocityVariance = { 8 }
            zVelocityVariance = { 8 }
            colorLen = {1}
            />
            <Fireworks 
            total = {1000} 
            position = {[800, 1000, 800]}
            colorArray= {colorArray}
            decayRate = { [0.97,0.97,0.97] } 
            decayStart = { 100 }
            opacityDrop = { 0.005 }
            instances = {2}
            xVelocityVariance = { 4 }
            yVelocityVariance = { 4 }
            zVelocityVariance = { 4 }
            colorLen = {1}
            />
        </>
    )
}
