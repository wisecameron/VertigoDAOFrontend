import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import orbitron from '../../../assets/Orbitron_Regular.json'

/*
    Returns: List of text meshes

    input: [{text, size, height}]

    text: props.textData -- each gets props.size + 1 gap between from bottom (20)

    props: text: list, size: int, height: int
*/
export default function ActText(props)
{
    if(props.textData.length > 0)
    {
        extend({ TextGeometry })

        const font = new FontLoader().parse(orbitron);

        let textData = props.textData
        let posX = props.posX;
        let posZ = props.posZ;

        let bottomValue = (props.bottom === undefined) ? 20 : props.bottom;
        let TextMeshList = []
        let i = textData.length - 1;

        for(i; i !== -1; i--)
        {
            bottomValue += textData[i].size + 1;
        }


        for(let i = 0; i < textData.length; i++)
        {
            let {text, size, height} = textData[i]
            size *= 2;

            let newTextMesh = (
                <mesh position = {[posX, bottomValue + 5, posZ]} key = {i} rotation = {[0,-1.5,0]}>
                    <textGeometry args = {[text, {font, size: size, height: height}]}/>
                    <meshStandardMaterial color = {props.color}/>
                </mesh>
            )

            bottomValue -= (size + 1);
            TextMeshList.push(newTextMesh)
        }
        return TextMeshList
    }
}

export function TextHandler(props)
{
    let textDataData = [["Roadmap", 1.5, 0.1, -5, -200, 7, "white"], ["Roadmap", 1.5, 0.1, -5, -200, 7, "white"]]

    return(
        <>
            <ActText 
                textData = {[{text: textDataData[0][0], size: textDataData[0][1], height: textDataData[0][2]}]} 
                posX = {textDataData[0][3]}
                posZ = {textDataData[0][4]}
                bottom = {textDataData[0][5]}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Smart Contract Development", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-500}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Complete", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-500}
                bottom = {6.5}
                color = {"#74e374"}
            />
            <ActText 
                textData = {[{text: "Front-End Development", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-800}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Complete", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-800}
                bottom = {6.5}
                color = {"#74e374"}
            />
            <ActText 
                textData = {[{text: "Smart Contract Testing", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-1000}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Complete", size: 1, height: 0.1}]} 
                posX = {-9}
                posZ = {-1000}
                bottom = {6.5}
                color = {"#74e374"}
            />
            <ActText 
                textData = {[{text: "Documentation", size: 1, height: 0.1}]} 
                posX = {-4}
                posZ = {-1300}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Complete", size: 1, height: 0.1}]} 
                posX = {-4}
                posZ = {-1300}
                bottom = {6.5}
                color = {"#74e374"}
            />
            <ActText 
                textData = {[{text: "Outreach", size: 1, height: 0.1}]} 
                posX = {-5.5}
                posZ = {-1600}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "In-Progress", size: 1, height: 0.1}]} 
                posX = {-5.5}
                posZ = {-1600}
                bottom = {6.5}
                color = {"yellow"}
            />
            <ActText 
                textData = {[{text: "Community Building", size: 1, height: 0.1}]} 
                posX = {-7}
                posZ = {-1900}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-7}
                posZ = {-1900}
                bottom = {6.5}
                color = {"red"}
            />
            <ActText 
                textData = {[{text: "Private Sale", size: 1, height: 0.1}]} 
                posX = {-5}
                posZ = {-2300}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-5}
                posZ = {-2300}
                bottom = {6.5}
                color = {"red"}
            />
            <ActText 
                textData = {[{text: "Pre-Sale", size: 1, height: 0.1}]} 
                posX = {-4}
                posZ = {-2600}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-4}
                posZ = {-2600}
                bottom = {6.5}
                color = {"red"}
            />
            <ActText 
                textData = {[{text: "Token Launch", size: 1, height: 0.1}]} 
                posX = {-5}
                posZ = {-2900}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-5}
                posZ = {-2900}
                bottom = {6.5}
                color = {"red"}
            />
            <ActText 
                textData = {[{text: "Ecosystem Launch", size: 1, height: 0.1}]} 
                posX = {-6}
                posZ = {-3200}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-6}
                posZ = {-3200}
                bottom = {6.5}
                color = {"red"}
            />
            <ActText 
                textData = {[{text: "Expansion Launch", size: 1, height: 0.1}]} 
                posX = {-6}
                posZ = {-3500}
                bottom = {10}
                color = {textDataData[0][6]}
            />
            <ActText 
                textData = {[{text: "Future Stage", size: 1, height: 0.1}]} 
                posX = {-6}
                posZ = {-3500}
                bottom = {6.5}
                color = {"red"}
            />
        </>
    )
}