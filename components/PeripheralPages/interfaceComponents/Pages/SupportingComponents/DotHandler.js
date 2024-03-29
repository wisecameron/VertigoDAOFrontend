import selected from '../../../../../assets/db/selected.png'
import unselected from '../../../../../assets/db/unselected.png'
import owned from '../../../../../assets/db/propowned.png'

export function DarkEnergyDots(props)
{
    return(
        <>
            <img src = {(props.index === 0) ? selected : (props.owned > 0) ? owned : unselected} />
            <img src = {(props.index === 1) ? selected : (props.owned > 1) ? owned : unselected} />
            <img src = {(props.index === 2) ? selected : (props.owned > 2) ? owned : unselected} />
            <img src = {(props.index === 3) ? selected : (props.owned > 3) ? owned : unselected} />
        </>
    )
}

export function VertDots(props)
{
    return(
        <>
            <img src = {(props.index === 0) ? selected : (props.owned > 0) ? owned : unselected} />
            <img src = {(props.index === 1) ? selected : (props.owned > 1) ? owned : unselected} />
            <img src = {(props.index === 2) ? selected : (props.owned > 2) ? owned : unselected} />
            <img src = {(props.index === 3) ? selected : (props.owned > 3) ? owned : unselected} />
            <img src = {(props.index === 4) ? selected : (props.owned > 4) ? owned : unselected} />
        </>
    )
}