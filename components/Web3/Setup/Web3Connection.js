import {ethers} from "ethers"

export const ConnectWallet = async() =>
{
    if(window.ethereum !== "undefined")
    {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        try
        {
            const accounts = await provider.send("eth_requestAccounts", [])
            return accounts[0];
        }
        catch(err)
        {
            return undefined;
        }
    }
}
