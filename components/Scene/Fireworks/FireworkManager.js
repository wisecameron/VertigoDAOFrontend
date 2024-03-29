import Fireworks2 from "./Fireworks2";


export default function FireworksManager(props)
{
    if(props.vis)
    {
        return(
            <>
                  <Fireworks2 
                      total = {3000} 
                      colorArray = {["#6f00ff", "#d19fe8", "#ffffff", " #9a52a3", "#ff9c9c", "#ff6363"]} 
                      position = {[-1200, 1900, 1000]} 
                      duration = {8000} 
                      timeBetween = {300000} 
                      decayStart = {60000}
                      scales = {[1.8, 0.15, 4.65, 0.1, 0.03, 0.003]}
                      decayRate = {0.0015}
                      offsetLow = {0}
                      offsetHigh = {0.4}
                      explodeHeight = {400}
                      xV = {400}
                      yV = {300}
                      zV = {1}
                      dist = {[40000, 20000, 4000]}
                      scale = {40}
                      delayTimer = {0}
                      />
            </>
        )
    }

    return null;

}