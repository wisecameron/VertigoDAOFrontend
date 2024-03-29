import { vert, profile, property } from '../Setup/ContractManager2'


export async function OwnerSetValueHandler(id, addresses, newParam)
{
    try
    {
        await vert.owner_set_value_handler(id, addresses, newParam);
    }
    catch(err) {console.log(err)}
}

export async function SetUpPeripheralProfile(vertigoContract, propertyContract)
{
    try
    {
        await profile.set_periphery_contracts(vertigoContract, propertyContract)
    }
    catch(err){console.log(err)}
}
export async function SetUpPeripheralProperty(vertigoContract, profileContract)
{
    try
    {
        await property.set_periphery_contracts(vertigoContract, profileContract);
    }
    catch(err){console.log(err)}
}


export async function GetOwnerAddress()
{
    let result;

    try
    {
        await vert.get_owner().then((res) =>
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