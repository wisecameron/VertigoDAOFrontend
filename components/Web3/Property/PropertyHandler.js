import { vert } from '../Setup/ContractManager2'

export async function BuyProperty(profileId, DarkEnergy)
{
    if(DarkEnergy)
    {
        try
        {
            await vert.buy_vcash_property(profileId)
        }catch(err){}
        return;
    }
    try
    {
        await vert.buy_vertigo_property(profileId)
    }catch(err){}
}
