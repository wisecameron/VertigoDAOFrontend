import { vert, profile, property} from '../Setup/ContractManager2'
import { BoolHandler } from '../Setup/MiscWeb3Utilities';

export async function GetOwnerAddress()
{
    let result;

    try
    {
        await vert.owner().then((res) =>
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

export async function GetPropertyEnabled()
{
    let result;

    try
    {
        await property.check_enabled().then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    return(BoolHandler(result))
}

export async function GetProfileEnabled()
{
    let result;

    try
    {
        await profile.check_enabled().then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    return(BoolHandler(result))
}

export async function PublicViewBoolVertigo(id)
{
    let result; 

    try
    {
        await vert.public_view_bool(id).then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    return result;
}
