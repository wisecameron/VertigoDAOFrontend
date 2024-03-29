import React from 'react'
import '../../../../css/App.css'
import {BalanceBoxContainer} from './StyledComponentsSheet'

export default function BalanceBox(props)
{
    return(
        <BalanceBoxContainer>
            <h1 className = "fontLink" style = {{color: "white", fontSize: "3vh"}}>{props.bal}</h1>
        </BalanceBoxContainer>
    )
}

export function BalanceBoxVERT(props)
{
    return(
        <BalanceBoxContainer>
            <h1 style = {{color: "white", fontSize: "3vh"}}>a</h1>
        </BalanceBoxContainer>
    )
}