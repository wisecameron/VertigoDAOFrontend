import React, {useState} from 'react'
import { HeaderNoGraphicsTPB } from '../HeaderFooter/Header'
import InterfaceScene from './interfaceComponents/Scene/interfaceScene'
import styled from 'styled-components'
//import { CardPicker } from '../Property/cardSelector'
import '../../css/App.css'

import DashboardHeading from './interfaceComponents/Dashboard/DashboardHeading'
import {DashboardSectionVert} from './interfaceComponents/Dashboard/DashboardSection'

import Web3DisconnectedDashboard from './interfaceComponents/Misc/Web3Disconnected'
import ProfileConnected from './interfaceComponents/Profile/ProfileConnected'
import ProfileDisconnected from './interfaceComponents/Profile/ProfileDisconnected'
import AdminDashboard from './interfaceComponents/Admin/AdminDashboard'
import Feed from './interfaceComponents/Sidebar/Feed'

import { PropertiesContainer } from './interfaceComponents/Pages/PropertiesPage'
import StakingPage from './interfaceComponents/Pages/StakingPage'

import { Load, AccountLoader } from '../Web3/Init/InitConnectionFunctions'

import { GetOwnerAddress, GetPropertyEnabled, GetProfileEnabled, PublicViewBoolVertigo} from '../Web3/Init/InitConnectionOwner'

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: none;
    position: absolute;
    overflow: hidden;
`

const DashboardContainer = styled.div`
    background: #313131;
    width: 60vw;
    height: 80vh;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    display: flex;
    flex-direction: column;
