import Vehicle from '../../Vehicle'
import { useState } from "react";


export default function Act1EventManager(props)
{
    const [vehicleZ, setVehicleZ] = useState(-10)

    if(vehicleZ > 300)
    {
        props.setCurrentAct(props.currentAct + 1)
    }
    return(
        <>
            <Vehicle 
            setVehicleZ = {(newValue) => {setVehicleZ(newValue)}}
            vehicleZ = {vehicleZ} />
        </>
    )
}