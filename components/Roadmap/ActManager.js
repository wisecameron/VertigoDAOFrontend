import React, {useState} from 'react'
import Act1 from './Acts/Act1/Act1'


export default function ActManager(props)
{
    const [currentAct, setCurrentAct] = useState(0);


    const Acts = [Act1, '', '']
    let ActLoader = Acts[0]

    return(
        <>
            <ActLoader />
        </>
    )
}