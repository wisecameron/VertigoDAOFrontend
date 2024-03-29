//NEW PAGE

import RectBord from  '../../../../assets/db/smallBorder.png'
import styled from "styled-components"
import { useState } from 'react'
import { GetTotalTokenPayoutAmount } from '../../../Web3/VertStaking/VertStakingHandler'
import { GetAccount } from '../../../Web3/Init/InitConnection'
import '../../../../css/App.css'
import { GetVertigoManager } from '../../../Web3/Setup/FetchBasicContractData'
import selected2 from '../../../../assets/db/selected2.png'
import { Row } from '../Pages/SupportingComponents/StyledComponents/CommonStyles'


const InfoBoxContainer = styled.div`
    width: 50vmax;
    height: 10vmax;
    background-size: 95%;
    background-repeat: no-repeat;
    margin-left: 5vmax;
    margin-top: -1vmax;
    display: flex;
    flex-direction: column;
`

const TagLine = styled.h1`
    color: white;
    font-size: 1.1vmax;
`

//address, weekly payout amount, ...
export default function UserInfoBox(props)
{
    const [account, setAccount] = useState(0)
    const [totalDistributedThisWeek, setTotalDistributedThisWeek] = useState(0)
    const [manager, setManager] = useState(0)

    const load = async() =>
    {
        let res = await GetAccount();
        let res2 = await GetTotalTokenPayoutAmount();
        let res3 = await GetVertigoManager();
        setAccount(res);
        setTotalDistributedThisWeek(res2);
        setManager(res3);
    }

    if(account == 0 && props.web3Connected === true)
    {
        load()
    }


    if(!props.web3Connected)
    {
        return(
            <InfoBoxContainer className = "fontLink" style = {{backgroundImage: `url(${RectBord})`, opacity: 0}} />
        )
    }

    return(
        <>
        <InfoBoxContainer className = "fontLink" style = {{backgroundImage: `url(${RectBord})`, opacity: (props.web3Connected) ? 1:0}}>
            <Row style = {{marginTop: "1.3vmax",}}>
                <img style = {{width: "1.5vmax", height: "1.5vmax", marginLeft: "5.1vmax"}} src = {selected2} alt = "styled icon" />
                <TagLine style = {{marginLeft: "0.5vmax",  fontSize: "1.1vmax", marginTop: "0.1vmax"}}>Dark Energy Staking Pool</TagLine>
            </Row>
            <TagLine style = {{marginLeft: "5.3vmax", marginTop: "1.5vmax"}}>This Week's Token Payout : <b style = {{color: "grey"}}>{(parseInt(totalDistributedThisWeek) / 1e18).toLocaleString()}</b></TagLine>
            <TagLine style = {{marginLeft: "5.3vmax", marginTop: "-0.1vmax"}}>Total Dark Energy Staked : <b style = {{color: "grey"}}>{(parseInt(manager.totalVCashStaked)).toLocaleString()}</b></TagLine>

        </InfoBoxContainer>
        </>
    )
}