import '../../../css/App.css'
import { TagLine } from '../../Roadmap2/Scene/HTML/SharedStyles';
import {animated, useSpring} from 'react-spring'
import { Canvas, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import style_glow from '../../../css/glowButton.module.css'
import submit from '../../../assets/db/submit.png'
import { MasterStars } from '../../Scene/StarScene/MasterStars';
import { Stars } from '../../PeripheralPages/interfaceComponents/Scene/Stars';
import { ConnectProfile } from '../../Web3/Profile/ProfileHandler';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function ProfileDisconnectedComponent(props)
{

    const [profileId, setProfileId] = useState('');
    const [visible, setVisible] = useState(true);

    const HandleClick = async() =>
    {
        if(profileId === '')
        {
            alert('Invalid Profile ID!');
            return;
        }

        let profileData = await ConnectProfile(parseInt(profileId))
        props.setProfileId(profileId)
        
        if(profileData.length > 0)
        {
            props.setProfileData(profileData)
        }
    }

    const HandleChange = (event) =>
    {
        setProfileId(event.target.value)
    }

    useEffect(() =>
    {
        if(props.profileId === undefined) return;

        if(props.profileId !== -1)
        {
            const timer = setTimeout(() =>
            {
                setVisible(false);
            }, 2000)
        }

    }, [props.profileId, visible])


    const DivStyles = useSpring({
        from: {     
            opacity: 0, 
            position: "absolute", 
            display: "flex",
            flexDirection: "column",
            zIndex: 1, 
            width: "60vmax", 
            height: "40vmax", 
            background: "black", 
            marginLeft: "0vmax", 
            marginTop: "-5vmax",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            marginLeft: "20vmax",
            borderRadius: "30px"
        },
        to: {
            opacity: (props.interfacePage === 0 && props.profileId === -1) ? 1 : 0,
            position: "absolute", 
            display: "flex",
            zIndex: (props.interfacePage === 0 && props.profileId === -1) ? 20 : 1, 
            flexDirection: "column",
            width: "60vmax", 
            height: "40vmax", 
            background: "black", 
            marginLeft: "0vmax", 
            marginTop: "-5vmax",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: (props.interfacePage === 0 && props.profileId === -1) ? "auto" : "none",
            marginLeft: "20vmax",
            borderRadius: "30px"
        },
        config: {duration: 2000},
        delay: 0
    })



    return(
        <>
            {visible === false ? null :
            (
                <animated.div style = {DivStyles}>

                    <TagLine className = "lightFuturistic" style = {{zIndex: 1}}>
                        Enter Your Profile ID
                    </TagLine>
                    <Canvas style = {{width: "100%", position: "absolute", marginLeft: "0vmax", pointerEvents: "none", borderRadius: "30px"}}>
                        <color attach = "background" args = {["black"]} />
                        <Stars count = {4500} position = {[0, -50,0]}/>
                        <EffectComposer>
                            <Bloom luminanceThreshold={0} intensity={1}/>
                        </EffectComposer>
                    </Canvas>

                    <input 
                    type = "text"
                    onChange={(e) => {HandleChange(e)}}
                    style = {{zIndex: 1}}/>
                    <button 
                    className = {style_glow.glowingButton} 
                    style = {{marginTop: "2vmax"}}
                    onClick={() => {HandleClick()}}>Submit</button>
                </animated.div>
            )}

        </>
    )
}

const SpinnyCapsule = () =>
{
    const ref = useRef()
    const ref2 = useRef()

    useFrame((_, delta) =>
    {
        ref.current.rotation.y += delta;

    })

    return(
        <>
            <mesh ref = {ref} position = {[0, 2.5 ,0 ]} rotation = {[4, 0, 0]}>
                <coneGeometry args = {[1,1,3,1]}/>
                <meshBasicMaterial color = "#F5D3A5" />
            </mesh>

        </>
    )
}