`

const FeedContainer = styled.div`
    background: #212121;
    width: 17vw;
    height: 80vh;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-left: 0vw;
    margin-top:  15vh;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Interface()
{
    const [address, setAddress] = useState("")
    const [web3Connected, setWeb3Connected] = useState(false)
    const [profileConnected, setProfileConnected] = useState(false)
    const [profileData, setProfileData] = useState([])
    const [needsConfiguration, setNeedsConfiguration] = useState(false)
    const [playable, setPlayable] = useState(false)
    const [config, setConfig] = useState(false)
    const [profileEnabled, setProfileEnabled] = useState(false)
    const [propertyEnabled, setPropertyEnabled] = useState(false)
    const [profileId, setProfileID] = useState("")
    const [currPage, setPage] = useState("dashboard")
    const [pass, setPass] = useState('');

    const LoadWrapper = async() =>
    {
        const LoadHandler = async() =>
        {
            await Load(setWeb3Connected);
        }

        await LoadHandler()
    }

    if(!web3Connected) LoadWrapper()



    /*
    Step 2: User has connected to metamask but this setup has not run yet.
    Get user address.
    If user is owner, check if ecosystem is enabled.  If not, display setup.
    */
    if(web3Connected && address === "")
    {
        let ownerAddress;
        let account;

        //async wrapper
        const InnerHandler = async() =>
        {
            let LoadAddresses = async() =>
            {
                account = await AccountLoader();
                ownerAddress = await GetOwnerAddress();
            }

            //User & owner address loader
            await LoadAddresses();

            const OwnerDataLoader = async() =>
            {
                setAddress(account);
                //Locked to owner only
                if(account !== ownerAddress)
                {
                    return;
                }

                //check if property, profile, token are configured & playable.
                const propert = await GetPropertyEnabled();
                const prof = await GetProfileEnabled();
                const configD = await PublicViewBoolVertigo(0)
                const playableD = await PublicViewBoolVertigo(1)

                setConfig(configD);
                setPlayable(playableD);
                setProfileEnabled(prof);
                setPropertyEnabled(propert);

                //opens owner dashboard
                if((!playableD | !configD | !propert | !prof) === 1)
                {
                    setNeedsConfiguration(true);
                }
            }
            await OwnerDataLoader();
        }
        InnerHandler();
    }

    var Web3Dashboard = Web3DisconnectedDashboard(web3Connected, needsConfiguration) //1
    var ProfileDisconnectedDashboard = ProfileDisconnected(profileConnected, web3Connected, (val) => setProfileData(val), needsConfiguration, (val) => setProfileConnected(val), (val) => setProfileID(val)) //2
    var ProfileConnectedDashboard = ProfileConnected(profileConnected, needsConfiguration, profileId, address, profileData[7], profileData) //3
    var ConfigurationDashboard = AdminDashboard(needsConfiguration, playable, config, profileEnabled, propertyEnabled, {marginTop: "5vh", marginLeft: "5vw"})
    var TokenSection = (needsConfiguration) ? "" : <DashboardSectionVert address = {address} marginTop = "5vh" marginLeft = "5vw"/>

    let Dashboard = ""

    if(currPage === 'dashboard')
    {
        Dashboard = 
        (
            <>
                {ProfileConnectedDashboard}
                {ProfileDisconnectedDashboard}
                {TokenSection}
            </>
        )
    }

    let PropertyDashboard = ""

    if(currPage === 'properties')
    {
        PropertyDashboard = 
        (
            <PropertiesContainer 
            index = {parseInt(profileData[2])} 
            DECap = {profileData[2]} 
            VCap = {profileData[3]}
            profileId = {profileId}
            profileData = {profileData}
            />
        )
    }

    let StakingDashboard = ""

    if(currPage === 'staking')
    {
        StakingDashboard = 
        (
            <StakingPage 
            profileId = {profileId} DarkEnergyStaked = {profileData[6]}/>
        )
    }

    /* password */
    if(pass.toLowerCase() !== '')
    {
      return(
        <div style = {{width: "100vw",
         height: "100vh", 
         background: "black", 
         display: "flex", 
         flexDirection: "column", 
         alignItems: "center" }}>
          <h1 style = {{marginTop: "30vh", color: "red"}}>VertigoDAO</h1>
          <h1 style = {{marginTop: "0vh", color: "white", textAlign: "center"}}>Enter password to proceed.</h1>
          <input 
            value = {pass} 
            onChange = {event => setPass(event.target.value)}
            style = {{width: "20vw", marginTop: "5vh"}}>
          </input>
        </div>
      )
    }
    /* password */
    return(
        <div style = {{overflow: "hidden"}}>
            <HeaderNoGraphicsTPB page = "interface"/>
            <InterfaceScene style = {{position: "fixed", width: "100vw", height: "100vh"}}/>
            <PageContainer>
                <Row>
                    <DashboardContainer style = {{position: "absolute", opacity: 0.8, marginTop: "15vh", marginLeft: "10.5vmax", zIndex: 10}} />
                    <DashboardContainer style = {{marginTop: "15vh", background: "none", marginLeft: "10.5vw", zIndex: 11}}>
                        <DashboardHeading 
                        profileId = {profileId}
                        style = {{marginLeft: "0vw", marginTop: "1vh"}}
                        setPage = {(val) => {setPage(val)}} 
                        page = {currPage} 
                        connected = {web3Connected}/>
                        
                        {Dashboard}
                        {Web3Dashboard}
                        {ConfigurationDashboard}
                        {PropertyDashboard}
                        {StakingDashboard}
                    </DashboardContainer>
                    <FeedContainer style = {{position: "absolute", background: "#202020", marginLeft: "70.5vmax", opacity: 0.8, zIndex: 10}} />
                    <FeedContainer style = {{background: "none", zIndex: 11}}>
                        <Feed 
                        profileConnected = {profileConnected} 
                        profileId = {profileId} 
                        staked = {profileData[6]} 
                        password = {profileData[5]} 
                        multiplier = {profileData[0]} 
                        income = {profileData[8]} 
                        profileData = {profileData}
                        setProfileData = {(val) => {setProfileData(val)}}
                        setProfileConnected = {(val) => {setProfileConnected(val)}}
                        setProfileId = {(val) => {setProfileID(val)}}
                        web3Connected = {web3Connected}
                        />
                    </FeedContainer>
                </Row>
            </PageContainer>
        </div>
    )
}
