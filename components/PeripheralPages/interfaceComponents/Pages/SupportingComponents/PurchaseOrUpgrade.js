import purchase from '../../../../../assets/db/purchaseButton.png'
import upgrade from '../../../../../assets/db/upgrade.png'
import { BuyProperty } from '../../../../Web3/Property/PropertyHandler'

export function PurchaseOrUpgrade(props)
{
    const Buy = async() =>
    {
        await BuyProperty(props.profileId, props.isDE)
    }

    console.log(props.owned)

    let DynamicButton = (
        <img 
            src = {purchase} 
            style = {{cursor: "pointer", width: "12vmax", marginTop: "1vmax", marginLeft: "1.3vmax"}}
            onClick = {() => {Buy()}}
        />
    )

    if(props.owned > props.index)
    {
        DynamicButton = (
            <img 
                src = {upgrade} 
                style = {{cursor: "pointer", width: "12vmax", marginTop: "1vmax", marginLeft: "1.3vmax"}}
                onClick = {() => {Buy()}}
            />
        )
    }


    return(
        <div>
            {DynamicButton}
        </div>
    )
}