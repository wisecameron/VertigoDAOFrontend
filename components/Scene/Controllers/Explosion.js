import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import OptimizedBoom from "../Fireworks/OptimizedBoom";

export default function Explosion(props)
{
    const [vis, setVis] = useState(false)

    useFrame(() =>
    {
        if(props.vis != vis) 
        {
            setVis(!vis);
        }
    })

    //return null;

    if(!vis || props.graphics === 1) return null;

    else if(vis && props.graphics === 2)
    {
        return(
            <>
    
                <OptimizedBoom 
                total = {2000} 
                colorArray = {["#6f00ff", "#d19fe8", "#ffffff", "#e3bbed", "#df2bff", "#6600ff", "#360087", "#003185", "#efb5ff", "#c9c9c9"]} 
                position = {[-1500, 2200, 4100]} 
                duration = {4000} 
                scales = {[1.8, 1.15, 4.65, 2.1, 0.03, 0.07, 0.0021, 0.024, 0.05, 0.04]}
                offsetLow = {.5}
                offsetHigh = {0.7}
                dist = {[40000, 40000, 40000]}
                scale = {60}
                delayTimer = {3.5}
                />
    
            <OptimizedBoom 
                total = {300} 
                colorArray = {["#94bdff", "#5e9cff", "#c4ecff"]} 
                position = {[-1500, 2200, 4100]} 
                duration = {16000} 
                scales = {[1,2,3]}
                offsetLow = {0.5}
                offsetHigh = {0.7}
                dist = {[1900, 400, 1900]}
                scale = {40}
                delayTimer = {2.5}
                />
    
                <OptimizedBoom 
                total = {500} 
                colorArray = {["#cee1eb", "#8cbcd4", "#52639e"]} 
                position = {[-1500, 2200, 4100]} 
                duration = {16000} 
                scales = {[1,2,3]}
                offsetLow = {0.5}
                offsetHigh = {0.7}
                dist = {[400, 400, 10000]}
                scale = {60}
                delayTimer = {1}
                />
            </>
    
            
        )
    }

    return(
        <>

            <OptimizedBoom 
            total = {4000} 
            colorArray = {["#6f00ff", "#d19fe8", "#ffffff", "#e3bbed", "#df2bff", "#6600ff", "#360087", "#003185", "#efb5ff", "#c9c9c9"]} 
            position = {[-1500, 2200, 4100]} 
            duration = {4000} 
            scales = {[1.8, 1.15, 4.65, 2.1, 0.03, 0.07, 0.0021, 0.024, 0.05, 0.04]}
            offsetLow = {.5}
            offsetHigh = {0.7}
            dist = {[40000, 40000, 40000]}
            scale = {60}
            delayTimer = {3.5}
            />

        <OptimizedBoom 
            total = {300} 
            colorArray = {["#94bdff", "#5e9cff", "#c4ecff"]} 
            position = {[-1500, 2200, 4100]} 
            duration = {16000} 
            scales = {[1,2,3]}
            offsetLow = {0.5}
            offsetHigh = {0.7}
            dist = {[1900, 400, 1900]}
            scale = {40}
            delayTimer = {2.5}
            />

            <OptimizedBoom 
            total = {1000} 
            colorArray = {["#cee1eb", "#8cbcd4", "#52639e"]} 
            position = {[-1500, 2200, 4100]} 
            duration = {16000} 
            scales = {[1,2,3]}
            offsetLow = {0.5}
            offsetHigh = {0.7}
            dist = {[400, 400, 10000]}
            scale = {60}
            delayTimer = {1}
            />
        </>

        
    )
}