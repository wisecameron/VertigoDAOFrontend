import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export default function InFrameChecker(props) //posLow, posHigh, pages, inFrame, setInFrame
{
    const scroll = useScroll()

    useFrame(() =>
    {
        let pos =  Math.round(((props.pages * scroll.offset) + Number.EPSILON) * 10) / 10

        if(pos >= props.posLow && pos < props.posHigh)
        {
            if(!props.inFrame) props.setInFrame(true)
        }
        else if(props.inFrame)
        {
            props.setInFrame(false)
        }
    })
}