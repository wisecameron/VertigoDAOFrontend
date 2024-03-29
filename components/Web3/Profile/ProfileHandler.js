import { vert, profile } from '../Setup/ContractManager2'
import { GetAccount } from '../Init/InitConnection';

/* PROFILE */
async function GetProfileOwner(profileId)
{
    let result;

    try
    {
        await profile.ownerOf(parseInt(profileId)).then((res) =>
            {
                result = res.toString()
                return result;
            })
    }
    catch(err)
    {
        console.log(err)
    }

    return result;
}


export async function ConnectProfile(profileId)
{
    var result = []

    if(profileId < 0)
    {
        return ""
    }

    let profileIDOwner = await GetProfileOwner(profileId)
    let account = await GetAccount()

    if(profileIDOwner !== account)
    {
        console.log("Owner of profile is not logged in!")
        return("")
    }

    try{
        await profile.get_profile_arr(profileId).then((res) =>
        {
            var count = 0;
            for(count; count < 11; count++)
            {
                result[count] = res[count].toString()
            }
        })
        return result;
    }
    catch(err)
    {
        console.log(err)
    }
    return ""
}


export async function MintedCount()
{
    var result = ""

    try
    {
        await profile._mintedCount().then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err)
    {
        console.log(err)
    }

    return result;
}

export async function MintProfile(props)
{
    var result = "";
    
    try
    {
        await vert.mint_profile().then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err)
    {
        console.log(err)
    }
    return result;
}

export async function CheckWhitelisted()
{
    let result;

    await profile.check_if_whitelisted().then(res => {result = res.toString()})

    return result;
}