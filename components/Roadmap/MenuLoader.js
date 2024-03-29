import { InterfaceComponent } from "../PeripheralPages/Interface";
import menuimg from '../../assets/menuimg.png';
import styled from "styled-components";
import '../../css/App.css';

const MenuContainer = styled.div`
    margin-top: 85vh;
    cursor: pointer;
    height: 10vh;
    border-radius: 20px;
    margin-left: 3vw;
    border: 2px solid #ffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 10vmax;

    @media(max-width: 1000px)
    {
        width: 12vmax;
    }
    @media(max-width: 500px)
    {
        width: 15vmax;
    }
`

export default function MenuLoader(props)
{
    let Menu = ((props.loadMenu) ? <InterfaceComponent style = {{marginTop: "-95vh", position: "absolute", marginLeft: "12.5vw"}}/> : <div />)

    /*
    return(        
    <>
        <img src = {menubutton} 
        style = {{cursor: "pointer", marginTop: "70vh", scale: "66.103%", marginLeft: "7vw"}}
        onClick = {() => {setLoadMenu(!loadMenu)}} />
        {Menu}
    </>)*/

    return(
        <div>
            <MenuContainer
            onClick = {() => {props.setLoadMenu(!props.loadMenu)}}
            >
                <img src = {menuimg} 
                    alt = "Menu icon"
                    style = {{width: "2vmax", marginLeft: "1vmax"}}
                />
                <h1 
                style = {{color: "white", fontSize: "2vh", marginLeft: "1vmax"}}
                className = "fontLink">Contract Interface</h1>
            </MenuContainer>
            {Menu}
        </div>
    )

}