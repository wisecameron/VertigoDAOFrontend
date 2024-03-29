import { GetAccount } from '../Init/InitConnection';
import { provider } from './ContractManager2'

export function BoolHandler(input)
{
    if(input === "true")
    {
        return true
    }
    return false
}

export async function CheckConnected(props)
{
    let result;

    if(provider === 'undefined')
    {
        return false;
    }

    await provider.listAccounts().then(res =>
        {
            result = res;
        })
    return !(result.length === 0);
}

export async function ConnectWallet(props)
{
    var accounts;

    if(await CheckConnected() === false)
    {
        try
        {
            accounts = await provider.send("eth_requestAccounts", [])
        }
        catch(err)
        {
            console.log(err)
        }
    
        if(accounts.length > 0)
        {
            //window.location.reload()
            return accounts[0]
        }    
    }
    else
    {
        let account = await GetAccount()
        return account;
    }


    return ""
}