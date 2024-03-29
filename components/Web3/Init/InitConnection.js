/*
    These functions are called in Interface.js to set up the initial
    dashboard state by caching user account and checking contract state.

*/

import {provider } from '../Setup/ContractManager2';

/*

*/
export async function CheckConnected()
{
    let result;

    await provider.listAccounts().then(res =>
    {
        result = res;
    })
    return !(result.length === 0);
}

export async function GetAccount()
{
    let result;
    await provider.listAccounts().then(res =>
        {
            result = res;
        })

    return(result[0].toString())
}