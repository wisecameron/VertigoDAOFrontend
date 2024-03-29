import Rain from "./Rain"

export default function SkyHandler()
{
    /*
            <color attach = "background" args = {["#353535"]} />
            <fog attach = "fog" color = "#353535" near={100} far = {1100}/>
    */
    return(
        <>
            <color attach = "background" args = {["black"]} />
            <fog attach = "fog" color = "black" near={0} far = {900}/>
            <Rain total = {6000} position = {[-1000,0,0]}/>
        </>
    )
}