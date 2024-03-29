/*
    Functions that interact with InitConnection raw contract callers:
    used to populate interface data.
*/

import { CheckConnected, GetAccount } from "./InitConnection";



export const Load = async(setWeb3) =>
{
    let result = await CheckConnected();
    setWeb3(result);
}

export const AccountLoader = async() =>
{
    let userAddress = await GetAccount()

    return userAddress;
}
