import { CheckConnected, GetAccount } from "../Init/InitConnection";
import { vert } from './ContractManager2'

export async function GetVERTBalance()
{
    if(CheckConnected() === false) return;
    const account = await GetAccount();

    let balance;

    await vert.balanceOf(account).then(res =>
        {
            balance = res.toString()
        })

    return parseInt(balance) / 1e18
}

export async function GetCurrentContractPassword()
{
    let result;
    try
    {
        await vert.password().then((res) =>
        {
            result = res.toString()
        })
    }catch(err){console.log(err)}
    return result;
}

export async function GetVertigoManager()
{
    let result;

    try
    {
        await vert.get_vertigo_manager().then(res => {result = res})
    }catch(err){console.log(err)}
    
    return result;
}