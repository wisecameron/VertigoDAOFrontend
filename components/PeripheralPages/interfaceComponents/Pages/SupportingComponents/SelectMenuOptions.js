export const selectStylesUser = {
    valueContainer: () => ({
        padding: 10,
        display: "flex",
        alignItems: "center",
        position: "relative",
        maxWidth: "10vmax",
        height: "1vmax",
    }),
    menu: () => ({
        zIndex: 50,
        position: "fixed",
        backgroundColor: "#ffffff",
    }),
}

export const selectOptionsUser = (profileData, otherData) => 
{
    if(profileData === undefined ||  otherData === undefined) return;

    return(
    [
        {value: `${profileData[7]}`, label: "Dark Energy Balance"},
        {value: `${profileData[2]}`, label: "Dark Energy Properties Owned"},
        {value: `${profileData[3]}`, label: "Vertigo Properties Owned"},
        {value: `${otherData !== "" ? (parseInt(otherData.staked)/1e18).toLocaleString() : "loading"}`, label: "Vertigo Tokens Staked"},
        {value: `${otherData !== "" ? otherData.dividends : "loading"}`, label: "Vertigo Token Staking Dividends"},
        {value: `${profileData[4]}`, label: "Team Payout %"},
    ])
}

export const selectStylesGlobal = {
    valueContainer: () => ({
        padding: 10,
        display: "flex",
        alignItems: "center",
        position: "relative",
        maxWidth: "10vmax",
        height: "1vmax",
    }),
    menu: () => ({
        zIndex: 50,
        position: "fixed",
        backgroundColor: "#ffffff",
    }),
}

export const selectOptionsGlobal = (VertigoManager) => 
{

    console.log(VertigoManager)

    return(
    [
        {value: `${true}`, label: "Ecosystem enabled"},
        {value: `${VertigoManager.totalVCashStaked}`, label: "Total Dark Energy Staked"},
        {value: `${(VertigoManager.yearsPassed)} years, ${VertigoManager.weeksPassed} weeks`, label: "Time since launch"},
        {value: `${(parseInt(VertigoManager.payoutPerVCash) / 1e18).toLocaleString()}`, label: "Tokens per staked Dark Energy On Last Reset"},
        {value: `${(parseInt(VertigoManager.vertigoPoolBalance) / 1e18).toLocaleString()}`, label: "Total Vertigo Tokens Staked"},
        {value: `${parseInt(VertigoManager.stakeWithdrawalCount).toLocaleString()}`, label: "Vertigo Token Stakes & Unstakes"},
        {value: `${VertigoManager.lastReset}`, label: "Last Pool Reset (POSIX)"},
        {value: `${VertigoManager.ownerPayoutShare}%`, label: "Owner team payout"},
    ])
}
