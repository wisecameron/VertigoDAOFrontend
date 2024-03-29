import { HeaderNoGraphics2 } from "../../HeaderFooter/Header";
import { PageStyles } from "../Styles/RoadmapPageStyles";
import Roadmap2Scene from "../Scene/Roadmap2Scene";
import { useState } from "react";


export default function RoadmapPage()
{
    const [pass, setPass] = useState('');

        /* password */
        if(pass.toLowerCase() !== 'privileged access vertigodao')
        {
          return(
            <div style = {{width: "100vw",
             height: "100vh", 
             background: "black", 
             display: "flex", 
             flexDirection: "column", 
             alignItems: "center" }}>
              <h1 style = {{marginTop: "30vh", color: "red"}}>VertigoDAO</h1>
              <h1 style = {{marginTop: "0vh", color: "white", textAlign: "center"}}>Enter password to proceed.</h1>
              <input 
                value = {pass} 
                onChange = {event => setPass(event.target.value)}
                style = {{width: "20vw", marginTop: "5vh"}}>
              </input>
            </div>
          )
        }
        /* password */

    return(
        <PageStyles>
            <HeaderNoGraphics2 page = "litepaper"/>
            <Roadmap2Scene />
        </PageStyles>
    )
}