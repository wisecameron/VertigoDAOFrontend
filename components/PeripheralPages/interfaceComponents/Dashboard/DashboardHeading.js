import React, {useState} from 'react'
import {Tag, Row} from '../Misc/StyledComponentsSheet'
import { GetVERTBalance } from '../../../Web3/Setup/FetchBasicContractData'
import lock from '../../../../assets/lock2.png'

export default function DashboardHeading(props)
{
    const [bal, setBal] = useState(0)

    const HandleClick = (page) =>
    {
        if(props.profileId === "")
        {
            return;
        }

        props.setPage(page)
    }

    const loadBalance = async() =>
    {
        let bal = await GetVERTBalance()
        setBal(bal)
    }

    if(props.connected)
    {
        loadBalance()
    }

    let balance = (
        <></>
    )

    let lockDynamic = (
        <div>
            <img src = {lock} alt = "lock" style = {{width: "1vmax", marginTop: "1vmax", marginRight: "0.5vmax"}} />
        </div>
    )

    if(props.connected && props.profileId !== "")
    {
        lockDynamic = <div />
        balance = (
            <Tag style = {{color: "white", marginLeft: "2vmax"}}>Token Balance: <i style = {{color: "#85bb65"}}>{parseInt(bal).toLocaleString()}</i></Tag>
        )
    }


    return(
        <Row {...props} style = {{zIndex: 200, marginLeft: "6vw", marginTop: "1vmax"}} className = "fontLink">
            <Row>
                {lockDynamic}
                <Tag onClick = {() => HandleClick("dashboard")} style = {{cursor: "pointer", color: (props.page === "dashboard" && props.profileId !== "") ? "grey" : ""}}>Dashboard</Tag>
            </Row>
            <Row style = {{marginLeft: "2vmax"}}>
                {lockDynamic}
                <Tag onClick = {() => HandleClick("properties")} style = {{cursor: "pointer", color: (props.page === "properties") ? "grey" : ""}}>Properties</Tag>
            </Row>
            <Row style = {{marginLeft: "2vmax"}}>
                {lockDynamic}
                <Tag onClick = {() => HandleClick("staking")} style = {{ cursor: "pointer", color: (props.page === "staking") ? "grey" : ""}}>Staking</Tag>
            </Row>
            {balance}
        </Row>
    )
}