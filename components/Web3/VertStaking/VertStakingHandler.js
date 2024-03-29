import { vert } from '../Setup/ContractManager2'
import { GetAccount } from '../Init/InitConnection';


export async function ViewPendingVertStakingDividends()
{
    let result = 0
    let address = await GetAccount()

    try
    {
        await vert.view_user_vert_dividends(address).then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    if(result === 0)
    {
        return 0
    }

    return parseInt(result) / 1e18;
}

export async function StakeVert(quantity)
{
    try
    {
        await vert.stake_vert(quantity)
    }
    catch(err){console.log(err)}
}

export async function UnstakeVert(amount)
{
    try
    {
        await vert.unstake_vert(amount);
    }catch(err){}
}

export async function GetUserVertStaked()
{
    let result;
    let account = await GetAccount()

    try
    {
        await vert.get_staked_vert_amount(account).then(res =>
            {
                result = res.toString();
            })
    }catch(err){}
    return result;
}


export async function RetrieveStakingDividends()
{
    try
    {
        await vert.retrieve_vert_staking_dividends()
    }
    catch(err){console.log(err)}
}

export async function GetTotalTokenPayoutAmount()
{
    let result;
    try
    {
        await vert.get_weekly_payout_amount().then(res => {
            result = res.toString()
        })
    }catch(err){console.log(err)}
    
    return result;
}

export async function GetCurrentStakedAmount()
{
    let result;

    try
    {
        await vert.get_current_staked_amount().then(res => {
            result = res.toString()
        })
    }catch(err){console.log(err)}
    
    return result;
}