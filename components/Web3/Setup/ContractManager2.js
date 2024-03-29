import {ethers} from 'ethers'
import {isMobile} from 'react-device-detect'

import VertigoToken from '../../../abi/VertigoToken.json'
import VertigoProfile from '../../../abi/VertigoProfile.json'
import VertigoProperty from '../../../abi/VertigoProperty.json'

export let tokenAddress 
export let profileAddress 
export let propertyAddress

export let provider
export let vert 
export let profile
export let property 

if(!isMobile && window.ethereum !== undefined)
{
    tokenAddress = "0x0B22063a2eDfa789003aFCF277C4Ba97401b14d8"
    profileAddress = "0xe1b2925019C7cc6ef39ad8c6735b941538795859"
    propertyAddress = "0xfcFa2185D205Fa953dE687CD88a24DDEf28c1bB7"

    provider = new ethers.providers.Web3Provider(window.ethereum)
    vert = new ethers.Contract(tokenAddress, VertigoToken.abi, provider.getSigner())
    profile = new ethers.Contract(profileAddress, VertigoProfile.abi, provider.getSigner())
    property = new ethers.Contract(propertyAddress, VertigoProperty.abi, provider.getSigner())
    window.ethereum.on('accountsChanged', function(accounts){
        console.log("Account changed")
})}

