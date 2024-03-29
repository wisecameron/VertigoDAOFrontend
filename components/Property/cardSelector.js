import React, {useState} from 'react'
import StyledCard from './card'
import { StyledCard2 } from './card'

import deIcon from '../../assets/propertyImg2/darkEnergyIcon.png'
import tokenIcon from '../../assets/propertyImg2/tokenIcon.png'

import cliffs from '../../assets/propertyImg2/DivineCliffsNew.png'
import dune from '../../assets/propertyImg2/dunesNewIMG.png'
import orb from '../../assets/propertyImg2/JewelNew.png'
import kalypso from '../../assets/propertyImg2/KalypsoNew.png'
import epsilon from '../../assets/propertyImg2/objectNew.png'
import summeral from '../../assets/propertyImg2/summeralNew.png'
import mirage from '../../assets/propertyImg2/mirageNew.png'
import thieves from '../../assets/propertyImg2/thievesNew.png'
import wellan from '../../assets/propertyImg2/vendettaNew.png'

export function CardPicker(props)
{
    const [loaded, setLoaded] = useState(false)
    const duneDesc = [dune, '-100 ⇄ +42', 'The first step in your journey.  Dunes is a barren wasteland, but also a critical trade route.  ', 'Dunes']
    const epsilonDesc = [epsilon, '-150 ⇄ +0.45x', 'Ancient technology built by a more sophisticated race.', 'Object 3']
    const kalypsoDesc = [kalypso, '-100 ⇄ +0.4x', 'There are two types of people.  Those who own planets, and those who do not.', 'Kalypso']
    const mirageDesc = [mirage, '-25 ⇄ +0.3x', 'Rumor says the portal leads to vast riches, but only if it exists at all.', 'Mirage']
    const summeralDesc = [summeral, '-900 ⇄ +308', "Famed for its white slopes.", 'High Street']
    const thievesDesc = [thieves,'-300 ⇄ +105',"A prudent investment in the criminal underworld.", 'City of Thieves']
    const wellanDesc = [wellan,'-3000 ⇄ +798', 'Illicit deals and high-class espionage.', 'Vendetta']
    const orbDesc = [orb, '-300 ⇄ +0.55x', "The jewel has obliterated its previous owners, but you can't seem to get it off your mind.", 'Blighted Jewel']
    const CliffsDesc = [cliffs, '-50 ⇄ +0.35x', 'The ancient energy surrounding this place is known to distort the human mind.', 'Divine Cliffs']

    const getImg = () =>
    {
        if(props.isVCash === true)
        {
            switch(props.index)
            {
                case 0:
                    return duneDesc[0]
                case 1:
                    return thievesDesc[0]
                case 2:
                    return summeralDesc[0]
                case 3:
                    return wellanDesc[0]
                default: 
                    return duneDesc[0]
            }
        }
        else
        {
            switch(props.index)
            {
                case 0:
                    return mirageDesc[0]
                case 1:
                    return CliffsDesc[0]
                case 2:
                    return kalypsoDesc[0]
                case 3:
                    return epsilonDesc[0]
                case 4:
                    return orbDesc[0]
                default: 
                    return mirageDesc[0]
            }
        }
    }

    const getPrice = () =>
    {
        if(props.isVCash === true)
        {
            switch(props.index)
            {
                case 0:
                    return duneDesc[1]
                case 1:
                    return thievesDesc[1]
                case 2:
                    return summeralDesc[1]
                case 3:
                    return wellanDesc[1]
                default: 
                    return duneDesc[1]
            }
        }
        else
        {
            switch(props.index)
            {
                case 0:
                    return mirageDesc[1]
                case 1:
                    return CliffsDesc[1]
                case 2:
                    return kalypsoDesc[1]
                case 3:
                    return epsilonDesc[1]
                case 4:
                    return orbDesc[1]
                default:
                    return mirageDesc[1]
            }
        }
    }

    const getDesc = () =>
    {
        if(props.isVCash === true)
        {
            switch(props.index)
            {
                case 0:
                    return duneDesc[2]
                case 1:
                    return thievesDesc[2]
                case 2:
                    return summeralDesc[2]
                case 3:
                    return wellanDesc[2]
                default:
                    return duneDesc[2]
            }
        }
        else
        {
            switch(props.index)
            {
                case 0:
                    return mirageDesc[2]
                case 1:
                    return CliffsDesc[2]
                case 2:
                    return kalypsoDesc[2]
                case 3:
                    return epsilonDesc[2]
                case 4:
                    return orbDesc[2]
                default:
                    return mirageDesc[2]
            }
        }
    }


    const getName = () =>
    {
        if(props.isVCash === true)
        {
            switch(props.index)
            {
                case 0:
                    return duneDesc[3]
                case 1:
                    return thievesDesc[3]
                case 2:
                    return summeralDesc[3]
                case 3:
                    return wellanDesc[3]
                default:
                    return duneDesc[3]
            }
        }
        else
        {
            switch(props.index)
            {
                case 0:
                    return mirageDesc[3]
                case 1:
                    return CliffsDesc[3]
                case 2:
                    return kalypsoDesc[3]
                case 3:
                    return epsilonDesc[3]
                case 4:
                    return orbDesc[3]
                default:
                    return mirageDesc[3]
            }
        }
    }

    const getIcon = () =>
    {
        if(props.isVCash === true)
        {
            return deIcon
        }
        return tokenIcon
    }

    const getType = () =>
    {
        if(props.isVCash === true)
        {
            return "Dark Energy Property"
        }
        return "Vertigo Token Property"
    }

    if(!loaded)
    {
        setLoaded(true)
        return(
            <StyledCard />
        )
    }
    return(
        <StyledCard2 IMG = {getImg()} PURPOSE = {getPrice()} TEXT = {getDesc()} PROPERTYNAME = {getName()} isVCash = {props.isVCash} TYPE = {getType()} icon = {getIcon()}/>
    )
}
