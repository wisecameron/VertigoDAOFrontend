import { vert, profile } from '../Setup/ContractManager2'

export async function WeeklyReset(profileId)
{
    try
    {
        await vert.weekly_reset(profileId)
    }catch(err){console.log(err)}
}

export async function StakeDarkEnergy(profileId, quantity)
{
    try
    {
        await vert.stake_vcash(profileId, quantity)
    }catch(err){console.log(err)}
}

export async function ViewTotalPendingVCash(profileId)
{
    let result = "";
    try
    {
        await profile.view_total_pending_vcash_earnings(profileId).then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    return result;
}

export async function ViewTotalStakedDarkEnergy()
{
    let result = "";
    try
    {
        await vert.get_current_vcash_staked().then((res) =>
        {
            result = res.toString()
        })
    }
    catch(err){console.log(err)}

    return result;
}